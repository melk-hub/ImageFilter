import { useEffect, useState } from "react";
import axios from "axios";
import Diplay from "./components/displayImg.js"
import SearchBar from "./components/searchBar.js"
import './css/App.css';
import './css/index.css';

function App({page, search}) {
  const [Data, setData] = useState([]);
  useEffect(() => {
      const APIkey = process.env.REACT_APP_API_ACCESS_KEY;
      const getData = async () => {
          const data = await axios.get(
              `https://pixabay.com/api/?key=${APIkey}&per_page=48&page=${page}&q=${search}`
          );
      setData(data);
    };
    getData();
  }, []);
  console.log(Data.data ? Data.data:null);

  return ( <div>
        <div className="w-full h-full bg-slate-700">
          <p className="mb-5 p-2.5 bg-amber-500 text-black text-2xl">Image Filter</p>
          <SearchBar />
          <div className="grid gap-0 grid-cols-4 auto-cols-max">
          {Data.data ? Data.data.hits.map(image => (
            <Diplay url={image.largeImageURL} key={image.id} />
          )) : null}
          </div>
        </div>
        <div>
          <p className="p-2.5 bg-amber-500 text-black text-2xl">Bottom</p>
        </div>
      </div>
  );
}

export default App;