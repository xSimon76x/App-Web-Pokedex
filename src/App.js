import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import PokeGrid from "./pages/pokeGrid";
import PokeDex from "./pages/pokeDex";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/pokegrid" element={<PokeGrid />} />
            <Route exact path="/pokedex/:pokemon" element={<PokeDex />} />
            <Route
              exact
              path="/pokedex"
              render={() => {
                return <PokeDex pokemon="all" />;
              }}
            />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
