import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import { Router } from './Components/Router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import Header from "./Components/Header"


library.add(faStroopwafel)

function App() {
  return (
    <div className="App">
      <div>
        <NotificationContainer />
        <BrowserRouter>
          <div className='App site'>
            <div className='site-content'>
              <Header />
              <div className='main'>
                <Router />
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
