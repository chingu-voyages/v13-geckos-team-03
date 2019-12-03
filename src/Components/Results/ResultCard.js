import React from "react";
import styled from "styled-components";

import RatingBar from "./RatingBar";

import { Heart, FileImage } from "styled-icons/fa-regular";
import { HeartFullOutline } from "styled-icons/typicons/HeartFullOutline";

const Card = styled.div`
  display: grid;
  grid-template-columns: 185px auto;
  grid-column-gap: 20px;
  padding: 15px 0;
  height: 278px;
  max-height: 278px;
`;

const Poster = styled.div`
  display: flex;
  background: LightGray;
  align-items: center;
  justify-content: center;
`;

const Info = styled.div`
  padding: 10px 10px 10px 0;
  overflow: hidden;
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
      <Poster>
        {props.poster.slice(-4) === "null" ? ( //display a image logo if there is no poster from the database
          <FileImage size="60" color="gray" />
        ) : (
            <img // display the corresponding poster for the movie
              src={`${props.poster}`}
              alt="Movie Poster"
              width="185"
              height="278"
              style={{ objectFit: "cover" }}
            />
          )}
      </Poster>
      <Info>
        <Top>
          <Title>{props.title}</Title>
          {props.hasUser ?
            (props.isFavourite ? (
              <FullHeart size="25" />
            ) : (
                <EmptyHeart size="24" />
              ))
            : null}
        </Top>

        <Year>
          {props.releaseDate === undefined
            ? "Unknown Release Year"
            : props.releaseDate.slice(0, 4)}
        </Year>

        <Rating>
          <RatingBar voteAverage={props.voteAverage} />
          <div>
            <BoldBig>{props.voteAverage}</BoldBig>/10
            <BoldBig>- {props.voteCount}</BoldBig>{" "}
            {props.voteCount === 1 ? "vote" : "votes"}
          </div>
        </Rating>

        <Summary>{props.overview}</Summary>
      </Info>
    </Card>
  );
}

export default ResultCard;
