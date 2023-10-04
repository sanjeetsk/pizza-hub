import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase'
import { fetchCart } from '../../store/actions/cartActions';
import { useSelector } from 'react-redux';
import Dish from '../../components/Items/Dish/Dishes';

function Cart() {
  const [loading] = useAuthState(auth);
  const [user] = useAuthState(auth);
  const cartState = useSelector((state) => state.cart);
  const allProducts = useSelector((state) => state.product.products);

  console.log(cartState);

  useEffect(() => {
    if(user){
      fetchCart(user.uid);
    }
  }, [user]);

  const cartItemIds = cartState.products.map((item) => item.item);

  console.log("all products",allProducts);

  const cartProducts = allProducts.filter((product) =>
  cartItemIds.includes(product.id)
  );

  console.log("cartItem",cartProducts)

  return (
    <div>
      <h2>My Cart</h2>
      <ul>
        {cartProducts.map((product) => (
          <Dish key={product.id} dish={product} />
        ))}
      </ul>
    </div>
  )
}

export default Cart
