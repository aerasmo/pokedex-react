import React, { Component } from 'react'
import Pokemon from './Pokemon'
import './Pokedex.css'


const defaultData = [
  {id: 1, name: 'Bulbasaur', type: 'grass', base_exp: 64},
  {id: 4, name: 'Charmander', type: 'fire', base_exp: 62},
  {id: 7, name: 'Squirtle', type: 'water', base_exp: 63},
  {id: 10, name: 'Caterpie', type: 'bug', base_exp: 39},
  {id: 16, name: 'Pidgey', type: 'flying', base_exp: 50},
  {id: 19, name: 'Ratata', type: 'normal', base_exp: 51},
  {id: 23, name: 'Ekans', type: 'poison', base_exp: 58},
  {id: 25, name: 'Pikachu', type: 'electric', base_exp: 112},
  {id: 27, name: 'Sandshrew', type: 'ground', base_exp: 60},
  {id: 74, name: 'Geodude', type: 'rock', base_exp: 60},

]


class Pokedex extends Component {
  static defaultProps = { 
    data: defaultData
  }
  render() {
    let data = this.props.data;

    return (
      <div className="Pokedex">
        <h1 className="Pokedex-header"> Pokedex </h1>
        <div>
          <ul className="Pokedex-Pokemons">
            {data.map(pokemon => 
              <Pokemon id={pokemon.id} name={pokemon.name} 
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