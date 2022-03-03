import PokemonCard from "../components/pokemonCard";

export default function pokeGrid() {



  return (
    <div className="container-fluid">
      {/* integracion de componente de lista de pokemones */}
      <div className="d-flex flex-column bd-highlight mb-3">
        <div className="p-2 bd-highlight ">
          <h1 className="title">PokeGrid</h1>
        </div>
        <div className="p-2 bd-highlight">

          <PokemonCard />
        </div>
      </div>
    </div>
  );
}
