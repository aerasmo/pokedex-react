import React, { Component } from 'react'
import Pokedex from './Pokedex'
import pokemons from './pokemons'
import { randomChoice } from './helpers';
import './Battler.css'

function refreshPage() {
  window.location.reload();
}

class Battler extends Component {
  
  render() {
    let availablePokemons = pokemons;
    let hand1 = [];
    let hand2 = [];
    let randomPokemon1, randomPokemon2;
    let exp1 = 0;
    let exp2 = 0;
    let result; 

    for (let i = 0; i < 5; i++) {
      randomPokemon1 = randomChoice(availablePokemons)
      exp1 += randomPokemon1.base_exp
      

      randomPokemon2 = randomChoice(availablePokemons)
      exp2 += randomPokemon2.base_exp

      hand1.push(randomPokemon1)
      hand2.push(randomPokemon2)
    }

    if (exp1 > exp2) {
      result = "I have greater total base  experience so I should win!"
    } else if (exp1 < exp2) {
      result = "You have greater total base experience but you can still lose!"
    } else {
      result = "You will probably lose"
    }

    return (
      <div className="Battler">
        <Pokedex header="My Pokemons" pokemons={hand1}/>
        <Pokedex header="Your Pokemons" pokemons={hand2}/>

        <hr />
        <h2 className="BattlerResult"> {result} </h2>    
        <p> My total experience: {exp1}</p>
        <p> Your total experience: {exp2}</p>

        <button className="Battler-button" onClick={refreshPage}>Spin Again!</button>
      </div>
    );
  }
}

export default Battler