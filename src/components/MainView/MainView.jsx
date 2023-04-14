import { useEffect, useState } from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import { MovieView } from '../MovieView/MovieView';
import { LoginView } from '../LoginView/LoginView';

// Expose MainView component
export const MainView = () => {

  // Use localStorage as default value
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const storedToken = localStorage.getItem('token');

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // Add state variables to components
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Load data from API
  useEffect(() => {
    if (!token) return;

    fetch('https://female-filmmakers.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}`}
    })
      .then((response) => response.json())
      .then((movies) => {
        const moviesFromApi = movies.map((movie) => {
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

  // Display LoginView when no user is logged in and update on login
  if (!user) {
    return (
      <LoginView 
        onLoggedIn={(user, token) => {
          setUser(user)
          setToken(token)
        }}
      />
    )
  }
  
  // Render MovieView component when a movie card is clicked
  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() =>
          setSelectedMovie(null)
        }
      />
    )
  };

  // Return a text message if array is empty
  if (movies.length === 0) {
    return <div>No movies available!</div>
  } else {
    // Return clickable MovieCard component for each movie
    return (
      <div>
        {movies.map((movie) => (
          <MovieCard 
            key={movie.id}
            movie={movie}
            onMovieClick={(newSelectedMovie) => {
              setSelectedMovie(newSelectedMovie)
            }}
          />
        ))}
        <button 
          onClick={() => {
            setUser(null); 
            setToken(null);
            localStorage.clear()
          }}
          >Logout
        </button>
      </div>
    )
  };
}