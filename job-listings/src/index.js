import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CardProvider } from './context/cardContext';

ReactDOM.render(
  <CardProvider>
    <App />
  </CardProvider>,
  document.getElementById('root')
);
