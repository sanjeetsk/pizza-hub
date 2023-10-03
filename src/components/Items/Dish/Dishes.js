import { useState } from "react";

const Dish = ({ dish }) => {
    const { title, sizes, img, desc } = dish;

    const [selectedSize, setSelectedSize] = useState('S');

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    }

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
            <button className="addCart">Add to Cart</button>
        </div>
    );
}

export default Dish;