import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../../store/actions/cartActions";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";

const Dish = ({ dish, isInCart }) => {
    const [user] = useAuthState(auth);
    const dispatch = useDispatch();

    const { id, title, sizes, img, desc, category} = dish;

    const [selectedSize, setSelectedSize] = useState('S');
    const [price, setPrice] = useState(sizes[0].Price);

    const handleSizeChange = (event) => {
        const newSize= event.target.value;
        setSelectedSize(newSize);
        // Find the corresponding price based on the selected size
        const newSizePrice = sizes.find((size) => size.Size === newSize)?.Price;
        if (newSizePrice) {
            setPrice(newSizePrice);
        }
    }

    const handleAddCart = () => {
        if(user){
            // console.log(id)
            const selectedPizza = {
                id: id,
                title: title,
                category: category,
                img: img,
                desc: desc,
                size: selectedSize,
                price: price,
            };
            toast.success("Added to Cart");
            dispatch(addToCart(user.uid, selectedPizza));
        }
        else{
            toast.error("Please Login!");
        }
    }

    const handleRemoveCart = () => {
        if(user){
            // console.log(id);
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
                            // Object.keys(sizes).map((size) => (
                            //     <option key={size} value={size}>
                            //         {size}
                            //     </option>
                            // ))
                            sizes.map((sizeOption) => (
                                <option key={sizeOption.Size} value={sizeOption.Size}>
                                    {sizeOption.Size}
                                </option>
                            ))
                        }

                    </select>
                    <span className="price">₹ {price}</span>
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