import React, { useEffect, useState } from 'react'
import { pizzaMenu } from './MenuData';
import FilteredDish from './Dish/FilteredDish';
import DishList from './Dish/DishList';
import { useSelector, useDispatch } from 'react-redux';
// import useDispatch from 'react-redux';
import './style.css';
import { getProducts } from '../../store/actions/productActions';


function Menu() {
  const [category, setCategory] = useState('All');
  const categories = ['All', 'veg', 'special'];
  const productState = useSelector((state) => state.product)
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getProducts)
  }, [])

  if(productState.loading){
    return <>Loading...</>
  }

  if(productState.error){
    return <p style={{color: 'red', textAlign: 'center'}}>Error: {productState.error}</p>
  }

  return (
    <div id="main">
      <h1 style={{ textAlign: "center" }}>Our Menu</h1>
      <FilteredDish
        categories={categories}
        activeCategory={category}
        setCategory={setCategory}
      />

      <DishList dishes={productState} category={category} />
    </div>
  )
}

export default Menu
