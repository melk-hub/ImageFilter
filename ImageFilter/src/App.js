import React,{ useEffect, useState } from "react";
import axios from "axios";
import Diplay from "./components/displayImg.js"
import SearchBar from "./components/searchBar.js"
import Pagination from "./components/pagination.js"
import Categories from "./components/categories.js";
import home from "./images/home.png"
import './css/App.css';
import './css/index.css';

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchFilter, setSearchFilter] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
      const APIkey = process.env.REACT_APP_API_ACCESS_KEY;
      const getData = async () => {
          const data = await axios.get(
              `https://pixabay.com/api/?key=${APIkey}&per_page=50&page=${page}&q=${searchFilter}&category=${category}`
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

  return (<div>
      <div className="w-full h-full bg-slate-700">
        <div className="mb-5 p-2.5 bg-amber-500 text-black text-2xl flex justify-between">
          <p>Image Filter</p>
          <Categories changeCategories={handleSetCategories} />
        </div>
        <SearchBar changeFilter={handleSetFilter} />
        <div className="grid gap-0 grid-cols-5 auto-cols-max">
          {data.data ? data.data.hits.map(image => (
            <Diplay url={image.largeImageURL} key={image.id} />
          )) : null}
        </div>
      </div>
      <Pagination changePage={handleSetPage} page={page}/>
      <div className="w-full p-2.5 bg-amber-500 text-black text-2xl">
        <a href="#top" className="flex flex-row items-center justify-center">
          <img src={home} className="w-10"/>
          <p>Back to the top of page.</p>
        </a>
      </div>
    </div>
  );
}

export default App;