import React, { useState } from "react";

import SearchBar from "./Components/SearchBar";
import Results from "./Components/Results/Results";
import GoUpButton from "./Components/BackToTopButton/backtotopbutton.js";


export default function() {
  const [results, updateResults] = useState([]);
  return (
    <div>
      <SearchBar updateResults={updateResults} />
      {results && <Results searchResults={results} />}
      <GoUpButton></GoUpButton>
    </div>
  );
}
