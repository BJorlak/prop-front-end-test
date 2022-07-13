import React from "react";
import Pokemon from "./Pokemon";
import "./ShowPokemon.css";

export default function ShowPokemon({ pokemon }) {
  return (
    <div className="pokemon-layout">
      {pokemon.map((val, index) => (
        <Pokemon key={index} thisPokemon={val} />
      ))}
    </div>
  );
}
