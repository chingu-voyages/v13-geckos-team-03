import styled from "styled-components";
import { css } from "styled-components";

export const Form = styled.form`
  max-width: 700px;
  label {
    position: absolute;
  }
`;

export const FormLabel = styled.label`
  ${({ hasFocus }) => {
    if (hasFocus) {
      return css`
        transform: translateY(-10px);
      `;
    }
  }}
`;
