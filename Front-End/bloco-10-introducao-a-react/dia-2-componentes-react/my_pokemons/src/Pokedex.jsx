import React from 'react';
import Pokemon from './Pokemon'
import pokemons from './data';

class Pokedex extends React.Component {
  render(){
    return (
        <ul>
         {pokemons.map((pokemon) => <Pokemon key={pokemon.id} data={pokemon}/>)}
        </ul>
    )
  }
}

export default Pokedex;