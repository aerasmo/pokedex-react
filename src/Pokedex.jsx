import React, { Component } from 'react'
import PokeCard from './PokeCard'
import pokemons from './pokemons'
import './Pokedex.css'




class Pokedex extends Component {
  static defaultProps = { 
    header: "Pokedex",
    pokemons: pokemons,
  }
  render() {
    let { header, pokemons } = this.props
    return (
      <div className="Pokedex">
        <h1 className="Pokedex-header"> {header} </h1>
        <div>
          <ul className="Pokedex-Pokemons">
            {pokemons.map(pokemon => 
              <PokeCard id={pokemon.id} name={pokemon.name} 
                       type={pokemon.type} base_exp={pokemon.base_exp} 
              />
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Pokedex