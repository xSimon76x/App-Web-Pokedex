import { PokeApi } from "../api/pokeApi.js"

export default function ImgCard(props) {
    const { namePokemon } = props
    const pokemonSpecies = PokeApi("https://pokeapi.co/api/v2/pokemon/" + namePokemon)

    return (
        <div>
            {pokemonSpecies ? (

                <>

                    <img className="imgPokemon" src={pokemonSpecies.sprites.other.home.front_default} alt="imgPokemon"></img>

                </>
            ) : (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )
            }
        </div>
    )
};
