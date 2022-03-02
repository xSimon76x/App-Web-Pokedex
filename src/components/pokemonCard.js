import "../assets/css/pokemonCard.css";
import { PokeApi } from "../api/pokeApi";
import InformationCard from "./informationCard";
import { useState } from "react";

export default function PokemonCard() {
  const routeAPI = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200/";
  const data = PokeApi(routeAPI);

  return (
    <div className="container-fluid">
      {data ? (
        <InformationCard objPokemon={data} />
      ) : (
        <>
          <div>
            <p>Cargando</p>
          </div>
        </>
      )}
    </div>
  );
}
