import React from 'react';
import logo from './assets/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import ButtonGroup from "./components/ButtonGroup";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img height="400vh" src={logo} className="App-logo" alt="logo" />
        <p><h1>兔給得資訊公司</h1></p>
          <div className="px-5 py-4">
            <ButtonGroup />
          </div>
      </header>
    </div>
  );
}

export default App;
