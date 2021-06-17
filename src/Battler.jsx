import React, { Component } from 'react'
import Pokedex from './Pokedex'
import pokemons from './pokemons'
import { randomChoice, remove } from './helpers';

class Battler extends Component {
  render() {
    let availablePokemons = pokemons;
    let hand1 = []
    let hand2 = []
    let randomPokemon1, randomPokemon2;

    for (let i = 0; i < 5; i++) {
      randomPokemon1 = randomChoice(availablePokemons)
      availablePokemons = remove(availablePokemons, randomPokemon1)
      randomPokemon2 = randomChoice(availablePokemons)
      availablePokemons = remove(availablePokemons, randomPokemon2)

      hand1.push(randomPokemon1)
      hand2.push(randomPokemon2)

    }
    return (
      <div className="Battler">
        <Pokedex header="My Pokemons" pokemons={hand1}/>
        <Pokedex header="Your Pokemons" pokemons={hand2}/>
      </div>
    );
  }
}

export default Battler