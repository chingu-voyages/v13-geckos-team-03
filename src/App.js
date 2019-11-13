import React from "react";
import "./App.css";
import SearchBar from "./SearchBar";

function App() {
  useEffect(() => {    
    // get config on mount
    (async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${APIKEY}`);
        const data = await res.json();
        console.log(data)
        const { secure_base_url, poster_sizes, backdrop_sizes } = data.images;
        updateConfig({
          secure_base_url,
          backdrop_sizes,
          poster_sizes
        })
      } catch (err) {
        console.error(err);
      }
    })();
  return (
    <div>
      <h1>Hi, Allan and Gema.</h1>
      <SearchBar />
    </div>
  );
}

export default App;
