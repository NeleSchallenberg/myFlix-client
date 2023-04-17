import { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ProfileView = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    }

    fetch('https://female-filmmakers.herokuapp.com/users', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      if (response.ok) {
        alert('Update successful!');
        window.location.reload();
      } else {
        alert('Update failed.')
      }
    });
  };

  return (
    <Container fluid>
      <Row>
        <Col sm={4}>
          <h2 className='header'>Account Information</h2>
          <Form onSubmit={handleSubmit} className='mt-3'>

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
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formEmail'>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBirthday'>
              <Form.Label>Birthday:</Form.Label>
              <Form.Control
                type='date'
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Button 
                className='mt-1'
                variant='secondary' 
                type='submit'
              >Update</Button>
            </Form.Group>

          </Form>
        </Col>

        <Col sm={1}>
        </Col>

        <Col sm={6}>
          <h2 className='mt-2 header'>Favourites</h2>
        </Col>

      </Row>
    </Container>
  )
}