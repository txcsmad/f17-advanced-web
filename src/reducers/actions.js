// Action Constants
export const FETCH_POKEMON = "FETCH_POKEMON"
export const FETCH_POKEMON_SUCCESSFUL = "FETCH_POKEMON_SUCCESSFUL"
export const FETCH_POKEMON_ERROR = "FETCH_POKEMON_ERROR"
export const REVEAL_POKEMON = "REVEAL_POKEMON"
export const SELECT_ANSWER = "SELECT_ANSWER"
export const SET_CHOICES = "SET_CHOICES"

let Pokedex = require('pokeapi-js-wrapper')
const P = new Pokedex.Pokedex({protocol: 'https'})


function requestPokemon() {
  return {
    type: FETCH_POKEMON
  }
}

export function setChoices(choices) {
  return {
    type: SET_CHOICES,
    choices
  }
}

export function fetchPokemon(pokemon) {
  return function(dispatch){
    dispatch(requestPokemon())
    return P.getPokemonByName(pokemon)
    .then((response) => {
      dispatch({type: FETCH_POKEMON_SUCCESSFUL, payload: response})
    })
    .catch((error) => {
      dispatch({type: FETCH_POKEMON_ERROR, payload: error})
    })
  }
}

export function revealPokemon() {
  return {
    type: REVEAL_POKEMON
  }
}

export function selectAnswer() {
  return {
    type: SELECT_ANSWER
  }
}
