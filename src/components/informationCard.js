
import ImgCard from "./imgCard.js";
import { Link } from "react-router-dom";
import "../assets/css/pokemonCard.css";
import { useState } from "react";
import { PokeApi } from "../api/pokeApi.js";


export default function InformationCard(props) {
  let counter = 1;

  const { objPokemon } = props;
  const { routeAPI } = props;



  //let currentURL = { url: routeAPI }
  const [cambiaURL, setCambiaURL] = useState("" + routeAPI + "?offset=20&limit=30")
  const [quantityPokemons, setQuantityPokemons] = useState(20)

  const objPokemon2 = PokeApi(cambiaURL);



  if (objPokemon2) {
    console.log("Al Cargar")
    console.log(objPokemon2)
  }

  // const previewPage = () => {
  //   if (currentPage > 0) {
  //     setCurrentPage(currentPage - 6);
  //   }
  // }

  const nextPage = (pk, url, obj) => {
    const pokemons = pk + 20

    const baseDirecction = url.substr(0, 33)
    const direcction = "?offset="

    setQuantityPokemons(pokemons)
    setCambiaURL(baseDirecction + direcction + pokemons + "&limit=30")

    // console.log(pk)
    // console.log(url)
    if (obj) {
      console.log("boton Next")
      console.log(obj)
    }


    //console.log(URL + "?offset=" + quantityPokemons + "&limit=30")
    //console.log(this.currentURL)



  }




  return (
    <div>
      <div className="d-flex justify-content-between containerButtons">
        <button type="button" className="btn btn-secondary" >Preview</button>
        <button type="button" className="btn btn-secondary" onClick={(() => nextPage(quantityPokemons, cambiaURL, objPokemon2))}>Next</button>
      </div>
      <div className="flexOrder">
        {objPokemon ? (
          objPokemon.results.map((ct, index) => (
            <div key={index}>
              {/* aqui */}
              {objPokemon ? (
                <Link
                  to={"/pokedex/" + objPokemon.results[index].name}
                  style={{ textDecoration: "none" }}
                >
                  <div className="pokeCard">
                    <h3>#{counter++}</h3>
                    <ImgCard namePokemon={objPokemon.results[index].name} />
                    <h3>{objPokemon.results[index].name}</h3>
                  </div>
                </Link>
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
          ))) : (
          false
        )}
      </div>
    </div>
  );
}
