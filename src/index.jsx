import { createRoot } from 'react-dom/client';
import { MainView } from './components/MainView/MainView';

import "./index.scss";

const MyFlixApplication = () => {
  return <MainView />
};

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<MyFlixApplication />);