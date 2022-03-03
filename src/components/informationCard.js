
import ImgCard from "./imgCard.js";
import { Link } from "react-router-dom";
import "../assets/css/pokemonCard.css";
import { useEffect, useState } from "react";
import { PokeApi } from "../api/pokeApi.js";
import heart from "../assets/images/heart.png"


export default function InformationCard(props) {

  let counter = 1;
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

    // (searchBox !== "" ? (
    //   objPokemon.results.map((ct, index) => (
    //     ((objPokemon.results[index].name).includes(searchBox) ? (
    //       filterPokemon.push({
    //         id: (objPokemon.results[index].url).slice(34, 36).replace("/", ""),
    //         name: objPokemon.results[index].name,
    //       })
    //     ) : (
    //       false
    //     ))
    //   )),
    //   setCurrentPokemon({ state: true, data: filterPokemon })
    // ) : (
    //   setCurrentPokemon({ state: false, data: null })

    // ))


  }

  if (!currentPokemon) {
    console.log("todos los pokemons")
    console.log(currentPokemon)

  } else {
    console.log("pokemones filtrados")
    console.log(currentPokemon)
  }


  return (
    <div>
      <div className="d-flex justify-content-center containerButtons">
        <input id="ip-Search" type="text" className="form-control" placeholder="Search your pokemon" onChange={(() => searchName(objPokemon))}></input>
      </div>
      <div className="flexOrder">
        {!currentPokemon.data ? (
          objPokemon.results.map((ct, index) => (
            <div key={index}>
              {/* aqui */}
              {objPokemon ? (

                <div className="pokeCard">
                  <div className="d-flex justify-content-end align-content-center">
                    <input type="checkbox" className="btn-favorite"></input>

                  </div>
                  <Link
                    to={"/pokedex/" + objPokemon.results[index].name}
                    style={{ textDecoration: "none" }}
                  >
                    <h3>#{counter++}</h3>
                    <ImgCard namePokemon={objPokemon.results[index].name} />
                    <h3>{objPokemon.results[index].name}</h3>
                  </Link>
                </div>

              ) : (
                <>
                  <div className="pokeCard">
                    <div className="spinner-border text-info" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))) : (

          <>
            <div className="pokeCard">
              <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div >
  );
}
