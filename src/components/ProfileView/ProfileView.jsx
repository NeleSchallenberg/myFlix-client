import { Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ProfileView = () => {
  return (
    <Col>
      <h1>Your Profile</h1>
      <Link to={`/`}>
            <Button
              variant='primary'
            >Back
            </Button>
          </Link>
    </Col>
  )
}