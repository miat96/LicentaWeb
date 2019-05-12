import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import { Router } from './Components/Router';

function App() {
  return (
    <div className="App">
      <div>
        <NotificationContainer />
        <BrowserRouter>
          <div className='App site'>
            <div className='site-content'>
              <Router />
            </div>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
