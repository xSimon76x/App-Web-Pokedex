import PokemonCard from "../components/pokemonCard";
import { PokeApi } from "../api/pokeApi";
import pokeLoadingPage from "../assets/images/pokeballLoadingPage.gif";

export default function pokeGrid() {
  const routeAPI = "https://pokeapi.co/api/v2/pokemon";
  const data = PokeApi(routeAPI);

  return (
    <div className="container-fluid">
      {data ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "1rem",
            }}
          >
            <button
              className="btn btn-secondary"
              onClick={() => (window.location.href = "/")}
            >
              Salir
            </button>
          </div>
          <div className="d-flex flex-column bd-highlight mb-3">
            <div className="p-2 bd-highlight ">
              <h1 className="title">PokeGrid</h1>
            </div>
            <div className="p-2 bd-highlight">
              <PokemonCard objPokemon={data} routeAPI={routeAPI} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="d-flex justify-content-center">
            <img src={pokeLoadingPage} style={{ width: "200px" }}></img>
          </div>
        </>
      )}
    </div>
  );
}
