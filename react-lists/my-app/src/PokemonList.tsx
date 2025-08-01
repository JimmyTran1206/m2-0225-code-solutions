import type { Pokemon } from "./App"

type Props={
  pokedex:Pokemon[]
}

export function PokemonList ({pokedex}:Props){
  const pokemonList=pokedex.map(pokemon=>
  <li key={pokemon.number}>{pokemon.name}</li>);
  return <ul>{pokemonList}</ul>

}
