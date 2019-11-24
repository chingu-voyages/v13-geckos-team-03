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
  const [] = useState(["popular"]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`
    );
    const data = await res.json();
    setResults(data.results);
  };
  return (
    <div>
      <Title>Popular films</Title>
      {results.length === 0 ? null : <Results searchResults={results} />}
    </div>
  );
}
