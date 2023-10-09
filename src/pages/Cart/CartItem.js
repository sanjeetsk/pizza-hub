import React from 'react'

function CartItem({product, index}) {
    const { id, title, size, img, desc, category, price} = product;

    const handleIncrease = () =>{
        alert('increse')
    }
    const handleDecrease = () => {
        alert('decrese')
    }
    return (
        <div className='cartItem'>
            <div className='cart-num'>{index+1}.</div>
            <img src={img} />
            <div className='cart-title-size-desc'>
                <div className='cart-title'>{title}</div>
                <div className='cart-desc'>{desc}</div>
                <div className='cart-size-cat'>{size} | {category}</div>
            </div>
            <div className='cart-qty-price'>
                <div className='cart-qty'>
                    <button className='cart-qty-btn' onClick={handleIncrease}>-</button>
                    <button className='cart-qty-btn' >{1}</button>
                    <button className='cart-qty-btn' onClick={handleDecrease}>+</button>
                </div>
                <div className='cart-qty-price-text'>
                    ₹ {price}
                </div>
            </div> 
        </div>
    )
}

export default CartItem
