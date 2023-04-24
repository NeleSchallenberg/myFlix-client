import { Col, Row, } from 'react-bootstrap';
import { FavoriteMovies } from './FavoriteMovies';
import { UserInfo } from './UserInfo';
import { UpdateUser } from './UpdateUser';

export const ProfileView = ({ user, token, movies, onLoggedOut, updateUser }) => {
 
  let favoriteMovieList = movies.filter(movie => user.FavoriteMovies.includes(movie._id))
  console.log(favoriteMovieList);

  const handleSubmit = event => {
    event.preventDefault();

    const data = {
        Username: username,
        Password: password,
        Email: email,
        Birthday: birthday,
    }

    fetch(`https://female-filmmakers.herokuapp.com/users/${user.Username}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        alert('Failed to update information.')
        return false;
      }
    })
    .then(user => {
      if (user) {
        alert('Information was successfully updated!')
        updateUser(user);
      }
    })
    .catch(e => {
      alert(e);
    })
  }

  const deleteAccount = () => {
    fetch(`https://female-filmmakers.herokuapp.com/users/${user.Username}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      if (response.ok) {
        alert('Your profile was successfully deleted!')
        onLoggedOut()
      } else {
        alert('Profile can not be deleted.')
      }
    })
    .catch(e => {
      alert(e)
    })
  }

  return (
    <>
      <Row>
        <Col  md={5}>
          <UpdateUser 
            handleSubmit={handleSubmit}
            username={user.username}
            password={user.password}
            email={user.Email}
            birthday={user.Birthday}
          />
        </Col>

      <Col  md={{span:5, offset:2}}>
        <UserInfo 
          username={user.Username}
          email={user.Email}
          birthday={user.Birthday}
        />
      </Col>
      </Row>
      <Row>
        <FavoriteMovies favoriteMovieList={favoriteMovieList}/>
      </Row>
    </>
  )
}