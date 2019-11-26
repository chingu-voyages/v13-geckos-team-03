import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import SVG from "react-inlinesvg";
import settings from "./cog.svg";

const NavBar = styled.nav`
  width: 100%;
  height: 80px;
  top: 0;
  left: 0;
  background: #3b3272;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Logo = styled(Link)`
  margin-left: 50px;
  color: #ffff;
  font-size: 1.8rem;
  font-weight: 300;
  letter-spacing: 3px;
  text-decoration: none;
  margin-right: auto;
`;

const Links = styled.ul`
  li {
    display: inline-block;
    list-style: none;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: rgb(255, 255, 255, 0.64);
  font-weight: 300;
  margin: 0 1.5rem;
  text-decoration: none;
  transition: all 0.2s linear;

  &:hover {
    color: #ccc;
  }

  &.attrs({activeclassname: 'active'})
  color: #ffff;

  &.active {
    color: #ffff;
    border-bottom: 1px solid rgb(255, 255, 255, 0.64);
  }
`;
const SettingsButton = styled.button`
  margin-right: 10rem;
  background-color: #3b3272;
  border: none;
  cursor: pointer;
`;
const SettingsSVG = styled(SVG)`
  width: 20px;
  height: 20px;
  fill: rgb(255, 255, 255, 0.64);
`;

export default function({ user, logUserOut }) {
  const history = useHistory();
  const handleLogout = () => {
    logUserOut();
    history.push("/");
  };
  return (
    <NavBar>
      <Logo to="/">
        The Film DB{" "}
        <span role="img" aria-label="popcorn emoji">
          🍿
        </span>
      </Logo>
      <Links>
        <li>
          <StyledNavLink exact to="/search" activeClassName="active">
            search
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink exact to="/myfilms" activeClassName="active">
            my films
          </StyledNavLink>
        </li>
        {!user.user && (
          <>
            <li>
              <StyledNavLink exact to="/signup" activeClassName="active">
                signup
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink exact to="/login" activeClassName="active">
                login
              </StyledNavLink>
            </li>
          </>
        )}
        {user.user && (
          <li>
            <StyledNavLink
              exact
              to="/logout"
              onClick={handleLogout}
              activeClassName="active"
            >
              logout
            </StyledNavLink>
          </li>
        )}
      </Links>
      <SettingsButton aria-label="settings button">
        <SettingsSVG src={settings} />
      </SettingsButton>
    </NavBar>
  );
}
