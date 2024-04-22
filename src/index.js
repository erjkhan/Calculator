import './index.css';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Calculator from "./components/calculator.js"; 



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <Calculator />
  </StrictMode>
);
reportWebVitals();
