import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; //eslint-disable-line
import App from './App'; //eslint-disable-line
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
