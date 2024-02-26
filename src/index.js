import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Cards from './components/Cards';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='main'>
    <React.StrictMode>
      <Header /> 
      <Cards/> 
    </React.StrictMode>
  </div>
);