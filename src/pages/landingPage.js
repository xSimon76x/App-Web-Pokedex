import logoPokemon from "../assets/images/logoPokemon.png";
import pokeball from "../assets/images/pokeball.png";
import "../assets/css/landing.css";

export default function LandingPage(props) {
  return (
    <>
      <div className="fondoWallpaper">
        <div className="containerInformation">
          <img
            className="img-fluid  d-block"
            src={logoPokemon}
            width="300px"
            alt="imgLogo"
          ></img>
          <h1 style={{ display: "none" }}>Pokedex</h1>
          <button
            type="button"
            className="btn btn-secondary"
            style={{ width: "20vw", boxShadow: "1px 1px 20px black" }}
            onClick={() => (window.location.href = "/pokegrid")}
          >
            START
          </button>
        </div>
      </div>
    </>
  );
}
