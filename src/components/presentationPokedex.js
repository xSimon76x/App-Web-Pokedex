import pokeball from "../assets/images/pokeball.png";
import { PokeApi } from "../api/pokeApi";

export default function LeftContainerPokedex(props) {
  const { objPokemon } = props;
  const idPokemon = objPokemon.id
  const categoryPokemon = PokeApi("https://pokeapi.co/api/v2/pokemon-species/" + idPokemon)

  return (
    <div className="d-flex flex-column bd-highlight mb-3">
      <div className="p-2 bd-highlight">
        <div className="flex-presentation ">
          <img className="img-icon" src={pokeball}></img>
          <p>{objPokemon.id}</p>
          <p>{objPokemon.name}</p>
        </div>
      </div>
      <div className="p-2 bd-highlight">
        <div className="d-flex justify-content-center align-items-center">
          {categoryPokemon ? (
            <>
              <p>{categoryPokemon.genera[7].genus}</p>
            </>
          ) : (
            <>
              <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </>

          )}

        </div>
      </div>
    </div>
  );
}
