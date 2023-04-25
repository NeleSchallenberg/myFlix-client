import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
      Username: username,
      Password: password
    };

    fetch('https://female-filmmakers.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((response) => response.json())
      .then((data) => {
        if (data.user) {
          localStorage.setItem('user', JSON.stringify(data.user));
          localStorage.setItem('token', data.token);
          onLoggedIn(data.user, data.token);
        } else {
          alert('No such user!')
        }
      })
      .catch((e) => {
        alert('Something went wrong!')
    });
  };

  // Create LoginView component
  return (
    <Form onSubmit={handleSubmit}>
      
      <h1 className='mb-3'>Login</h1>
      
      <Form.Group className='mb-3' controlId='formUsername'>
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          minLength='4'
        />
      </Form.Group>
      
      <Form.Group className='mb-3' controlId='formPassword'>
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength='8'
        />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Button
          variant='primary' 
          type='submit'
          className='mt-2'
          >Submit</Button>
      </Form.Group>

    </Form>
  );
}