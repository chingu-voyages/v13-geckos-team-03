import React from "react";
import styled from "styled-components";

import ResultCard from "./ResultCard";

const Container = styled.div`
  margin: 0 auto;
  min-height: 900px;
  max-width: 940px;
`;

function Results(props) {
  return (
    <Container>
      {props.searchResults.map(result => (
        <ResultCard
          key={result.id}
          poster={`https://image.tmdb.org/t/p/w185${result.poster_path}`}
          title={result.title}
          isFavourite={false}
          releaseDate={result.release_date}
          voteAverage={result.vote_average}
          voteCount={result.vote_count}
          overview={result.overview}
        />
      ))}
    </Container>
  );
}

export default Results;
