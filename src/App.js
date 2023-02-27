import React from 'react';
import logo from './bb8.png';
import './App.css';
import { Home } from './components/Home';
import { StarWars } from './components/StarWars';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Home />
        <StarWars />
      </header>
    </div>
  );
}

export default App;
