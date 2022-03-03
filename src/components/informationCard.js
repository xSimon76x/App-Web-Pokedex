

import { Link } from "react-router-dom";
import "../assets/css/pokemonCard.css";
import { useEffect, useState } from "react";
import { PokeApi } from "../api/pokeApi.js";
import heart from "../assets/images/heart.png"
import FilterPokemonCard from "./filterPokemonCard.js";


export default function InformationCard(props) {


  const { routeAPI } = props;
  const { objPokemon } = props;
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
      <div className="d-flex justify-content-center containerButtons">
        <input id="ip-Search" type="text" className="form-control" placeholder="Search your pokemon" onChange={(() => searchName(objPokemon))}></input>
      </div>
      <div className="flexOrder">
        {objPokemon && !currentPokemon.data ? (
          <FilterPokemonCard objPokemon={objPokemon.results} />
        ) : (

          <FilterPokemonCard objPokemon={currentPokemon.data} />
          // <div className="pokeCard">
          //   <div className="spinner-border text-info" role="status">
          //     <span className="visually-hidden">Loading...</span>
          //   </div>
          // </div>

        )}
      </div>
    </div >
  );
}





