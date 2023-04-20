import { useState } from 'react';
import { Col, Button, Form, Card, Row, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MovieCard } from '../MovieCard/MovieCard';

export const ProfileView = ({ user, token, movies, onLoggedOut, updateUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  let favoriteMovies = movies.filter(movie => user.FavoriteMovies.includes(movie.id))

  const handleSubmit = event => {
    event.preventDefault();

    const data = {
        Username: username,
        Password: password,
        Email: email,
        Birthday: birthday,
    }

    fetch(`https://female-filmmakers.herokuapp.com/users/${user.Username}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        alert('Failed to update information.')
        return false;
      }
    })
    .then(user => {
      if (user) {
        alert('Information was successfully updated!')
        updateUser(user);
      }
    })
    .catch(e => {
      alert(e);
    })
  }

  const deleteAccount = () => {
    fetch(`https://female-filmmakers.herokuapp.com/users/${user.Username}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      if (response.ok) {
        alert('Your profile was successfully deleted!')
        onLoggedOut()
      } else {
        alert('Profile can not be deleted.')
      }
    })
    .catch(e => {
      alert(e)
    })
  }

  return (
    <>
      <Row>
        <Col>
        <h2 className='header mt-4 mb-4'>Update Information</h2>
        <Form className='mt-3' onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='formUsername'>
            <Form.Control 
              type='text'
              value={username}
              placeholder='Username'
              onChange={e => setUsername(e.target.value)}
              minLength='4'
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formPassword'>
            <Form.Control 
              type='password'
              value={password}
              placeholder='Password'
              onChange={e => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formEmail'>
            <Form.Control
              type='email'
              value={email}
              placeholder='Email'
              onChange={e => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBirthday'>
            <Form.Control
              type='date'
              value={birthday}
              placeholder='Birthday'
              onChange={e => setBirthday(e.target.value)}
              required
            />
          </Form.Group>
            <Button 
              className='mt-1 mb-3'
              variant='secondary' 
              type='submit'
            >Update
            </Button>
        </Form>
        </Col>

        <Col sm={1} >
        </Col>

      <Col sm={5}>
      <h2 className='header mt-4'>Your Account</h2>
        <Card className='mt-4 mb-4'>
          <Card.Body>
              <p>Username: {user.Username}</p>
              <p>Email: {user.Email}</p>
              <p>Birthday: {user.Birthday.slice(0, 10)} </p>
          </Card.Body>
        </Card>
        <Link to='' className='mt-5' onClick={() => {
            if (confirm('Delete account permanentely?')) {
              deleteAccount();
            }
          }}>Permanentely delete profile</Link>
      </Col>
      </Row>
      <Row>
      <h2 className='header mt-5'>Favourite Movies</h2>
        {favoriteMovies.map(movie => (
          <Col key={movie.id} sm={6} md={4} lg={3} className='mb-4'>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    
    </>
  )
}