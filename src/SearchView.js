import React, { useState } from "react";

import SearchBar from "./Components/SearchBar";
import Results from "./Components/Results/Results";
import GoUpButton from "./Components/BackToTopButton/backtotopbutton.js";

export default function(props) {
  const [results, updateResults] = useState([]);
  const { user, updateUser } = props;
  return (
    <div>
      <SearchBar updateResults={updateResults} />
      {results && (
        <Results searchResults={results} user={user} updateUser={updateUser} />
      )}
      <GoUpButton></GoUpButton>
    </div>
  );
}
