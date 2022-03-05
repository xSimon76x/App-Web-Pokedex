
import "../assets/css/pokemonCard.css";
import { useState } from "react";
import { PokeApi } from "../api/pokeApi.js";
import heart from "../assets/images/heart.png"
import FilterPokemonCard from "./filterPokemonCard.js";


export default function InformationCard(props) {

  const { objPokemon, routeAPI, counterMaxPokemons } = props;
  const allPokemons = PokeApi(routeAPI + "?limit=" + 600)
  const [currentPokemon, setCurrentPokemon] = useState({ state: false, data: null })
  const [listFavoritePokemon, setListFavoritePokemon] = useState(null);
  const [btnPressFavorites, setBtnPressFavorites] = useState(false)


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

  function btnFavorite(id, namePokemon, isFavorite) {
    let content = document.getElementById(id).textContent;

    if (content == "🤍") {
      document.getElementById(id).textContent = "❤️"
      isFavorite.push({ id: id, name: namePokemon })
      return setListFavoritePokemon(isFavorite);
    } else {
      document.getElementById(id).textContent = "🤍"
      isFavorite.map((ct, index) => (
        ((isFavorite[index].name).includes(namePokemon) ? (
          isFavorite.splice(index, 1)
        ) : (
          false
        ))
      ))
      return setListFavoritePokemon(isFavorite)
    }
  }





  return (
    <div>
      <div className="d-flex bd-highlight py-4 px-5">
        <div className="p-2 w-100 bd-highlight"><input id="ip-Search" type="text" className="form-control" placeholder="Search your pokemon" onChange={(() => searchName(allPokemons))}></input></div>
        <div className="d-flex p-2 flex-shrink-1 bd-highlight align-content-center">
          <button type="button" className="btn btn-primary" onClick={(() => setBtnPressFavorites(true))}>
            <img src={heart} style={{ width: "30px", height: "25px" }}></img>
          </button>
        </div>
      </div>
      <div>
        {objPokemon && !currentPokemon.data ? (
          btnPressFavorites == true ? (
            <FilterPokemonCard objPokemon={listFavoritePokemon} routeAPI={routeAPI} btnFavorite={btnFavorite} />
          ) : (
            <FilterPokemonCard objPokemon={objPokemon.results} routeAPI={routeAPI} btnFavorite={btnFavorite} />
          )
        ) : (

          !objPokemon ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <FilterPokemonCard objPokemon={currentPokemon.data} routeAPI={routeAPI} btnFavorite={btnFavorite} />
          )
        )}
      </div>
    </div >
  );
}





