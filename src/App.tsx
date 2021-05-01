import React from 'react';
import './App.scss';
import Menu from "./components/menu/Menu";
import { Router } from "@reach/router"
import Universes from "./components/pages/universes/Universes";
import Stars from "./components/pages/stars/Stars";
import Imprint from "./components/pages/imprint/Imprint";

function App() {
  return (
    <div className="App">
        <Menu />
        <div className="content container">
            <Router>
                <Universes path="/"/>
                <Stars path="/stars"/>
                <Imprint path="/imprint"/>
            </Router>
        </div>
    </div>
  );
}

export default App;
