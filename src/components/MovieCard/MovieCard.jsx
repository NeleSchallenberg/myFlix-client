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