import { useState } from "react";
import "../assets/css/pokemonCard.css";
import { PokeApi } from "../api/pokeApi";
import InformationCard from "./informationCard";


export default function PokemonCard(props) {

  //const { objPokemon } = props
  const { routeAPI } = props
  const [cambiaURL, setCambiaURL] = useState("" + routeAPI + "?offset=0&limit=30")
  const [currentPage, setCurrentPage] = useState(1)

  const previewPage = (obj, page) => {
    if (obj.previous !== null) {
      setCambiaURL(obj.previous);
      setCurrentPage(page - 1);
    } else {
      console.log("first page");
    }
  }

  const nextPage = (obj, page) => {
    if (obj.next !== null) {
      setCambiaURL(obj.next);
      setCurrentPage(page + 1);
    } else {
      console.log("final page");
    }
  }

  const objPokemonBase = PokeApi(cambiaURL);

  return (
    <div className="container-fluid">

      {objPokemonBase ? (
        <>

          <div className="d-flex justify-content-between containerButtons">
            <button type="button" className="btn btn-secondary" onClick={(() => previewPage(objPokemonBase, currentPage))}>Preview</button>
            <p style={{ color: "white" }}>{currentPage}</p>
            <button type="button" className="btn btn-secondary" onClick={(() => nextPage(objPokemonBase, currentPage))}>Next</button>
          </div>
          <InformationCard objPokemon={objPokemonBase} routeAPI={routeAPI} />
        </>
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
