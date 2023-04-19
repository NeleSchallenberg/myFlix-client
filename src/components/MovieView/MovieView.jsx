import PropTypes from 'prop-types';
import { Row, Col, Button, Stack } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieView = ({ movies, user, token, updateUser }) => {
  const { movieId } = useParams();
  const movie = movies.find(m => m.id === movieId);
  const similarMovies = movies.filter(movie => movie.genre === movie.genre ? true : false)

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
          <Link to={`/`}>
            <Button variant='primary' className='mb-5'>Back</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <h2 className='header'>Similar Movies</h2>
        {similarMovies.map(movie => (
          <Col key={movie.id} sm={6} md={4} lg={3} className='mb-4'>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </>
  )
}

// PROP CONSTRAINTS
MovieView.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    year: PropTypes.string,
    length: PropTypes.string,
    description: PropTypes.string.isRequired,
    genre: PropTypes.string,
    director: PropTypes.string,
    image: PropTypes.string
  }).isRequired)
};