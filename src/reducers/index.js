import {combineReducers} from 'redux'
import {imageReducer} from './imageReducer'
import {pokemon} from './pokemonReducer'

export default combineReducers({
  revealed: imageReducer,
  pokemon: pokemon
})
