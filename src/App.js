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
      <h1>{this.props.match.params.text}</h1>
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
      <div className="button-square" onClick={() => this.props.handleOnClick(this.props.x, this.props.y)}>
        {this.props.value}
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
    if (board[0] !== "" && board[0] === board[1] && board[1] === board[2]) {
      return board[0];
    }
    return null;
  }


  onChangeState(x, y) {
    // TODO
    if (this.state.gameWinner !== null || this.state.board[y * 3 + x] !== "") {
      return;
    }

    let newBoard = this.state.board.splice(0);
    newBoard[y * 3 + x] = this.state.currentPlayer === 0 ? "X" : "O";

    this.setState({
      board: newBoard,
      currentPlayer: this.state.currentPlayer === 0 ? 1 : 0,
      gameWinner: this.getWinner(newBoard)
    });
  }

  render() {
    let array = [0, 1, 2, 3, 4, 5, 6, 7, 8];


    return (
      <div>
        {this.state.gameWinner !== null ? <h1>Winner: {this.state.gameWinner}</h1> : <p/>}
        <div className="board">
          {array.map((value) => (<SquareButton x={value % 3} y={value / 3} value={this.state.board[value]}
                                               handleOnClick={(x, y) => this.onChangeState(x, y)}/>))}
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
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
                <Route exact path="/" component={TextPage}/>
                <Route path="/text/:text" component={TextPage}/>
                <Route path="/game" component={GamePage}/>
                <Route component={NotFoundPage}/>
              </div>
              {
                //TODO Switch goes here
              }
            </div>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
