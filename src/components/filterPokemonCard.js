import ImgCard from "./imgCard.js";
import { Link } from "react-router-dom";
import "../assets/css/pokemonCard.css";
import { useEffect, useState } from "react";
import { PokeApi } from "../api/pokeApi.js";
import heart from "../assets/images/heart.png"
export default function FilterPokemonCard(props) {
    let counter = 1;
    const { objPokemon } = props



    return (<div className="flexOrder">
        {objPokemon ? (


            objPokemon.map((ct, index) => (
                <div key={index}>
                    {/* aqui */}
                    {objPokemon ? (
                        <div className="pokeCard">
                            <div className="d-flex justify-content-end align-content-center">
                                <input type="checkbox" className="btn-favorite"></input>
                            </div>
                            <Link
                                to={"/pokedex/" + objPokemon[index].name}
                                style={{ textDecoration: "none" }}
                            >
                                <h3>#{counter++}</h3>
                                <ImgCard namePokemon={objPokemon[index].name} />
                                <h3>{objPokemon[index].name}</h3>
                            </Link>
                        </div>

                    ) : (
                        <>
                            <div className="pokeCard">
                                <div className="spinner-border text-info" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            ))
        ) : (
            <>
                <p>nada</p>
            </>
        )}
    </div>

    );

};
