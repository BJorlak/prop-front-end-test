import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowPokemon from "./components/ShowPokemon";
import Pages from "./components/Pages";
import logo from "./assets/logo.png";
import "./App.css";

export default function App() {
  const [pokemon, setPokemon] = useState([
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
  ]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );

  const [nextPageUrl, setNextPageUrl] = useState();
  const [previousPageUrl, setPreviousPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  const getPokemon = () => {
    axios
      .get(currentPageUrl)
      .then((res) => {
        // console.log(res);
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPreviousPageUrl(res.data.previous);
        setPokemon(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPokemon();
  }, [currentPageUrl]);

  const goToNextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  };

  const goToPreviousPage = () => {
    setCurrentPageUrl(previousPageUrl);
  };

  if (loading) return "Loading Pokedex...";
  return (
    <>
      <img src={logo} />
      <h1>Pokedex</h1>
      <div className="App">
        <ShowPokemon pokemon={pokemon} />
      </div>
      <Pages
        goToNextPage={nextPageUrl ? goToNextPage : null}
        goToPreviousPage={previousPageUrl ? goToPreviousPage : null}
      />
    </>
  );
}
