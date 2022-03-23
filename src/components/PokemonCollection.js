import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonList}) {
  // const pokemonElements = pokemonList.map(poke => <PokemonCard poke={poke} key={poke.id} />)

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonList.map(poke => <PokemonCard poke={poke} key={poke.id} />)}
    </Card.Group>
  );
}

export default PokemonCollection;
