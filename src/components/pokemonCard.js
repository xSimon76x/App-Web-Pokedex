import { useState } from "react";
import "../assets/css/pokemonCard.css";
import { PokeApi } from "../api/pokeApi";
import InformationCard from "./informationCard";


export default function PokemonCard(props) {


  const { routeAPI } = props
  const [changeURL, setchangeURL] = useState("" + routeAPI + "?offset=0&limit=30")
  const [currentPage, setCurrentPage] = useState(1)



  const previewPage = (obj, page) => {
    if (obj.previous !== null) {
      setchangeURL(obj.previous);
      setCurrentPage(page - 1);
    } else {
      console.log("first page");
    }
  }

  const nextPage = (obj, page) => {
    if (obj.next !== null) {
      setchangeURL(obj.next);
      setCurrentPage(page + 1);
    } else {
      console.log("final page");
    }
  }

  const objPokemonBase = PokeApi(changeURL);

  return (
    <div className="container-fluid">

      {objPokemonBase ? (
        <>

          <div className="d-flex justify-content-between px-5">
            <button type="button" className="btn btn-secondary" style={{ maxWidth: "12vw" }} onClick={(() => previewPage(objPokemonBase, currentPage))}>Preview</button>
            <p style={{ color: "white" }}>{currentPage}</p>
            <button type="button" className="btn btn-secondary" style={{ maxWidth: "12vw" }} onClick={(() => nextPage(objPokemonBase, currentPage))}>Next</button>
          </div>
          <InformationCard objPokemon={objPokemonBase} routeAPI={routeAPI} counterMaxPokemons={objPokemonBase.count} />
        </>
      ) : (
        <>
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
