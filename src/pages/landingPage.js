import "../assets/css/landing.css";
import logoPokemon from "../assets/images/logoPokemon.png";

export default function landingPage() {
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
        <div className="p-2 bd-highlight d-grid gap-2 mx-auto">
          <button type="button" className="btn btn-secondary">
            START
          </button>
        </div>
      </div>
    </div>
  );
}
