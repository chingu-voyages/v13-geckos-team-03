import React from "react";
import styled from "styled-components";

import RatingBar from "./RatingBar";

import { Heart } from "styled-icons/fa-regular/Heart";
import { HeartFullOutline } from "styled-icons/typicons/HeartFullOutline";

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
  font-weight: bold;
  margin: 0 0 5px 10px;
`;

const Rating = styled.div`
  // display: inline-grid;
  // grid-template-columns: 200px auto auto;
  // grid-column-gap: 15px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
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

        <Year>{props.year}</Year>

        <Rating>
          <RatingBar rating={props.rating} />
          <div>
            <BoldBig>{props.rating}</BoldBig>/10
          </div>{" "}
          <div>
            <BoldBig>- {props.votes}</BoldBig> votes
          </div>
        </Rating>

        <Summary>{props.summary}</Summary>
      </Info>
    </Card>
  );
}

export default ResultCard;
