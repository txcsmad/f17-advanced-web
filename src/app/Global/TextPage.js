import React, { Component } from 'react';

class TextPage extends Component {

  static defaultProps = {
    match: {
      params: {
        text: "Tic Tac Toe"
      }
    }
  };

  render() {
    return (
      <h1>{this.props.match.params.text}</h1>
    );
  }
}

export default TextPage;