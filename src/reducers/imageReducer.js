import {REVEAL_POKEMON} from './actions'

export function imageReducer (state = false, action) {
  switch (action.type) {
    case REVEAL_POKEMON:
        return !state
    default:
        return state
  }
}
