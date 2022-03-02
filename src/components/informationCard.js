
import ImgCard from "./imgCard.js";
import { Link } from "react-router-dom";
import "../assets/css/pokemonCard.css";

export default function InformationCard(props) {
  let counter = 1;
  const { objPokemon } = props;

  return (
    <div>
      <div className="flexOrder">
        {objPokemon.results.map((ct, index) => (
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
                  <div class="spinner-border text-info" role="status">
                    <span class="visually-hidden">Loading...</span>
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
