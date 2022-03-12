import { PokeApi } from "../api/pokeApi";

export default function DescriptionPokedex(props) {

    const { idPokemon } = props;
    const listDescriptionPokemon = PokeApi("https://pokeapi.co/api/v2/pokemon-species/" + idPokemon);


    return (<div>
        {listDescriptionPokemon ? (
            <>
                {listDescriptionPokemon.flavor_text_entries.map((ct, index) => (
                    <div key={index}>
                        {listDescriptionPokemon.flavor_text_entries[index].version.name === "platinum" ? (
                            <>
                                <p id="description">{listDescriptionPokemon.flavor_text_entries[index].flavor_text}</p>
                            </>

                        ) : (
                            false
                        )}

                    </div>

                ))}

            </>

        ) : (
            <>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </>
        )

        }
    </div>


    );
};
