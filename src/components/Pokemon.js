import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Pokemon.css";

export default function Pokemon({ thisPokemon }) {
  const [onePokemon, setOnePokemon] = useState({
    name: "",
    sprites: {
      front_default: "",
    },
  });

  const getPokemon = (url) => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res);
        setOnePokemon(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPokemon(thisPokemon.url);
  });

  return (
    <div className="individual-pokemon">
      <p>
        {onePokemon.name.charAt(0).toUpperCase() +
          onePokemon.name.slice(1)}
      </p>
      <img
        src={onePokemon.sprites.front_default}
        alt={onePokemon.name}
      />
    </div>
  );
}
