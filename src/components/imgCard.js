import { PokeApi } from "../api/pokeApi.js"

export default function ImgCard(props) {
    const { namePokemon } = props
    const pokemonSpecies = PokeApi("https://pokeapi.co/api/v2/pokemon/" + namePokemon)
    if (pokemonSpecies) {
        console.log(pokemonSpecies)
    }
    return (
        <div>
            {pokemonSpecies ? (
                <>

                    <img src={pokemonSpecies.sprites.other.home.front_default}></img>

                </>
            ) : (
                <div class="spinner-border text-info" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            )
            }
        </div>
    )
};
