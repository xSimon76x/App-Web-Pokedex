import PokemonCard from "../components/pokemonCard";
import { PokeApi } from "../api/pokeApi";

export default function pokeGrid() {

  const routeAPI = "https://pokeapi.co/api/v2/pokemon";
  const data = PokeApi(routeAPI);


  return (
    <div className="container-fluid">
      <div className="d-flex flex-column bd-highlight mb-3">
        <div className="p-2 bd-highlight ">
          <h1 className="title">PokeGrid</h1>
        </div>
        <div className="p-2 bd-highlight">
          {data ? (
            <PokemonCard objPokemon={data} routeAPI={routeAPI} />
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
      </div>
    </div>
  );
}
