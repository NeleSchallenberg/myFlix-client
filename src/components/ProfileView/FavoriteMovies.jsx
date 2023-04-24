import Col from 'react-bootstrap/Col';
import MovieCard from '../MovieCard/MovieCard';

export const FavoriteMovies = ({ favoriteMovieList }) => {
  return (
    <>
      <h2 className='header mt-5'>Favourite Movies</h2>
      {favoriteMovieList.map((movie) => {
        return (
        <Col key={movie.id} sm={6} md={4} lg={3} className='mb-4'>
          <MovieCard movie={movie} />
        </Col>
        )
      })}
    </>
  )
}