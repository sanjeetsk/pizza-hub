import { useDispatch } from "react-redux"
import Dish from "./Dishes"
import { useEffect } from "react";
import { filterProducts } from "../../../store/slices/productSlice";

const DishList = ({dishes, category}) => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(filterProducts(category))
    }, [category])

    
    
    return(
        <div className="dish-list">
            {
                dishes.products.map((dish) => (
                    <Dish key={dish.id} dish={dish} />
                ))
            }
        </div>
    )
}

export default DishList