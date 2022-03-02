
import ImgCard from "./imgCard.js";
import { Link } from "react-router-dom";
import "../assets/css/pokemonCard.css";
import { createFactory, useState } from "react";

export default function InformationCard(props) {
  let counter = 1;
  const { objPokemon } = props;
  const listPokemons = (objPokemon.results).slice(0, 6)
  const [currentPage, setCurrentPage] = useState(0)

  function filterPokemons() {
    const listPokemons = (objPokemon.results).slice(currentPage, currentPage + 6);
    return listPokemons;
  }

  console.log(filterPokemons())

  const previewPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 6);
    }
  }

  const nextPage = () => {
    setCurrentPage(currentPage + 6);
  }


  return (
    <div>
      <div className="d-flex justify-content-between containerButtons">
        <button type="button" className="btn btn-secondary" onClick={previewPage}>Preview</button>
        <button type="button" className="btn btn-secondary" onClick={nextPage}>Next</button>
      </div>
      <div className="flexOrder">
        {filterPokemons().map((ct, index) => (
          <div key={index}>
            {/* aqui */}
            {objPokemon ? (
              <Link
                to={"/pokedex/" + objPokemon.results[index].name}
                style={{ textDecoration: "none" }}
              >
                <div className="pokeCard">
                  <h3>#{counter++}</h3>
                  <ImgCard namePokemon={objPokemon.results[index].name} />
                  <h3>{objPokemon.results[index].name}</h3>
                </div>
              </Link>
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
        ))}
      </div>
    </div>
  );
}
