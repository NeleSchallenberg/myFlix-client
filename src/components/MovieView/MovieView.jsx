import PropTypes from 'prop-types';
import { Row, Col, Button, Stack } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { MovieCard } from '../MovieCard/MovieCard';
import { useState, useEffect } from 'react';

export const MovieView = ({ movies, user, token, updateUser }) => {
  const { movieId } = useParams();
  const movie = movies.find(movie => movie.id === movieId);
  const similarMovies = movies.filter(movie => movie.genre === movie.genre ? true : false);
  const [favorite, setFavorite] = useState(user.FavoriteMovies.includes(movie.id));

  useEffect(() => {
    setFavorite(user.FavoriteMovies.includes(movie.id));
  }, [movieId])

  const addFavorite = () => {
    fetch(`https://female-filmmakers.herokuapp.com/users/${user.Username}/movies/${movieId}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      if (response.ok) {
        console.log('responding')
        return response.json();
      } else {
        alert('Movie could not be added.')
        return false
      }
    })
    .then (user => {
      if (user) {
        console.log('was added')
        alert('Movie was added to Favorites!');
        setFavorite(true);
        updateUser(user);

      }
    })
    .catch(e => {
      alert(e);
    });
  }

  const removeFavorite = () => {
    fetch(`https://female-filmmakers.herokuapp.com/users/${user.Username}/movies/${movieId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      if (response.ok) {
        console.log('responding')
        return response.json();
      } else {
        alert('Movie could not be deleted.');
        return false;
      }
    })
    .then(user => {
      if (user) {
        alert('Movie was deleted from Favorites!');
        setFavorite(false);
        updateUser(user);
      }
    })
    .catch(e => {
      alert(e);
    });
  }

  return (
    <>
      <Row>
        <Col>
          <img className="w-100 mb-4" src={movie.image} />
          <h1 className='header mb-3'>{movie.title}</h1>
          <Stack direction='horizontal' gap={3} className='mb-3'>
            <div className='bg-white border px-1'>{movie.year}</div>
            <div className='bg-white border px-1'> {movie.length} </div>
            <div className='bg-white border px-1'> {movie.genre} </div>
          </Stack>
          <p>{movie.description}</p>
          <div className='mb-4'>
            <span>Directed by </span>
            <span style={{fontWeight: 'bold'}}>{movie.director}</span>
          </div>
          <Stack direction='horizontal' gap={3}>
            <Link to={`/`}>
              <Button variant='primary' className='mb-5'>Back</Button>
            </Link>
              {favorite ?
                <Button className='mb-5 ml-3' variant='primary' onClick={removeFavorite}>Remove from Favorites</Button>
                : <Button className='mb-5 ml-3' variant='primary' onClick={addFavorite}>Add to Favorites</Button>
              }
          </Stack>
        </Col>
      </Row>
      <Row>
        <h2 className='header'>Similar Movies</h2>
        <h5 className='mt-3 mb-5'>Under construction...</h5>
        {/* {similarMovies.map(movie => (
          <Col key={movie.id} sm={6} md={4} lg={3} className='mb-4'>
            <MovieCard movie={movie} />
          </Col>
        ))} */}
      </Row>
    </>
  )
}

// PROP CONSTRAINTS
MovieView.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    year: PropTypes.string,
    length: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired)
};