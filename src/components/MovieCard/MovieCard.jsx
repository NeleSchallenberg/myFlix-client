// Import prop-types library
import PropTypes from "prop-types";

// Exposing MovieCard component
export const MovieCard = ({movie, onMovieClick}) => {
  // Creating MovieCard component
  return (
    <div
      onClick={() => {
        onMovieClick(movie)
      }}>
        {movie.title}
    </div>
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
    imagePath: PropTypes.string
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};
