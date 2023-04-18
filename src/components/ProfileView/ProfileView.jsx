import { useState } from 'react';
import { Container, Row, Col, Button, Form, Card, } from 'react-bootstrap';
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

  //   fetch('https://female-filmmakers.herokuapp.com/users', {
  //     method: 'PUT',
  //     body: JSON.stringify(data),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }).then((response) => {
  //     if (response.ok) {
  //       alert('Update successful!');
  //       window.location.reload();
  //     } else {
  //       alert('Update failed.')
  //     }
  //   });
  };

  return (
    <Container fluid>
      <Row>
        <Col sm={4}>
          <Card>
            <Card.Body>
              <Card.Title>
                <h2 className='header mb-3'>Your Account</h2>
              </Card.Title>
                <p>Username: </p>
                <p>Email: </p>
                <p>Birthday: </p>
            </Card.Body>
          </Card>

          <h2 className='header mt-5'>Update Information</h2>
          <Form onSubmit={handleSubmit} className='mt-3'>

            <Form.Group className='mb-3' controlId='formUsername'>
              
              <Form.Control 
                type='text'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                minLength='4'
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formPassword'>
              
              <Form.Control 
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formEmail'>
              
              <Form.Control
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBirthday'>
              
              <Form.Control
                type='date'
                placeholder='Birthday'
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

          <div className='mt-5'>
            <Link to=''>
              <p>Permanentely delete profile</p>
            </Link>
          </div>
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