import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase'
import { fetchCart } from '../../store/actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { getProducts } from '../../store/actions/productActions';
import './style.css';

function Cart() {
  const [user, loading] = useAuthState(auth);
  const cartState = useSelector((state) => state.cart);
  // const allProducts = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(getProducts);
      dispatch(fetchCart(user.uid));
    }
  }, [user, loading]);

  // console.log("cart", cartState.products);


  const calci = cartState.products.reduce((acc, item) => {
    return acc+item.price;
  },0);
  // console.log("cartProduct", allProducts);

  // const cartProducts = allProducts.filter((product) =>
  //   cartState.products.includes(product.id)
  // );

  // console.log("cartPro", cartProducts);

  function handleCheckOut() {
    alert("Ordered Successfully");
  }

  if (cartState.loading) {
    return <div>Loading...</div>;
  }

  if (cartState.error) {
    return <div className='warning'>Error: {cartState.error}</div>
  }

  // console.log(cartState.message);
  if (cartState.products.length === 0) {
    return <div className='warning'>{cartState.message}</div>
  }

  return (
    <div className='cart-body'>
      <div className='cartCalculation'>
        <h3 style={{textAlign: "center"}}>My Cart</h3>
        {/* <div className='cart-body'> */}
        {
          cartState.products.map((product, index) =>
            <div className='mainCart' key={index}>
              <CartItem product={product} index={index} />
            </div>
          )
        }
        {/* </div> */}
      </div>
      <div className='total'>
        <div className='text'>Total</div>
        <div className='total-price'>{calci}</div>
      </div>
      <button id='checkout' onClick={handleCheckOut}>Click To Checkout</button>
    </div>
  )
}

export default Cart