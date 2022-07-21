import React from "react";
import noPic from "../images/no-camera.png"

const Pagination = (props) => {

    var pagesArray = [];
    var btnState = "";
    var pagination = "";
    
    const handleClick = value => e => {
        e.preventDefault();
        props.changePage(value);
        window.scrollTo(0, 0);
    };
    
    for (var i = 1; i < (props.totalOfPage/50 + 1); i++) {
        {(i == props.page) ? btnState = "p-2.5 px-4 mx-1 text-lg bg-green-500 rounded-lg" : btnState = "p-2.5 mx-1 text-lg" }
        pagesArray.push(<button className={btnState} onClick={handleClick(i)} key={i} value={i}>{i}</button>);
    }

    if ((props.totalOfPage/50) > 0) {
        pagination = (<div className="m-2.5 p-2 px-3 bg-white rounded-3xl">
            {pagesArray}
        </div>)
    } else {
        pagination = (<div></div>)
    }

    return <div className="flex justify-center bg-slate-700">
        {pagination}
    </div>
}

export default Pagination;