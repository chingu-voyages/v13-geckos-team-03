import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import SVG from 'react-inlinesvg';
import settings from "./cog.svg";

const NavBar = styled.nav`
  width: 100%;
  height: 80px;
  top: 0;
  left: 0;
  background: #3B3272;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  `
const Logo = styled(Link)`
  margin-left: 50px;
  color: #FFFF;
  font-size: 1.8rem;
  font-weight: 300;
  letter-spacing: 3px;
  text-decoration: none;
  margin-right: auto;
  `

const Links = styled.ul`
  li {
  display: inline-block;
  list-style:none;
  }
  `

const StyledNavLink = styled(NavLink)`
  color: rgb(255, 255, 255, 0.64);
  font-weight: 300;
  margin: 0 1.5rem;
  text-decoration: none;
  transition: all 0.2s linear;

  &:hover {
    color: #ccc;
  }

  &.attrs({activeClassName: 'active'})
  color: #ffff;

  &.active {
    color: #FFFF;
    border-bottom: 1px solid rgb(255, 255, 255, 0.64)
  }
  `
const SettingsButton = styled.button`
  margin-right: 10rem;
  background-color: #3B3272;
  border: none;
  cursor: pointer;
  `
const SettingsSVG = styled(SVG)`
  width: 20px;  
  height: 20px;
  fill: rgb(255, 255, 255, 0.64); 
  `

class Header extends Component {
  render() {
    return (
      <NavBar>
        <Logo to="/">The Film DB <span role="img" aria-label="popcorn emoji">🍿</span></Logo>
        <Links>
          <li><StyledNavLink exact to="/search" activeClassName="active">search</StyledNavLink></li>
          <li><StyledNavLink exact to="/myfilms" activeClassName="active">my films</StyledNavLink></li>
        </Links>
        <SettingsButton aria-label="settings button"><SettingsSVG src={settings} /></SettingsButton>
      </NavBar>
    )
  }
};

export default Header;

