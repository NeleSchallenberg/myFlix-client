import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack'

import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((m) => m.id === movieId);

  return (
    <Row className='mt-4 justify-content-center'>
      <div>
        <img className="w-100" src={movie.image} />
        <br></br>
        <br></br>
        <h1>{movie.title}</h1>
        <Stack direction='horizontal' gap={3}>
          <div className='bg-white border px-1'>{movie.year}</div>
          <div className='bg-white border px-1'> {movie.length} </div>
          <div className='bg-white border px-1'> {movie.genre} </div>
        </Stack>
        <br></br>
        <p>{movie.description}</p>
        <div>
          <span>Directed by </span>
          <span style={{fontWeight: 'bold'}}>{movie.director}</span>
        </div>
        <br></br>
        <Link to={`/`}>
          <Button
            variant='primary'
          >Back
          </Button>
        </Link>
      </div>
    </Row>
  )
}