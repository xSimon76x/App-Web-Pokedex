import ImgCard from "./imgCard.js";
import { Link } from "react-router-dom";
import "../assets/css/pokemonCard.css";
import { useEffect } from "react";

export default function FilterPokemonCard(props) {
    let counter = 1;

    const { objPokemon } = props

    return (<div className="flexOrder">
        {objPokemon ? (
            objPokemon.map((ct, index) => (
                <div key={index} className="d-flex justify-content-center">
                    {objPokemon ? (
                        <div className="pokeCard">
                            <div className="d-flex justify-content-end align-content-center">
                                <input type="checkbox" className="btn-favorite" ></input>
                            </div>
                            <Link
                                to={"/pokedex/" + objPokemon[index].name}
                                style={{ textDecoration: "none" }}
                            >
                                {/* <h3>#{counter++}</h3> */}
                                <ImgCard namePokemon={objPokemon[index].name} />
                                <h3>{objPokemon[index].name}</h3>
                            </Link>
                        </div>

                    ) : (
                        <>
                            <div class="d-flex justify-content-center">
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            ))
        ) : (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )}
    </div>

    );

};
