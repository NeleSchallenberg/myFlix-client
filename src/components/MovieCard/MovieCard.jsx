// Import prop-types library
import PropTypes from "prop-types";
// Import react-bootstrap components
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// Exposing MovieCard component
export const MovieCard = ({movie, onMovieClick}) => {
  // Creating MovieCard component
  return (
    <Card
      className='h-100'
      onClick={() => {
        onMovieClick(movie)
      }}
    >
      <Card.Img variant='top' src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Subtitle>{movie.director}</Card.Subtitle>
        <Card.Text>{movie.genre}</Card.Text>
      </Card.Body>
    </Card>
  )
}

// Define prop constraints for MovieCard
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    year: PropTypes.string,
    length: PropTypes.string,
    description: PropTypes.string.isRequired,
    genre: PropTypes.string,
    director: PropTypes.string,
    image: PropTypes.string
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};
