import React from 'react';
import './App.scss';
import Menu from "./components/menu/Menu";
import { Router } from "@reach/router"
import UniversesPage from "./components/pages/universes/Universes";
import StarsPage from "./components/pages/stars/Stars";
import Imprint from "./components/pages/imprint/Imprint";

function App() {
  return (
    <div className="App">
        <Menu />
        <div className="content container">
            <Router>
                <UniversesPage path="/"/>
                <StarsPage path="/stars"/>
                <Imprint path="/imprint"/>
            </Router>
        </div>
    </div>
  );
}

export default App;
