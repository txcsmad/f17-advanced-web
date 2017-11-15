import * as PokeUtils from '../utils'
let Pokedex = require('pokeapi-js-wrapper')
const P = new Pokedex.Pokedex({protocol: 'https'})

// Action Constants
export const FETCH_POKEMON = "FETCH_POKEMON"
export const FETCH_POKEMON_SUCCESSFUL = "FETCH_POKEMON_SUCCESSFUL"
export const FETCH_POKEMON_ERROR = "FETCH_POKEMON_ERROR"
export const REVEAL_POKEMON = "REVEAL_POKEMON"
export const SELECT_ANSWER = "SELECT_ANSWER"
export const SET_CHOICES = "SET_CHOICES"






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
  return function(dispatch, getState){
    dispatch(requestPokemon())
    return P.getPokemonByName(pokemon)
    .then((response) => {
      console.log(response)
      dispatch({type: FETCH_POKEMON_SUCCESSFUL, payload: response})
    })
    .catch((error) => {
      dispatch({type: FETCH_POKEMON_ERROR, payload: error})
    })
  }
}

export function revealPokemon(bool) {
  return {
    type: REVEAL_POKEMON,
    payload: bool
  }
}

export function selectAnswer(answer) {
  return function(dispatch, getState){
    const state = getState()

    if(!state.pokemon.ready) {
      return null
    }

    if (answer === state.pokemon.pokemon ){
      // Correct
      console.log('correct')

      dispatch(revealPokemon(true))
      dispatch({type: SELECT_ANSWER})
      setTimeout(()=> {
        dispatch(revealPokemon(false))
        let choices = PokeUtils.chooseThreePokemon()
        let answer = Math.floor(Math.random() * 3)
        dispatch(setChoices(choices))
        dispatch(fetchPokemon(choices[answer]))
      }, 1000)
    }else {
      console.log('wrong!')
    }
  }
}
