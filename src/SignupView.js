import React, { useState } from "react";

export default function() {
  const [formState, updateFormState] = useState({
    email: "",
    password: "",
    confirmPassword: ""
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
  }

  const { email, password, confirmPassword } = formState;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <label>email
          <input name="email" type="email" value={email} onChange={handleInputChange}></input> 
        </label>
        <label>password
          <input name="password" type="password" value={password} onChange={handleInputChange}></input> 
        </label>
        <label>confirm password
          <input name="confirmPassword" type="password" value={confirmPassword} onChange={handleInputChange}></input> 
        </label>
        <button type="submit">signup</button>
      </form>
    </div>
  );
}
