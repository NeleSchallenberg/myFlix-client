import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';

export const UpdateUser = ({ handleSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  return (
    <>
      <h2 className='header mt-5 mb-4'>Update Information</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-4' controlId='formUsername'>
          <Form.Control 
            type='text'
            value={username}
            placeholder='Username'
            onChange={e => setUsername(e.target.value)}
            minLength='4'
            required
          />
        </Form.Group>
        <Form.Group className='mb-4' controlId='formPassword'>
          <Form.Control 
            type='password'
            value={password}
            placeholder='Password'
            onChange={e => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className='mb-4' controlId='formEmail'>
          <Form.Control
            type='email'
            value={email}
            placeholder='Email'
            onChange={e => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className='mb-4' controlId='formBirthday'>
          <Form.Control
            type='date'
            value={birthday}
            placeholder='Birthday'
            onChange={e => setBirthday(e.target.value)}
            required
          />
        </Form.Group>
        <Button 
          className='mb-4'
          variant='secondary' 
          type='submit'
        >Update
        </Button>
      </Form>
    </>
  )
}