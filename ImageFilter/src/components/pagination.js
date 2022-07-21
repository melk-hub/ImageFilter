import { useState } from "react";

const Pagination = (props) => {

    var pagesArray = [];
    var btnState = "";
    
    const handleClick = value => e => {
        e.preventDefault();
        props.changePage(value);
        window.scrollTo(0, 0);
    };
    
    for (var i = 1; i < 11; i++) {
        {(i == props.page) ? btnState = "p-2.5 px-4 mx-1 text-lg bg-green-500 rounded-lg" : btnState = "p-2.5 mx-1 text-lg" }
        pagesArray.push(<button className={btnState} onClick={handleClick(i)} key={i} value={i}>{i}</button>);
    }

    return <div className="flex justify-center bg-slate-700">
        <div className="m-2.5 p-2 px-3 bg-white rounded-3xl">
            {pagesArray}
        </div>
    </div>
}

export default Pagination;