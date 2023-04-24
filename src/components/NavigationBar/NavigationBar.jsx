import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavigationBar = ({ user, onLoggedOut }) => {

  return (
    <Navbar expand='lg'>
      <Navbar.Brand as={Link} to='/' onClick={() => setQuery('')}>
        <h1 className='header'>FemaleFilmmakers</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav'/>
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto'>
        {!user && (
            <>
              <Nav.Link as={Link} to='/login'>
                Login
              </Nav.Link>
              <Nav.Link as={Link} to='/signup'>
                Signup
              </Nav.Link>
            </>
          )}
          {user && (
            <>
              <Nav.Link as={Link} to='/' onClick={() => setQuery('')}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to='/profile' onClick={() => setQuery('')}>
                Profile
              </Nav.Link>
              <Nav.Link style={{fontWeight: 'bold'}} onClick={onLoggedOut}>Logout</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}