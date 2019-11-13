import React, { useState, useEffect } from "react";
import Results from "./Results";

function App() {
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=4c2694a90a597f3a2cf08d1ddcf2973e&query=Lion+King`
      );
      const data = await response.json();
      const item = data.results;
      setSearchResults(item);
    }
    fetchData();
  }, []);

  return (
    <div>{searchResults && <Results searchResults={searchResults} />}</div>
  );
}

export default App;
