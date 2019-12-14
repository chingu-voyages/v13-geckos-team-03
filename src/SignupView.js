import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { signup } from "./Components/Network";
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
    const { email, password, confirmPassword } = formState;
    if (password !== confirmPassword) {
      updateFormState(state => {
        return {
          ...state,
          errors: ["passwords don't match"]
        };
      });
      return;
    }
    const data = await signup({
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

  const { email, password, confirmPassword, hasFocus, errors } = formState;
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
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
        <div>
          <FormLabel
            htmlFor="confirmPassword"
            hasFocus={hasFocus === "confirmPassword" ? true : false}
            hasInput={confirmPassword.length ? true : false}
          >
            confirm password
          </FormLabel>
          <Input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={handleInputChange}
            onBlur={handleBlur}
            onFocus={() => updateFocus("confirmPassword")}
            required
          ></Input>
        </div>
        <Errors>
          {errors.map((error, i) => (
            <figure key={`${error}_${i}`}>{error}</figure>
          ))}
        </Errors>
        <FormControls>
          <SubmitButton type="submit">Sign Up</SubmitButton>
          <FormLink to="/login">login here</FormLink>
        </FormControls>
      </Form>
    </Container>
  );
}
