const FilteredDish = ({categories, activeCategory, setCategory}) =>{

    return(
        <div className="category-filter">
            { categories.map((category, index) =>
                <button
                    key={index}
                    onClick={()=>setCategory(category)}
                    className={activeCategory === category ? 'active' : ''}
                    >
                    {category}
                </button>
            )}
        </div>
    )
}

export default FilteredDish;