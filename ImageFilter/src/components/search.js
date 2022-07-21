import React,{ useEffect, useState } from "react";
import axios from "axios";
import Diplay from "./displayImg.js"
import Pagination from "./pagination.js"
import NavBar from "./navBar.js";
import noPic from "../images/no-camera.png"

function Search () {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [searchFilter, setSearchFilter] = useState("");
    const [category, setCategory] = useState("");
    var nbPerPage = 50;
    var diplayImg = "";
  
    useEffect(() => {
        const APIkey = process.env.REACT_APP_API_ACCESS_KEY;
        const getData = async () => {
            const data = await axios.get(
                `https://pixabay.com/api/?key=${APIkey}&per_page=${nbPerPage}&page=${page}&q=${searchFilter}&category=${category}`
            );
        setData(data);
        };
        getData();
    }, [page, searchFilter, category]);
  
    const handleSetFilter = (filter) => {
      setSearchFilter(filter);
    }
  
    const handleSetPage = (pages) => {
      setPage(pages);
    }
  
    const handleSetCategories = (catégories) => {
      setCategory(catégories);
    }

    if ((data.data ? data.data.totalHits/50 : 1) > 0) {
        diplayImg = (<div></div>);
    } else {
        diplayImg = (<div className="flex justify-center text-white text-3xl mt-40">
            <img src={noPic} className="w-10 mr-5"></img>
            <p>NO PICTURE FOUND</p>
        </div>);
    }
  
    return (<div className="bg-slate-700">
            <NavBar changeCategories={handleSetCategories} changeFilter={handleSetFilter} changePage={handleSetPage} />
            <div className="grid gap-0 grid-cols-5 auto-cols-max h-full max-h-[62vh] overflow-x-hidden overflow-scroll">
                {data.data ? data.data.hits.map(image => (
                    <Diplay url={image.largeImageURL} key={image.id} />
                )) : null}
            </div>
            {diplayImg};
        <Pagination changePage={handleSetPage} page={page} totalOfPage={data.data ? data.data.totalHits : null}/>
    </div>
    );
}

export default Search;