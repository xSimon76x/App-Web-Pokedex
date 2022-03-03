
import logoPokemon from "../assets/images/logoPokemon.png";
import "../assets/css/landing.css";


export default function LandingPage(props) {


  return (<>
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

      </div>
    </div>
  </>
  );

}



