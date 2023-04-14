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

    fetch('https://female-filmmakers.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((response) => response.json())
      .then((data) => {
        console.log('Login response: ', data);
        if (data.user) {
          onLoggedIn(data.user, data.token)
        } else {
          alert('No such user!')
        }
      })
      .catch((e) => {
        alert('Something went wrong!')
      });
  
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