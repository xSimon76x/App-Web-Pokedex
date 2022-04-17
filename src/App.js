import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import LandingPage from "./pages/landingPage";
import PokeGrid from "./pages/pokeGrid";
import PokeDex from "./pages/pokeDex";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ display: "none" }}>learn react</h1>
        <Router>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/pokegrid" element={<PokeGrid />} />
            <Route exact path="/pokedex/:pokemon" element={<PokeDex />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
