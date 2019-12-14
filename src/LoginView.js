import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { login } from "./Components/Network";
import {
  Form,
  FormLabel,
  Input,
  SubmitButton,
  Errors,
  FormControls,
  FormLink
} from "./StyledComponents/Forms";

const Container = styled.div`
  padding: 30px 15px;
  display: flex;
  justify-content: center;
`;

export default function({ logUserIn }) {
  const [formState, updateFormState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    hasFocus: "",
    errors: []
  });

  const history = useHistory();

  const updateFocus = value => {
    updateFormState(state => {
      return {
        ...state,
        hasFocus: value
      };
    });
  };

  const handleBlur = () => {
    updateFormState(state => {
      return {
        ...state,
        hasFocus: ""
      };
    });
  };

  const handleInputChange = event => {
    const { value, id } = event.target;
    updateFormState(data => {
      return {
        ...data,
        [id]: value
      };
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = formState;
    const data = await login({
      email,
      password
    });
    if (data.errors) {
      updateFormState(state => {
        return {
          ...state,
          errors: [...data.errors]
        };
      });
    } else {
      logUserIn({
        email: data.email,
        _id: data._id
      });
      history.push("/myfilms");
    }
  };

  const { email, password, hasFocus, errors } = formState;
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div>
          <FormLabel
            htmlFor="email"
            hasFocus={hasFocus === "email" ? true : false}
            hasInput={email.length ? true : false}
          >
            email
          </FormLabel>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            onFocus={() => updateFocus("email")}
            required
          ></Input>
        </div>
        <div>
          <FormLabel
            htmlFor="password"
            hasFocus={hasFocus === "password" ? true : false}
            hasInput={password.length ? true : false}
          >
            password
          </FormLabel>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={handleInputChange}
            onBlur={handleBlur}
            onFocus={() => updateFocus("password")}
            required
          ></Input>
        </div>
        <Errors>
          {errors.map(error => (
            <figure>{error}</figure>
          ))}
        </Errors>
        <FormControls>
          <SubmitButton type="submit">Login</SubmitButton>
          <FormLink to="/signup">signup here</FormLink>
        </FormControls>
      </Form>
    </Container>
  );
}
