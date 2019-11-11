import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 40px;
  padding: 20px 0;
  min-height: 450px;
`;

const Poster = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
`;

const Info = styled.div`
  padding-top: 10px;
`;

const Title = styled.div`
  font-size: 40px;
`;

const Rating = styled.div``;

function ResultCard(props) {
  return (
    <Card>
      <Poster
        style={{
          backgroundImage: `url(${props.poster})`
        }}
      ></Poster>
      <Info>
        <Title>{props.title}</Title>
        {props.year}
        <Rating>
          {props.rating}/10 {props.votes} votes
        </Rating>
        <div>{props.summary}</div>
      </Info>
    </Card>
  );
}

export default ResultCard;
