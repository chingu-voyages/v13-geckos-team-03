import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";

import { Bars } from "styled-icons/fa-solid/Bars";
import { Cross } from "styled-icons/icomoon/Cross";

import { requestLogout } from "../Network";


const NavBar = styled.nav`
  width: 100%;
  height: 80px;
  top: 0;
  z-index: 10;
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
  @media (max-width: 768px) {
    font-size: 1.3rem;
    span {
      display: none;
    }
  }
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
  margin: 0 2rem;
  text-decoration: none;
  transition: all 0.2s linear;

  &:hover {
    color: #ccc;
  }

  &.active {
    color: #ffff;
    border-bottom: 1px solid rgb(255, 255, 255, 0.64);
  }
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
  &:checked ~ .container {
    right: 0 !important;
  }
`;

const Bar = styled.label`
  color: white;
  margin-left: 10px;
  cursor: pointer;
  display: none;
  transition: 0.4s;
  order: 1;
  position: absolute;
  top: 40px;
  right: 40px;
  @media screen and (max-width:995px) {
    display: block;
  }
`;
const BurgerCheckbox = styled.label` 
  margin-left: 10px;
  cursor: pointer;
  display: none;
  transition: 0.4s;
  @media screen and (max-width:995px) {
    position: absolute;
    top: 40px;
    right: 40px;
    display: block;
  }
`;

const Menu = styled(Bars)`
  width: 20px;
  height: 20px;
  display: inherit;
  &:hover {
    color: #ccc;
  }
`;

const Close = styled(Cross)`
  width: 20px;
  height: 20px;
  display: inherit;

  &:hover {
    color: #ccc;
  }
`;

const Container = styled.nav`
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1rem;
  @media screen and (max-width:995px) {
    position: fixed;
    width: 50%;
    height: 100vh;
    background: #3b3272;
    right: -100%;
    top: 0;
    z-index: 100;
    transition: 0.3s;
  }
`;


export default function ({ user, logUserOut }) {
  const history = useHistory();

  const handleLogout = async () => {
    try {
      const res = await requestLogout();
      if (res.errors) {
        console.error(res.errors);
        return;
      }
      logUserOut();
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <NavBar>
      <Logo to="/">
        The Film DB{" "}
        <span role="img" aria-label="popcorn emoji">
          🍿
        </span>
      </Logo>
      <Checkbox id="check"></Checkbox>
      <Bar htmlFor="check"><Menu></Menu></Bar>
      <Container className="container">
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
        <BurgerCheckbox htmlFor="check"><Close></Close></BurgerCheckbox>
      </Container>
    </NavBar>
  );
}
