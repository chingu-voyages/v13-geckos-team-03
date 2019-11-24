import React, { useState } from "react";

import { signup } from './Components/Network';
import { Form } from './StyledComponents/Forms';

export default function() {
  const [formState, updateFormState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    errors: []
  });

  const handleInputChange = event => {
    const { value, name } = event.target;
    updateFormState(data => {
      return {
        ...data,
        [name]: value
      }
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    const { email, password } = formState;
    signup({
      email,
      password
    })
  }

  const { email, password, confirmPassword } = formState;
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h3>sign up</h3>
        <div>
          <label for="email">email</label>
          <input name="email" type="email" value={email} onChange={handleInputChange} required></input> 
        </div>
        <div>
          <label for="password">password</label>
          <input name="password" type="password" value={password} onChange={handleInputChange} required></input>
        </div>
        <div>
          <label for="confirmPassword">confirm password</label>
          <input name="confirmPassword" type="password" value={confirmPassword} onChange={handleInputChange} required></input>           
        </div>
        <button type="submit">signup</button>
      </Form>
    </div>
  );
}
