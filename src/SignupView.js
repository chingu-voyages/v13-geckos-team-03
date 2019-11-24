import React, { useState } from "react";

import { signup } from './Components/Network';

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
      <form onSubmit={handleSubmit}>
        <h3>sign up</h3>
        <label>email
          <input name="email" type="email" value={email} onChange={handleInputChange} required></input> 
        </label>
        <label>password
          <input name="password" type="password" value={password} onChange={handleInputChange} required></input> 
        </label>
        <label>confirm password
          <input name="confirmPassword" type="password" value={confirmPassword} onChange={handleInputChange} required></input> 
        </label>
        <button type="submit">signup</button>
      </form>
    </div>
  );
}
