import React, { Component } from 'react';
import logo from './logo.svg';
import Pokedex from './components/Pokedex.js';
import './App.css';
import { connect } from 'react-redux'

@connect((store) => {
  return {
    revealed: store.revealed
  }
})
class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokedex />
      </div>
    );
  }
}

export default App;
