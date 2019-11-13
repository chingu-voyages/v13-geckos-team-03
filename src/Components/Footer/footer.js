import React, { Component } from "react";
import styled from "styled-components";

const FooterBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;  
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 85px;
  background: #F6F6F6;
  font-size: 0.7rem;
  color: #3B3272;
  & a:visited {
    color: #3B3272;
  }
  `

class Footer extends Component {
  render() {
    return (
      <FooterBar>
        <p>Coded by <a href="https://github.com/chingu-voyages/v13-geckos-team-03"> Geckos Team 3</a> | Voyage 13, Chingu | 2019</p>
      </FooterBar>)
  }
};

export default Footer;