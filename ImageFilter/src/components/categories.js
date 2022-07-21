import React, { useEffect, useState } from "react";

const Categories = (props) => {
    var category = ["backgrounds", "fashion", "nature", "science", "education", "feelings", "health", "people", "religion", "places", "animals", "industry", "computer", "food", "sports", "transportation", "travel", "buildings", "business", "music"];
    var categoriesArray = [];
    const [categories, setCategories] = useState("");

    useEffect(() => {
        props.changeCategories(categories);
        window.scrollTo(0, 0);
    }, [categories]);

    const handleChange = e => {
        setCategories(e.target.value);
    }

    for (var i = 0; i < category.length; i++) {
        categoriesArray.push(<option key={category[i]} value={category[i]}>{category[i]}</option>);
    }

    return <div>
        <label className="text-black">Catégories: </label>
        <select onChange={handleChange}>
            <option></option>
            {categoriesArray};
        </select>
    </div>
}

export default Categories;