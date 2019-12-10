import React from "react";
import styled from "styled-components";

import ResultCard from "./ResultCard";

const Container = styled.div`
  margin: 0 auto;
  max-width: 940px;
`;

function Results(props) {
  const { films } = props.user;
  return (
    <Container>
      {props.searchResults.map(result => (
        <ResultCard
          key={result.id}
          id={result.id}
          poster={`https://image.tmdb.org/t/p/w185${result.poster_path}`}
          title={result.title}
          isFavourite={films ? films[result.id] ? true : false : false}
          _id={films ? films[result.id] ? films[result.id]._id ? films[result.id]._id : false : false : false}
          releaseDate={result.release_date}
          voteAverage={result.vote_average}
          voteCount={result.vote_count}
          overview={result.overview}
          user={props.user}

        />
      ))}
    </Container>
  );
}

export default Results;
