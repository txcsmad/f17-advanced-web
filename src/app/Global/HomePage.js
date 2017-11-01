import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {

  render() {
    return (
      <div>
        <Link to="/game">Game</Link>
        <br/>
        <Link to="/text/helloWorld">Text Page</Link>
      </div>
    );
  }
}

export default HomePage;