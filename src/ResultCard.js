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

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 40px;
`;

const Heart = styled.div`
  font-size: 20px;
  cursor: pointer;
`;

const Year = styled.div`
  font-weight: bold;
  margin: 0 0 5px 10px;
`;

const Rating = styled.div`
  margin-bottom: 20px;
`;

const BoldBig = styled.a`
  font-weight: bold;
  font-size: 16px;
`;

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
          <Heart
            className={props.isFavourite ? "fa fa-heart" : "fa fa-heart-o"}
            style={props.isFavourite ? { color: "red" } : { color: "black" }}
          ></Heart>
        </Top>

        <Year>{props.year}</Year>
        <Rating>
          <BoldBig>{props.rating}</BoldBig>/10 <BoldBig>{props.votes}</BoldBig>{" "}
          votes
        </Rating>
        <div>{props.summary}</div>
      </Info>
    </Card>
  );
}

export default ResultCard;
