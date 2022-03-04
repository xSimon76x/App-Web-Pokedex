
import "../assets/css/pokemonCard.css";
import { useState } from "react";
import { PokeApi } from "../api/pokeApi.js";

import FilterPokemonCard from "./filterPokemonCard.js";

export default function InformationCard(props) {

  const { objPokemon, routeAPI, counterMaxPokemons } = props;
  const allPokemons = PokeApi(routeAPI + "?limit=" + 600)
  const [currentPokemon, setCurrentPokemon] = useState({ state: false, data: null })

  const searchName = (objPokemon) => {
    let searchBox = document.getElementById("ip-Search").value;
    let filterPokemon = new Array();

    if (searchBox !== "") {
      objPokemon.results.map((ct, index) => (
        ((objPokemon.results[index].name).includes(searchBox) ? (
          filterPokemon.push({
            id: (objPokemon.results[index].url).slice(34, 36).replace("/", ""),
            name: objPokemon.results[index].name,
          })
        ) : (
          false
        ))
      ))
      setCurrentPokemon({ state: true, data: filterPokemon })
    } else {
      setCurrentPokemon({ state: false, data: null })
    }
  }

  return (
    <div>
      <div className="d-flex justify-content-center py-4 px-5">
        <input id="ip-Search" type="text" className="form-control" placeholder="Search your pokemon" onChange={(() => searchName(allPokemons))}></input>
      </div>
      <div>
        {objPokemon && !currentPokemon.data ? (
          <FilterPokemonCard objPokemon={objPokemon.results} routeAPI={routeAPI} />
        ) : (
          <FilterPokemonCard objPokemon={currentPokemon.data} routeAPI={routeAPI} />
        )}
      </div>
    </div >
  );
}





