import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class TextPage extends Component {

  static defaultProps = {
    match: {
      params: {
        text: "Tic Tac Toe"
      }
    }
  };

  // TODO
  // Parameters are in this.props.match.params

  render() {
    return (
      <h1></h1>
    );
  }
}

class NotFoundPage extends Component {
  render() {
    return (
      <h1>Not Found :(</h1>
    );
  }
}

class SquareButton extends Component {

  static defaultProps = {
    value: "",
    x: 0,
    y: 0,
    handleOnClick: null,
  };

  render() {
    // TODO
    return (
      <div className="button-square">
      </div>
    );
  }
}

class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: ["", "", "", "", "", "", "", "", ""],
      gameWinner: null,
      currentPlayer: 0
    }
  }

  getWinner(board) {
    //TODO return player that won
  }


  onChangeState(x, y) {
    // TODO
  }

  render() {
    return (
      <div>
        <div className="board">
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <TextPage text={"Hello"}/>
            {
              //TODO Links go here
              // / = Home
              // /header/(some_text) = Some Text
              // /game = Game
              // /notfound = Not Found
            }
          </div>
          {
            //TODO Switch goes here
          }
        </div>
      </div>
    );
  }
}

export default App;
