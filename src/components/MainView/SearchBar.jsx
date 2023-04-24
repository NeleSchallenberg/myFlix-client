import { Form } from 'react-bootstrap';

export const SearchBar = ({ handleSearch }) => {
  return (
    <Form>
      <Form.Group>
        <Form.Control
         className='mb-4'
          type='search'
          placeholder='Search by title'
          onChange={handleSearch}
        >
        </Form.Control>
      </Form.Group>
    </Form>
  )
}