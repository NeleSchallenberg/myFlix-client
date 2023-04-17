import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ProfileView = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h2 className='header'>Account Information</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className='header'>Favourites</h2>
        </Col>
      </Row>
    </Container>
  )
}