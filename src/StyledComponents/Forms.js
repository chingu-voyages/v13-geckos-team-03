import styled from "styled-components";
import { css } from "styled-components";

export const Form = styled.form`
  display: inline-block;
  width: auto;
  padding: 30px;
  background-color: #eee;
  h3 {
    margin: 0 0 30px 0;
  }
  label {
    position: absolute;
  }
`;

export const FormLabel = styled.label`
  transition: transform 0.1s ease, opacity 0.1s ease;
  ${({ hasFocus, hasInput }) => {
    if (hasFocus || hasInput) {
      return css`
        transform: translate(10px, -14px) scale(0.8);
        opacity: 0.8;
      `;
    } else {
      return css`
        transform: translate(17px, 21px);
      `;
    }
  }}
`;

export const Input = styled.input`
  width: 250px;
  padding: 10px 15px;
  margin-top: 10px;
  font-size: 1rem;
`;

export const SubmitButton = styled.button`
  border: none;
  background-color: #3b3272;
  color: white;
  padding: 10px 15px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
  }
`;
