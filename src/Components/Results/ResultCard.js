import React from "react";
import styled from "styled-components";

import RatingBar from "./RatingBar";
import { createHeart, deleteHeart } from "../Network";
import { Heart, FileImage } from "styled-icons/fa-regular";
import { HeartFullOutline } from "styled-icons/typicons/HeartFullOutline";

const Card = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
  padding: 0 15px;
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 650px) {
    grid-template-columns: 185px auto;
    grid-column-gap: 20px;
  }
  @media (min-width: 850px) {
    grid-template-columns: 250px auto;
  }
`;

const Poster = styled.div`
  display: flex;
  background: LightGray;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
  }
`;

const Info = styled.div`
  padding: 10px 10px 10px 0;
  overflow: hidden;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  @media (min-width: 650px) {
    margin-top: 0;
  }
`;

const Title = styled.h2`
  font-size: 34px;
`;
const HeartButton = styled.button`
  padding: 0;
  margin-left: 20px;
  background: none;
  border: none;
  outline: none;
`;

const EmptyHeart = styled(Heart)`
  cursor: pointer;
`;

const FullHeart = styled(HeartFullOutline)`
  color: red;
  cursor: pointer;
`;

const Year = styled.div`
  margin-left: 10px;
`;

const Rating = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  margin-bottom: 20px;
  @media (min-width: 500px) {
    grid-column-gap: 15px;
    grid-template-columns: 200px auto;
  }
`;

const Votes = styled.div`
  margin-top: 10px;
`;

const BoldBig = styled.a`
  font-weight: bold;
  font-size: 16px;
  margin-left: 6px;
`;

const Summary = styled.div``;

function ResultCard(props) {
  const { updateUser } = props;

  const handleHeartClick = async () => {
    if (props.isFavourite) {
      const res = await deleteHeart(props._id);
      if (res.errors) {
        console.log(res.errors);
      } else {
        updateUser(state => {
          delete state.films[res.doc.filmId];
          return {
            ...state
          };
        });
      }
    } else {
      const res = await createHeart(props.id);
      if (res.errors) {
        console.log(res.errors);
      } else {
        updateUser(state => {
          state.films[res.filmId] = res;
          return {
            ...state
          };
        });
      }
    }
  };

  return (
    <Card>
      <Poster>
        {props.poster.slice(-4) === "null" ? ( //display a image logo if there is no poster from the database
          <FileImage size="60" color="gray" />
        ) : (
          <img // display the corresponding poster for the movie
            src={`${props.poster}`}
            alt="Movie Poster"
          />
        )}
      </Poster>
      <Info>
        <Top>
          <Title>{props.title}</Title>
          {props.user ? (
            props.isFavourite ? (
              <HeartButton onClick={handleHeartClick}>
                <FullHeart size="25" />
              </HeartButton>
            ) : (
              <HeartButton onClick={handleHeartClick}>
                <EmptyHeart size="24" />
              </HeartButton>
            )
          ) : null}
        </Top>

        <Year>
          {props.releaseDate === undefined
            ? "Unknown Release Year"
            : props.releaseDate.slice(0, 4)}
        </Year>

        <Rating>
          <RatingBar voteAverage={props.voteAverage} />
          <Votes>
            <BoldBig>{props.voteAverage}</BoldBig>/10
            <BoldBig>- {props.voteCount}</BoldBig>{" "}
            {props.voteCount === 1 ? "vote" : "votes"}
          </Votes>
        </Rating>

        <Summary>{props.overview}</Summary>
      </Info>
    </Card>
  );
}

export default ResultCard;
