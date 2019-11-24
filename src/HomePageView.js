import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Results from "./Components/Results/Results";
import APIKEY from "./apikey.js";

const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  padding: 20px;
`;

export default function() {
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
      <Title>{popOrTop}</Title>

      <select
        value={popOrTop}
        name="popOrTop"
        onChange={handleChange}
        //multiple={true} Gets rid of a error in console:  The `value` prop supplied to <select> must be a scalar value if `multiple` is false. But messes with the dropdown box.
      >
        <option value="popular">Popular</option>
        <option value="top_rated">Top Rated</option>
      </select>

      {results.length === 0 ? null : <Results searchResults={results} />}
    </div>
  );
}
