import { createRoot } from 'react-dom/client';
import { MainView } from './components/MainView/MainView';
import Container from 'react-bootstrap/Container';
import background from './img/placeholder.png';

import "./index.scss";

const MyFlixApplication = () => {
  return (
    <Container style={{ backgroundImage: `url(${background})` }}>
      <MainView />
    </Container>
  )
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<MyFlixApplication />);