import React, { useEffect, useState } from "react";
import "../App.css";
import PokemonData from "./PokemonData";

const Pokemon = () => {
  const Api = "https://pokeapi.co/api/v2/pokemon?limit=200";
  const [pokemonShow, setPokemonShow] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const pokemonFetchData = async () => {
    try {
      const res = await fetch(Api);
      const data = await res.json();

      const detailPokemonData = data.results.map(async (curePokemon) => {
        const res = await fetch(curePokemon.url);
        const data = await res.json();
        return data;
      });

      const responseData = await Promise.all(detailPokemonData);
      setPokemonShow(responseData);
      console.log(responseData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    pokemonFetchData();
  }, []);

  const searchData = pokemonShow.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  
  if (loading) {
    return (
      <>
        {" "}
        <div>
          <h2> Loading...... </h2>
        </div>{" "}
      </>
    );
  }

  if (error) {
    return (
      <>
        <div>{`Error this ${error.message}`}</div>
      </>
    );
  }

  return (
    <>
      <section className="container">
        <header>
          <h1> Lets Catch Pokémon</h1>
        </header>

        <div className="pokemon-search">
          <input
            type="text"
            placeholder="search Pokemon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="cards">
          {searchData.map((curePokemon) => {
            return (
              <PokemonData key={curePokemon.id} pokemonCards={curePokemon} />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Pokemon;
