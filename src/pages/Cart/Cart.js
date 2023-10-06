import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase'
import { fetchCart } from '../../store/actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import Dish from '../../components/Items/Dish/Dishes';
import { getProducts } from '../../store/actions/productActions';
import './style.css';

function Cart() {
  const [user, loading] = useAuthState(auth);
  const cartState = useSelector((state) => state.cart);
  const allProducts = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(getProducts);
      dispatch(fetchCart(user.uid));
    }
  }, [user, loading]);

  // console.log("cart", cartState.products);
  // console.log("cartProduct", allProducts);

  const cartProducts = allProducts.filter((product) =>
    cartState.products.includes(product.id)
  );

  function handleCheckOut(){
    alert("Ordered Successfully");
  }

  if (cartState.loading) {
    return <div>Loading...</div>;
  }

  if (cartState.error) {
    return <div className='warning'>Error: {cartState.error}</div>
  }

  // console.log(cartState.message);
  if (cartState.products.length == 0) {
    return <div className='warning'>{cartState.message}</div>
  }

  return (
    <div className='cart-container'>
      <h2 style={{ textAlign: "center" }}>My Cart</h2>
      <div className='cart-body'>
        <div className='cartCalculation'>
          <h3>Listed Items</h3>
          <div className='mainCart'>
            {
              cartProducts &&
              cartProducts.map((product, index) => (
                <div className='cartlist' key={index}>
                  <div className='name-id'>
                    <div className='id'>{index + 1}. </div>
                    <div className='name'>{product.title}</div>
                  </div>
                  <div className='cartPrice'>$$$$</div>
                </div>
              )
              )
            }
          </div>
          <div className='total'>
            <div className='text'>Total</div>
            <div className='total-price'>$$$</div>
          </div>
          <button id='checkout' onClick={handleCheckOut}>Click To Checkout</button>
        </div>
        <div className='cart-display'>
          {cartProducts.map((product, index) => (
            <Dish key={index} dish={product} isInCart={cartState.isInCart} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cart