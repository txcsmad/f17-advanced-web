import { combineReducers } from 'redux';

import gameReducer from './Game/gameReducer';

export default combineReducers({
  gameState: gameReducer,
})
