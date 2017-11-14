const names = require('./pokemon_names.json')

export function generateRandomPokemon() {
  return Math.floor(Math.random() * 803);
}

export function chooseThreePokemon() {
  let pokemon = []
  while (pokemon.length < 3) {
    const pkmn_ind = generateRandomPokemon()
    if (pokemon.indexOf(pkmn_ind) == -1) {
      pokemon.push(pkmn_ind)
    }
  }
  return pokemon
}

export function ind2name(ind) {
  return names[ind]
}
