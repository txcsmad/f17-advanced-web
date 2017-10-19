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
      if (state.gameWinner !== null || state.board[action.y * 3 + action.x] !== "") {
        return state;
      }

      let newBoard = state.board.splice(0);
      newBoard[action.y * 3 + action.x] = state.currentPlayer === 0 ? "X" : "O";

      return {
        ...state,
        board: newBoard,
        gameWinner: getWinner(newBoard),
        currentPlayer: state.currentPlayer === 0 ? 1 : 0
      };
    default:
      return state;
  }
};

export default gameReducer;