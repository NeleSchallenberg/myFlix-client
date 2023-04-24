import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const MovieCard = ({ movie }) => {
  return (
    <Card className='h-100'>
      <Card.Img variant='top' src={movie.image} />
      <Card.Body>
        <Card.Title>
          <h4>{movie.title}</h4>
        </Card.Title>
        <Card.Subtitle>
          {movie.director}
        </Card.Subtitle>
        <Card.Text>{movie.genre}</Card.Text>
        <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
          <Button variant='primary'>Open</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

// PROP CONSTRAINTS
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
};