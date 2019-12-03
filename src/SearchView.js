import React, { useState } from "react";

import SearchBar from "./Components/SearchBar";
import Results from "./Components/Results/Results";

export default function(props) {
  const [results, updateResults] = useState([]);
  return (
    <div>
      <SearchBar updateResults={updateResults} />
      {results && <Results searchResults={results}  hasUser={props.hasUser} />}
    </div>
  );
}
