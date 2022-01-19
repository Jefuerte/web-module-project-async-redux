import './App.css';
import Suggestion from './components/Suggestion.js'
import Favorites from './components/Favorites'
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Are you bored yet?</h1>
      <div className="boxes">
        <Suggestion/>
        <Favorites/>
      </div>
    </div>
  );
}

export default App;