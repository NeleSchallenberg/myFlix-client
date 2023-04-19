import { useEffect, useState } from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import { MovieView } from '../MovieView/MovieView';
import { LoginView } from '../LoginView/LoginView';
import { SignupView } from '../SignupView/SignupView';
import { ProfileView } from '../ProfileView/ProfileView';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const storedUser = localStorage.getItem('user');
  const storedToken = localStorage.getItem('token');

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

  return (
    <BrowserRouter>
      <NavigationBar
        user={user}
        onLoggedOut={() => {
          setUser(null);
          setToken(null);
          localStorage.clear();
        }}
      />
      <Container fluid>
        <Row className='justify-content-center mt-5 mx-4'>
          <Routes>
            <Route
              path='/signup'
              element={
                <>
                  {user ? (
                    <Navigate to='/' />
                  ) : (
                    <Col md={4}>
                      <SignupView />
                    </Col>
                  )}
                </>
              }
            />
            <Route
              path='/login'
              element={
                <>
                  {user ? (
                    <Navigate to='/' />
                  ) : (
                    <Col md={4}>
                      <LoginView 
                        onLoggedIn={(user, token) => {
                          setUser(user)
                          setToken(token)
                        }} 
                      />
                    </Col>
                  )}
                </>
              }
            />
            <Route
              path='/movies/:movieId'
              element={
                <>
                  {!user ? (
                    <Navigate to='/login' replace />
                  ) : movies.length === 0 ? (
                    <Col>No movies available!</Col>
                  ) : (
                    <MovieView 
                      movies={movies}
                      user={user}
                      token={token}
                    />
                  )}
                </>
              }
            />
            <Route
              path='/'
              element= {
                <>
                  {!user ? (
                    <Navigate to='/login' replace />
                  ) : movies.length === 0 ? (
                    <Col>No movies available!</Col>
                  ) : (
                    <>
                      {movies.map((movie) => (
                        <Col 
                          key={movie.id}
                          sm={6} 
                          md={4}
                          lg={3}
                          className='mb-4'
                        >
                          <MovieCard movie={movie}/>
                        </Col>
                      ))}
                    </>
                  )}
                </>
              }
            />
            <Route
              path='/profile'
              element={
                <>
                  {!user ? (
                    <Navigate to='/login' replace />
                  ) : (
                    <ProfileView />
                  )}
                </>
              }
            />
          </Routes>
        </Row>
      </Container>
    </BrowserRouter>
  )
};