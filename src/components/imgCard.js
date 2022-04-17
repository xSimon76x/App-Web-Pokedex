import { PokeApi } from "../api/pokeApi.js";
import loadingPokemon from "../assets/images/pokeballLoadingPokemon.gif";

export default function ImgCard(props) {
  const { namePokemon } = props;
  const pokemonSpecies = PokeApi(
    "https://pokeapi.co/api/v2/pokemon/" + namePokemon
  );

  return (
    <div>
      {pokemonSpecies ? (
        <>
          <img
            className="imgPokemon"
            src={pokemonSpecies.sprites.other.home.front_default}
            alt="imgPokemon"
          ></img>
        </>
      ) : (
        <div className="d-flex justify-content-center">
          <div class="d-flex justify-content-center">
            <img src={loadingPokemon} style={{ width: "100px" }}></img>
          </div>
        </div>
      )}
    </div>
  );
}
