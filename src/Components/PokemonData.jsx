import React from "react";

const PokemonData = ({ pokemonCards }) => {
  return (
    <div className="pokemon-card">
      <figure>
        <img
          src={pokemonCards.sprites.other.dream_world.front_default}
          alt={pokemonCards.name}
          className="pokemon-image"
        />
      </figure>

      <h1 className="pokemon-name">{pokemonCards.name}</h1>
      <div className="pokemon-info pokemon-highlight">
        <p>
          {pokemonCards.types.map((curType) => curType.type.name).join(", ")}
        </p>
      </div>

      <div className="grid-three-cols">
        <p className="pokemon-info">
          <span> Height:</span> {pokemonCards.height}
        </p>
        <p className="pokemon-info">
          <span> Weight:</span> {pokemonCards.weight}
        </p>
        <p className="pokemon-info">
          <span> speed:</span> {pokemonCards.stats[5].base_stat}
        </p>
      </div>
      <div className="grid-three-cols">
        <div className="pokemon-info">
          <p>{pokemonCards.base_experience}</p>
          <span> Experience:</span>
        </div>
        <div className="pokemon-info">
          <p>{pokemonCards.stats[1].base_stat}</p>
          <span>Attack:</span>
        </div>
        <div className="pokemon-info">
          <p>
            {pokemonCards.abilities
              .map((abilityInfo) => abilityInfo.ability.name)
              .slice(0, 1)
              .join(", ")
              }
          </p>
          <span> Abilities: </span>
        </div>
      </div>
    </div>
  );
};

export default PokemonData;
