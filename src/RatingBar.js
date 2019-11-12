import React from "react";
import styled from "styled-components";

const OuterBar = styled.div`
  width: 200px;
  height: 10px;
  border-radius: 10px;
  background-color: #ddd;
  margin-right: 15px;
`;

const InnerBar = styled.div`
  height: 10px;
  border-radius: 10px 0 0 10px;
`;

function RatingBar(props) {
  const setColor = rating => {
    if (rating >= 6.6) {
      return "MediumSeaGreen";
    } else if (rating >= 3.3) {
      return "Gold";
    } else {
      return "red";
    }
  };

  const color = setColor(props.rating);

  return (
    <OuterBar>
      <InnerBar
        style={{
          width: `${props.rating * 20}px`,
          backgroundColor: `${color}`
        }}
      ></InnerBar>
    </OuterBar>
  );
}

export default RatingBar;
