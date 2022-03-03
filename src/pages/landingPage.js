import { Link, Router, Routes } from "react-router-dom";
import logoPokemon from "../assets/images/logoPokemon.png";
import PokeGrid from "./pokeGrid"
import "../assets/css/landing.css";



export default function LandingPage() {

  const login = () => {
    console.log("click");
    return window.location.host + "/pokegrid"
  }


  return (
    <div>
      <div className="d-flex flex-column bd-highlight">
        <div className="p-2 bd-highlight">
          <img
            className="img-fluid mx-auto d-block"
            src={logoPokemon}
            width="300px"
            alt="imgLogo"
          ></img>
        </div>
        <div className="p-2 bd-highlight">
          <h1>Pokedex</h1>
        </div>
        <div className="p-2 bd-highlight d-grid gap-2 mx-auto">


          {/* <Link to="/pokegrid"> */}
          <button type="button" className="btn btn-secondary" onClick={(() => login())}>

            START


          </button>
          {/* </Link> */}


        </div>
      </div>
    </div>
  );
}
