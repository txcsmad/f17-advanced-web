import {FETCH_POKEMON,
  FETCH_POKEMON_SUCCESSFUL,
  FETCH_POKEMON_ERROR,
  SELECT_ANSWER,
  SET_CHOICES } from './actions'

const initialState = {
  isFetching: false,
  fetched: false,
  choice: "",
  pokemon: 1,
  image: "",
  ready: false,
  choices: [1, 4, 7]
}

export function pokemon(state = initialState, action) {
  switch(action.type) {
    case SET_CHOICES:
      return Object.assign({}, state, {choices: action.choices})
    case SELECT_ANSWER:
      return Object.assign({}, state, {ready: false})
    case FETCH_POKEMON:
      return Object.assign({}, state, {
        isFetching: true,
        fetched: false
      })
    case FETCH_POKEMON_SUCCESSFUL:
      console.log("Success")
      console.log(action.payload)
      return Object.assign({}, state, {
        isFetching: false,
        fetched: true,
        ready: true,
        pokemon: action.payload.id,
        image: action.payload.sprites.front_default
      })
    case FETCH_POKEMON_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        fetched: false,
        ready: true,
        pokemon: 1,
        image: ""
      })
    default:
      return state
  }
}
