import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import PokeGrid from "./pages/pokeGrid";
import PokeDex from "./pages/pokeDex";
import "./App.css";
import { useState } from "react";




function App() {

  const [stateButton, setStateButton] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <p style={{ display: "none" }}>learn react</p>

        <Router>

          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/pokegrid" element={<PokeGrid />} />
            <Route exact path="/pokedex/:pokemon" element={<PokeDex />} />

          </Routes>
          < Link to="/pokegrid" >
            {stateButton == false ? (

              <div className="p-2 bd-highlight d-grid gap-2 mx-auto">
                <button type="button" className="btn btn-secondary" style={{ width: "20vw" }} onClick={(() => setStateButton(true))}>
                  START
                </button>
              </div>

            ) : (
              false
            )}

          </Link >


        </Router>
      </header>
    </div>
  );
}

export default App;
