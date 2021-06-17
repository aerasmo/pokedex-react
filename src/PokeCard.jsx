import React, { Component } from 'react'
import './PokeCard.css'
import { fetchImage } from './helpers'

class PokeCard extends Component {
  static defaultProps = {
    id: 1,
    name: 'Bulbasaur',    
    type: 'grass',
    base_exp: 64,
  }

  render() {
    let { id, name ,type, base_exp} = this.props;
    return (
      <li className="PokeCard"> 
        <h1 className="PokeCard-name"> {name}</h1>
        <img className="PokeCard-img" src={ fetchImage(id)} alt={name}/>
        <p className="PokeCard-type"> type: {type} </p>
        <p className="PokeCard-base_exp"> base experience: {base_exp} </p>
      </li>
    ) 
  }
}


export default PokeCard