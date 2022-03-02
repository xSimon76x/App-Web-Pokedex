import { useEffect, useState } from "react";
import { PokeApi } from "../../api/pokeApi";

export const GetMetaPokemon = (listPokemonUrl, namePokemon) => {
  //   const [urlOnePokemon, setUrlOnePokemon] = useState({
  //     state: false,
  //     data: null,
  //   });

  console.log(listPokemonUrl + "-" + "-   " + namePokemon);

  const { state, data } = PokeApi(listPokemonUrl);

  //   useEffect(() => {
  //     query(data, namePokemon);
  //   }, [data, namePokemon]);

  //   function query(data, namePokemon) {
  //     if (data && namePokemon) {
  //       data.results.map((ct, index) =>
  //         data.results[index].name == namePokemon
  //           ? setUrlOnePokemon({ state: true, data: data.results[index].url })
  //           : false
  //       );
  //     }
  //   }

  return listPokemonUrl;
};
