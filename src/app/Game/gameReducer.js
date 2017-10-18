import { CLICK_BUTTON } from './gameActions';

function getWinner(board) {
  if (board[0] !== "" && board[0] === board[1] && board[1] === board[2]) {
    return board[0];
  }
  return null;
}

const INIT_STATE = {
  board: ["", "", "", "", "", "", "", "", ""],
  gameWinner: null,
  currentPlayer: 0
};

const gameReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CLICK_BUTTON:
      // TODO fill out with precheck, new board splice, return state
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default gameReducer;