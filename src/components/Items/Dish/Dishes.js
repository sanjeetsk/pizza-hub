import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../../store/actions/cartActions";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";

const Dish = ({ dish, isInCart }) => {
    const [user] = useAuthState(auth);
    const dispatch = useDispatch();

    const { id, title, sizes, img, desc } = dish;

    const [selectedSize, setSelectedSize] = useState('S');

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    }

    const handleAddCart = () => {
        if(user){
            console.log(id)
            toast.success("Added to Cart");
            dispatch(addToCart(user.uid, id));
        }
        else{
            toast.error("Please Login!");
        }
    }

    const handleRemoveCart = () => {
        if(user){
            console.log(id);
            toast.success("Removed From Cart");
            dispatch(removeFromCart(user.uid, id));
        }
        else{
            toast.error("Please Login!");
        }
    }

    // console.log("cart", isInCart);

    return (
        <div className="dish">
            <img src={img} alt={title} className="dish-image" />
            <div className="dish-details">
                <div className="title">
                    <h2>{title}</h2>
                </div>
                <p className="description">{desc}</p>
            </div>
            <div className="size-container">

                <div className="price-size">
                    <label htmlFor="size" className="size-label">Select Size:</label>
                    <select id="size" value={selectedSize} onChange={handleSizeChange} className="size-select">
                        {
                            Object.keys(sizes).map((size) => (
                                <option key={size} value={size}>
                                    {size}
                                </option>
                            ))
                        }

                    </select>
                    <span className="price">₹ {sizes[selectedSize]}</span>
                </div>
            </div>
            {
                isInCart == true ?
                <button className="addCart" onClick={handleRemoveCart}>Remove From Cart</button>
                :
                <button className="addCart" onClick={handleAddCart}>Add to Cart</button>
            }
        </div>
    );
}

export default Dish;