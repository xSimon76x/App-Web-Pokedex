import PresentationPokedex from "../components/presentationPokedex";
import StatisticsPokedex from "../components/statisticsPokedex";
import DescriptionPokedex from "../components/descriptionPokedex";
import "../assets/css/pokedex.css";
import { Link, Router, useParams } from "react-router-dom";
import { PokeApi } from "../api/pokeApi";

export default function PokeDex() {
  const { pokemon } = useParams();
  const objPokemon = PokeApi("https://pokeapi.co/api/v2/pokemon/" + pokemon);

  return (
    <div className="container">
      <div className="d-flex bd-highlight topTab">
        <div className="p-2 flex-grow-1 bd-highlight">
          <div className="d-flex justify-content-center ">
            <h2>Pokedex registration completed</h2>
          </div>
        </div>
        <div className="p-2 bd-highlight ">

          <Link to={"/pokegrid"}>
            <button type="button" className="btn btn-secondary">
              Go back
            </button>
          </Link>

        </div>
      </div>
      {objPokemon ? (
        <>
          <div className="d-flex flex-column bd-highlight mb-3 styleBackground">
            <div className="p-2 bd-highlight">
              <div className="d-flex bd-highlight">
                <div className="p-2 flex-fill bd-highlight d-flex align-items-center justify-content-center">
                  <img
                    className="imgPokemon"
                    src={objPokemon.sprites.other.home.front_default}
                  ></img>
                </div>
                <div className="p-2 flex-fill bd-highlight">
                  <div className="d-flex flex-column bd-highlight mb-3">
                    <div className="p-2 bd-highlight">
                      <PresentationPokedex objPokemon={objPokemon} />
                    </div>
                    <div className="p-2 bd-highlight">
                      <StatisticsPokedex objPokemon={objPokemon} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2 bd-highlight">
              <DescriptionPokedex idPokemon={objPokemon.id} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </>
      )}
    </div>
  );
}
