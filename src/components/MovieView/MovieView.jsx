import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack'

// Exposing MovieView component
export const MovieView = ({movie, onBackClick}) => {
  // Creating MovieView component
  return (
    <Container>
      <Row className='mt-4 justify-content-center'>
        <Col md={8}>
          <img className="w-100" src={movie.image} />
          <br></br>
          <br></br>
          <h1>{movie.title}</h1>
          <Stack direction='horizontal' gap={3}>
            <div className='bg-light border px-1'>{movie.year}</div>
            <div className='bg-light border px-1'> {movie.length} </div>
            <div className='bg-light border px-1'> {movie.genre} </div>
          </Stack>
          <br></br>
          <p>{movie.description}</p>
          <div>
            <span>Directed by </span>
            <span style={{fontWeight: 'bold'}}>{movie.director}</span>
          </div>
          <br></br>
          <Button
            onClick={onBackClick}
            variant='primary'
            className='mt-2'
          >Back
          </Button>
        </Col>


      </Row>
    </Container>
  )
}