import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PlanetList from './components/PlanetList';
import PersonList from './components/PersonList';
import StarshipList from './components/StarshipList';
import PlanetDetail from './components/PlanetDetail';
import PersonDetail from './components/PersonDetail';
import StarshipDetail from './components/StarshipDetail';
import SearchComponent from './components/SearchComponent'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>Star Wars Database</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Search</Link>
              </li>
              <li>
                <Link to="/planets">Planets</Link>
              </li>
              <li>
                <Link to="/people">Characters</Link>
              </li>
              <li>
                <Link to="/starships">Starships</Link>
              </li>
            </ul>
        </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<SearchComponent />} />

            <Route path="/planets" element={<PlanetList />} />
            <Route path="/people" element={<PersonList />} />
            <Route path="/starships" element={<StarshipList />} />
            <Route path="/planets/:id" element={<PlanetDetail />} />
            <Route path="/people/:id" element={<PersonDetail />} />
            <Route path="/starships/:id" element={<StarshipDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
