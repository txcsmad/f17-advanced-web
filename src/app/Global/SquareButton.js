import React, { Component } from 'react';

class SquareButton extends Component {

  static defaultProps = {
    value: "",
    x: 0,
    y: 0,
    handleOnClick: null,
  };

  render() {
    return (
      <div className="button-square" onClick={() => this.props.handleOnClick(this.props.x, this.props.y)}>
        {this.props.value}
      </div>
    );
  }
}

export default SquareButton;