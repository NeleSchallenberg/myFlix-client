import Col from 'react-bootstrap/Col';
import MovieCard from '../MovieCard/MovieCard';

export const FavoriteMovies = ({ favoriteMovieList }) => {
  console.log(favoriteMovieList)
  return (
    <>
      <h2 className='header mt-5'>Favourite Movies</h2>
      {favoriteMovieList.length ? favoriteMovieList.map((movie) => {
        return (
          <Col key={movie.id} sm={6} md={4} lg={3} className='mb-4'>
            <MovieCard movie={movie} />
          </Col>
        )
      }) : <h5 className='mt-3 mb-5'>No favorite movies</h5>}
    </>
  )
}