import { useEffect, useState } from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import { MovieView } from '../MovieView/MovieView';
import { LoginView } from '../LoginView/LoginView';
import { SignupView } from '../SignupView/SignupView';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Expose MainView component
export const MainView = () => {

   // Add state variables to components
   const [movies, setMovies] = useState([]);
   const [selectedMovie, setSelectedMovie] = useState(null);
   const [user, setUser] = useState(null);
   const [token, setToken] = useState(null);

  // Use localStorage as default value
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const storedToken = localStorage.getItem('token');

  // Load data from API if user is authorized
  useEffect(() => {
    if (!token) return;
    fetch('https://female-filmmakers.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}`}
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        const moviesFromApi = data.map((movie) => {
          return {
            id: movie._id,
            title: movie.Title,
            year: movie.Year,
            length: movie.Length,
            description: movie.Description,
            genre: movie.Genre.Name,
            director: movie.Director.Name,
            image: movie.ImagePath
          };
        });
        setMovies(moviesFromApi);
      });
  }, [token]);

  // Wrap if statements in react-bootstrap row
  return (
    <Row className='justify-content-md-center' style={{border: '1px solid green'}}>
      {
        !user ? (
          <Col md={5} style={{border: '1px solid red'}}>
            <LoginView 
              onLoggedIn={(user, token) => {
                setUser(user)
                setToken(token)
              }} />
            or
            <SignupView />
          </Col>
        ) : selectedMovie ? (
            <Col md={8} style={{border: '1px solid red'}}>
              <MovieView
                movie={selectedMovie}
                onBackClick={() => setSelectedMovie(null)}
              />
            </Col>
        ) : movies.length === 0 ? (
          <div>No movies available!</div>
        ) : (
          <>
            {movies.map((movie) => (
              <Col md={8} style={{border: '1px solid red'}}>
                <MovieCard 
                  key={movie.id}
                  movie={movie}
                  onMovieClick={(newSelectedMovie) => {
                    setSelectedMovie(newSelectedMovie)
                  }}
                />
              </Col>
            ))}
          </>
        )
      }
    </Row>
  )
};