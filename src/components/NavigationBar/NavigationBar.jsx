import { Navbar, Container, Nav, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavigationBar = ({ user, onLoggedOut, onSearch}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    onSearch(query)
  }, [query]);

  return (
    <Navbar expand='lg'>
      <Container fluid>
        <Navbar.Brand as={Link} to='/' onClick={() => setQuery('')}>
          <h1 className='header'>female filmmakers</h1>
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
                <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}