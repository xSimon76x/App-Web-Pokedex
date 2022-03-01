import { PokeApi } from "../api/pokeApi";
import "../assets/css/pokemonCard.css";
import logoPokemon from "../assets/images/logoPokemon.png";

export default function InformationCard(props) {
  let counter = 1;
  const { objPokemon } = props;
  const data = PokeApi("https://pokeapi.co/api/v2/pokemon/1/");
  if (data.data) {
    //console.log(data.data.sprites.back_default);
    console.log(objPokemon);
  }

  return (
    <div>
      <div className="flexOrder">
        {objPokemon.results.map((ct, index) => (
          <div key={index}>
            {objPokemon && data.data ? (
              <div className="pokeCard">
                <h3>#{counter++}</h3>
                <img src={data.data.sprites.back_default}></img>
                <h3>{objPokemon.results[index].name}</h3>
              </div>
            ) : (
              <>
                <div className="pokeCard">
                  <h3>Cargando</h3>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
