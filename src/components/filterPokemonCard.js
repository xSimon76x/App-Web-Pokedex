import ImgCard from "./imgCard.js";
import { Link } from "react-router-dom";
import "../assets/css/pokemonCard.css";
import React from "react";



let isFavorite = []
function FilterPokemonCard(props) {

    const { objPokemon, btnFavorite } = props;




    return (
        <div>
            <div className="flexOrder">

                {objPokemon ? (
                    objPokemon.map((ct, index) => (
                        <div key={index} className="d-flex justify-content-center">
                            {objPokemon ? (
                                <div className="pokeCard">
                                    <div className="containerImageHeart">
                                        <p id={"icoN" + objPokemon[index].name} onClick={(() => (btnFavorite("icoN" + objPokemon[index].name, objPokemon[index].name, isFavorite)))}>🤍</p>
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
        </div>



    );

};


export default FilterPokemonCard;