import { useState } from "react";

const SearchBar = (props) => {
    const [searchFilter, setSearchFilter] = useState("");

    const handleChange = event => {
        setSearchFilter(event.target.value);
    };

    const handleClick = e => {
        e.preventDefault();
        props.changeFilter(searchFilter);
        window.scrollTo(0, 0);
    };

    return <div className="sticky top-0">
        <form className="pt-3 m-10 my-5 flex flex-col items-center">
            <input type="text" className="p-2.5 h-15 text-black rounded-md text-4xl" placeholder="Search" value={searchFilter} onChange={handleChange}>
            </input>
            <button className="p-2.5 w-1/5 h-15 px-5 m-4 text-indigo-100 text-3xl transition-colors duration-150 bg-sky-500 rounded-lg focus:shadow-outline hover:bg-sky-600" onClick={handleClick}>Search</button>
        </form>
    </div>
}

export default SearchBar;