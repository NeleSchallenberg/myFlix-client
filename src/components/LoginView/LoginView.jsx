import React from 'react';

// Espose LoginView component
export const LoginView = () => {
  
  // Add username and password verification 
  const handleSubmit = (event) => {
    // Prevent default behaviour of form
    event.preventDefault();

    const data = {
      access: username,
      secret: password
    };

    fetch('https://female-filmmakers.herokuapp.com/login.json', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  };

  // Create LoginView component
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type='text'/>
      </label>
      <label>
        Password:
        <input type='password'/>
      </label>
      <button type='submit'>Submit</button>
    </form>
  )
}