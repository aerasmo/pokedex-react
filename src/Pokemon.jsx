import React, { Component } from 'react'
import './Pokemon.css'

function fetchImage ( id ) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}

class Pokemon extends Component {
  static defaultProps = {
    id: 1,
    name: 'Bulbasaur',    
    type: 'grass',
    base_exp: 64,
  }

  render() {
    let { id, name ,type, base_exp} = this.props;
    return (
      <li className="Pokemon"> 
        <h1 className="Pokemon-name"> {name}</h1>
        <img className="Pokemon-img" src={ fetchImage(id)} alt={name}/>
        <p className="Pokemon-type"> type: {type} </p>
        <p className="Pokemon-base_exp"> base experience: {base_exp} </p>
      </li>
    ) 
  }
}


export default Pokemon