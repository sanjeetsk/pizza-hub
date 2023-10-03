import Dish from "./Dishes"

const DishList = ({dishes, category}) => {
    const filterDish = category === 'All' ? dishes : dishes.filter((dish) =>( dish.category === category) );

    return(
        <div className="dish-list">
            {
                filterDish.map((dish) => (
                    <Dish key={dish.id} dish={dish} />
                ))
            }
        </div>
    )
}

export default DishList