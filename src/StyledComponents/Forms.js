import styled from "styled-components";
import { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const Form = styled.form`
  display: inline-block;
  width: auto;
  padding: 30px;
  background-color: #eee;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  h3 {
    margin: 0 0 60px 0;
  }
  label {
    position: absolute;
  }
  > div {
    position: relative;
    margin-top: 40px;
    &:last-of-type {
      margin-bottom: 40px;
    }
  }
`;

export const FormLabel = styled.label`
  transition: transform 0.1s ease, opacity 0.1s ease;
  position: absolute;
  top: 0;
  left: 0;
  ${({ hasFocus, hasInput }) => {
    if (hasFocus || hasInput) {
      return css`
        transform: translate(10px, -26px) scale(0.8);
        opacity: 0.8;
      `;
    } else {
      return css`
        transform: translate(17px, 11px);
      `;
    }
  }}
`;

export const Input = styled.input`
  width: 250px;
  padding: 12px 15px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
`;

export const SubmitButton = styled.button`
  border: none;
  background-color: #3b3272;
  color: white;
  padding: 10px 15px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  &:hover {
    cursor: pointer;
  }
`;

export const Errors = styled.section`
  min-height: 60px;
  figure {
    margin: 10px 0;
    color: red;
    font-size: 0.9rem;
  }
`;

export const FormControls = styled.section`
  display: flex;
  align-items: flex-end;
`;

export const FormLink = styled(NavLink)`
  color: #404040;
  margin-left: 20px;
`;
