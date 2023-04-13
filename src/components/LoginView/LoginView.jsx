import { useState } from 'react';

// Espose LoginView component
export const LoginView = ({ onLoggedIn }) => {

  // Import useState
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');  
  
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
    }).then((response) => {
      if (response.ok) {
        onLoggedIn(username)
      } else {
        alert('Login failed!')
      }
    });
  };
  
  // Create LoginView component
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input 
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          minlength='4'
        />
      </label>
      <label>
        Password:
        <input 
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minlength='8'
        />
      </label>
      <button type='submit'>Submit</button>
    </form>
  )
}