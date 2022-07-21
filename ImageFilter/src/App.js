import { useEffect, useState } from "react";
import axios from "axios";
import Diplay from "./components/displayImg.js"
import SearchBar from "./components/searchBar.js"
import Pagination from "./components/pagination.js"
import home from "./images/home.png"
import './css/App.css';
import './css/index.css';

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
      const APIkey = process.env.REACT_APP_API_ACCESS_KEY;
      const getData = async () => {
          const data = await axios.get(
              `https://pixabay.com/api/?key=${APIkey}&per_page=48&page=${page}&q=${searchFilter}`
          );
      setData(data);
      };
      getData();
  }, [page, searchFilter]);

  const handleSetFilter = (filter) => {
    setSearchFilter(filter);
  }

  const handleSetPage = (pages) => {
    setPage(pages);
  }

  return (<div>
      <div className="w-full h-full bg-slate-700">
        <p className="mb-5 p-2.5 bg-amber-500 text-black text-2xl">Image Filter</p>
        <SearchBar changeFilter={handleSetFilter} />
        <div className="grid gap-0 grid-cols-4 auto-cols-max">
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