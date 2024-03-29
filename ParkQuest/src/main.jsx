import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import ParksDataProvider from './context/DataContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ParksDataProvider>
      <App />
    </ParksDataProvider>
  </BrowserRouter>
);
