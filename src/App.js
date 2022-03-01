import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import PokeGrid from "./pages/pokeGrid";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/pokegrid" element={<PokeGrid />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
