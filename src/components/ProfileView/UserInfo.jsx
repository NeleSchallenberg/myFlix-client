import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const UserInfo = ({ username, email, birthday}) => {
  return (
    <>
      <h2 className='header mt-5 mb-4'>Your Account</h2>
      <Card className='mb-5'>
        <Card.Body>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Birthday: {birthday.slice(0, 10)} </p>
        </Card.Body>
      </Card>
      <Link to='' onClick={() => {
          if (confirm('Delete account permanentely?')) {
            deleteAccount();
          }
        }}>Permanentely delete profile
      </Link>
    </>
  )
}