import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserDetailsProvider } from './context/UserDetailsContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <UserDetailsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserDetailsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);