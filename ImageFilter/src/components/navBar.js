import { useEffect, useState } from "react";
import SearchBar from "./searchBar.js"
import Categories from "./categories.js";

function NavBar(props) {
    const [searchFilter, setSearchFilter] = useState("");
    const [category, setCategory] = useState("");

    const handleSetFilter = (filter) => {
        setSearchFilter(filter);
    }
    
    const handleSetCategories = (catégories) => {
        setCategory(catégories);
    }

    useEffect(() => {
        props.changeCategories(category);
        props.changeFilter(searchFilter);
        props.changePage(1);
        window.scrollTo(0, 0);
    }, [category, searchFilter]);

    return (<>
        <div className="p-3 bg-amber-500 text-black text-2xl flex justify-between">
            <p>Image Filter</p>
            <Categories changeCategories={handleSetCategories} />
            </div>
            <SearchBar changeFilter={handleSetFilter} />
    </>
    );
}

export default NavBar;