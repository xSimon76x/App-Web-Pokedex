
import ImgCard from "./imgCard.js";
import { Link } from "react-router-dom";
import "../assets/css/pokemonCard.css";
import { useEffect, useState } from "react";
import { PokeApi } from "../api/pokeApi.js";
import heart from "../assets/images/heart.png"


export default function InformationCard(props) {
  let counter = 1;
  const { routeAPI } = props;
  const [cambiaURL, setCambiaURL] = useState("" + routeAPI + "?offset=0&limit=30")
  const [currentPage, setCurrentPage] = useState(1)
  const [currentPokemon, setCurrentPokemon] = useState("")

  const objPokemon = PokeApi(cambiaURL);

  const previewPage = (obj, page) => {
    if (obj.previous !== null) {
      setCambiaURL(obj.previous);
      setCurrentPage(page - 1);
    } else {
      console.log("final page");
    }
  }

  const nextPage = (obj, page) => {
    if (obj.next !== null) {
      setCambiaURL(obj.next);
      setCurrentPage(page + 1);
    } else {
      console.log("first page");
    }
  }



  const searchName = (objPokemon) => {
    let searchBox = document.getElementById("ip-Search").value;

    let filterPokemon = new Array();


    (searchBox !== "" ? (

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
    ) : (
      console.log("nada")
    ))
    console.log(filterPokemon)
    setCurrentPokemon(filterPokemon)
    console.log(currentPokemon)


  }



  return (
    <div>
      <div className="d-flex justify-content-center containerButtons">
        <input id="ip-Search" type="text" className="form-control" placeholder="Search your pokemon" onChange={(() => searchName(objPokemon))}></input>
      </div>
      <div className="d-flex justify-content-between containerButtons">
        <button type="button" className="btn btn-secondary" onClick={(() => previewPage(objPokemon, currentPage))}>Preview</button>
        <p style={{ color: "white" }}>{currentPage}</p>
        <button type="button" className="btn btn-secondary" onClick={(() => nextPage(objPokemon, currentPage))}>Next</button>
      </div>
      <div className="flexOrder">
        {objPokemon ? (
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
          false
        )}
      </div>
    </div >
  );
}
