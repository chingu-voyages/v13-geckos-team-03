import React, { useState } from "react";

import { signup } from "./Components/Network";
import { Form, FormLabel } from "./StyledComponents/Forms";

export default function() {
  const [formState, updateFormState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    hasFocus: "",
    errors: []
  });

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

  const handleSubmit = event => {
    event.preventDefault();
    const { email, password } = formState;
    signup({
      email,
      password
    });
  };

  const { email, password, confirmPassword, hasFocus } = formState;
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h3>sign up</h3>
        <div>
          <FormLabel
            htmlFor="email"
            hasFocus={hasFocus === "email" ? true : false}
          >
            email
          </FormLabel>
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            onFocus={() => updateFocus("email")}
            required
          ></input>
        </div>
        <div>
          <FormLabel
            htmlFor="password"
            hasFocus={hasFocus === "password" ? true : false}
          >
            password
          </FormLabel>
          <input
            id="password"
            type="password"
            value={password}
            onChange={handleInputChange}
            onBlur={handleBlur}
            onFocus={() => updateFocus("password")}
            required
          ></input>
        </div>
        <div>
          <FormLabel
            htmlFor="confirmPassword"
            hasFocus={hasFocus === "confirmPassword" ? true : false}
          >
            confirm password
          </FormLabel>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={handleInputChange}
            onBlur={handleBlur}
            onFocus={() => updateFocus("confirmPassword")}
            required
          ></input>
        </div>
        <button type="submit">signup</button>
      </Form>
    </div>
  );
}
