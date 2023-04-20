import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export const SignupView = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    
    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    }

    fetch('https://female-filmmakers.herokuapp.com/users', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        alert('Signup successful!');
        window.location.replace('/login');
      } else {
        alert('Signup failed.')
      }
    })
  };

  return (
    <Form onSubmit={handleSubmit} className='mt-5'>
      <h1 className='mb-3 header'>Sign Up</h1>
      <Form.Group className='mb-3' controlId='formUsername'>
        <Form.Label>Username:</Form.Label>
        <Form.Control 
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
          minLength='4'
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formPassword'>
        <Form.Label>Password:</Form.Label>
        <Form.Control 
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formEmail'>
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBirthday'>
        <Form.Label>Birthday:</Form.Label>
        <Form.Control
          type='date'
          value={birthday}
          onChange={e => setBirthday(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Button 
          className='mt-2'
          variant='primary' 
          type='submit'
        >Submit</Button>
      </Form.Group>
    </Form>
  )
}