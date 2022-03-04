import ImgCard from "./imgCard.js";
import { Link } from "react-router-dom";
import "../assets/css/pokemonCard.css";
import React, { useEffect, useState } from "react";




export default function FilterPokemonCard(props) {


    const { objPokemon } = props
    const [objetoPokemon, setObjetoPokemon] = useState(objPokemon)
    const [favorite, setFavorite] = useState([])
    const redHeart = "❤️"
    const whiteHeart = "🤍"
    let isFavorite = []

    console.log(props)

    const btnFavorite = (id, namePokemon, isFavorite) => {
        let content = document.getElementById(id).textContent
        let ind = 0
        if (content == "🤍") {
            document.getElementById(id).textContent = "❤️"
            isFavorite.push({ id: id, name: namePokemon })
            console.log(isFavorite)
        } else {
            document.getElementById(id).textContent = "🤍"
            isFavorite.map((ct, index) => (
                ((isFavorite[index].name).includes(namePokemon) ? (
                    isFavorite.splice(index, 1),
                    console.log(isFavorite)
                ) : (
                    false
                ))
            ))
        }
    }

    if (favorite.name) {
        console.log(favorite)
    }

    return (<div className="flexOrder">
        {objPokemon ? (
            objPokemon.map((ct, index) => (
                <div key={index} className="d-flex justify-content-center">
                    {objPokemon ? (
                        <div className="pokeCard">
                            <div className="containerImageHeart">
                                <p id={"icoN" + objPokemon[index].name} onClick={(() => btnFavorite("icoN" + objPokemon[index].name, objPokemon[index].name, isFavorite))}>{whiteHeart}</p>
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
