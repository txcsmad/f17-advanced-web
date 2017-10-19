import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { clickButton } from './gameActions';
import SquareButton from '../Global/SquareButton';

export class GamePage extends Component {
  static propTypes = {
    board: PropTypes.array.isRequired,
    gameWinner: PropTypes.string,
    clickButton: PropTypes.func.isRequired
  };

  render() {
    let array = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    return (
      <div>
        {this.props.gameWinner !== null ? <h1>Winner: {this.props.gameWinner}</h1> : <p/>}
        <div className="board">
          {array.map((value) => (
            <SquareButton key={value} x={value % 3} y={parseInt(value / 3, 10)}
                          value={this.props.board[value]}
                          handleOnClick={(x, y) => this.props.clickButton(x, y)}/>))}
        </div>
      </div>
    );
  }
}

class ConnectedGamePage extends Component {
  render() {
    return (
      <GamePage board={this.props.board} gameWinner={this.props.gameWinner} clickButton={this.props.clickButton} />
    );
  }
}

const mapStateToProps = state => {
  return {
    board: state.gameState.board,
    gameWinner: state.gameState.gameWinner
  }
};

const mapDispatchToProps = dispatch => {
  return {
    clickButton: bindActionCreators(clickButton, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedGamePage);
