import React, { useState, useEffect } from 'react';
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const pokemonAPI = "http://localhost:3001/pokemon";

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState("");

  function handleSearch(searchTarget) {
    setSearch(searchTarget);
  }

  function addPokemon(pokemon) {
    setPokemonList([...pokemonList, pokemon])
    console.log("Pokemon added!", pokemon)
  }

  useEffect(() => {
    fetch(pokemonAPI)
      .then(res => res.json())
      .then(data => setPokemonList(data))
  }, []);

  const pokemonsToDisplay = pokemonList.filter((poke) =>
    poke.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon} />
      <br />
      <Search search={search} handleSearch={handleSearch} />
      <br />
      <PokemonCollection pokemonList={pokemonsToDisplay} />
    </Container>
  );
}

export default PokemonPage;
