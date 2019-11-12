import React from "react";
import styled from "styled-components";

import RatingBar from "./RatingBar";

import { Heart } from "styled-icons/fa-regular/Heart";
import { HeartFullOutline } from "styled-icons/typicons/HeartFullOutline";

const Card = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  grid-column-gap: 20px;
  padding: 20px 0;
  min-height: 300px;
`;

const Poster = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  width: 200px;
`;

const Info = styled.div`
  padding-top: 10px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 34px;
`;

const EmptyHeart = styled(Heart)`
  cursor: pointer;
`;

const FullHeart = styled(HeartFullOutline)`
  color: red;
  cursor: pointer;
`;

const Year = styled.div`
  margin: 0 0 10px 10px;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const BoldBig = styled.a`
  font-weight: bold;
  font-size: 16px;
  margin-left: 6px;
`;

const Summary = styled.div``;

function ResultCard(props) {
  return (
    <Card>
      <Poster
        style={{
          backgroundImage: `url(${props.poster})`
        }}
      ></Poster>
      <Info>
        <Top>
          <Title>{props.title}</Title>
          {props.isFavourite ? (
            <FullHeart size="25" />
          ) : (
            <EmptyHeart size="24" />
          )}
        </Top>

        <Year>{props.releaseDate}</Year>

        <Rating>
          <RatingBar voteAverage={props.voteAverage} />
          <div>
            <BoldBig>{props.voteAverage}</BoldBig>/10
            <BoldBig>- {props.voteCount}</BoldBig> votes
          </div>
        </Rating>

        <Summary>{props.overview}</Summary>
      </Info>
    </Card>
  );
}

export default ResultCard;
