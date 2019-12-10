import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Results from "./Components/Results/Results";
import GoUpButton from "./Components/BackToTopButton/backtotopbutton.js";
import APIKEY from "./apikey.js";

const Dropdown = styled.select`
  display: block;
  margin: 30px auto;
  font-size: 34px;
  border: none;
  border-bottom: #3b3272 solid;
  color: #3b3272;
  outline: none;
  &:hover {
    cursor: pointer;
  }
  & > option {
    font-size: 26px;
  }
`;

export default function(props) {
  const [results, setResults] = useState([]);
  const [popOrTop, setPopOrTop] = useState(["popular"]);

  useEffect(() => {
    fetchData(popOrTop);
  }, [popOrTop]);

  const fetchData = async popOrTop => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${popOrTop}?api_key=${APIKEY}&language=en-US&page=1`
    );
    const data = await res.json();
    setResults(data.results);
  };

  const handleChange = event => {
    setPopOrTop(event.target.value);
  };

  return (
    <div>
      <Dropdown
        value={popOrTop}
        name="popOrTop"
        onChange={handleChange}
        //multiple={true} Gets rid of a error in console:  The `value` prop supplied to <select> must be a scalar value if `multiple` is false. But messes with the dropdown box.
      >
        <option value="popular">Popular</option>
        <option value="top_rated">Top Rated</option>
      </Dropdown>

      {results.length === 0 ? null : (
        <Results
          searchResults={results}
          user={props.user}
          updateUser={props.updateUser}
        />
      )}
      <GoUpButton></GoUpButton>
    </div>
  );
}
