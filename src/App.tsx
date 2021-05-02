import React from 'react';
import './App.scss';
import Menu from "./components/menu/Menu";
import {Redirect, Router} from "@reach/router"
import UniversesPage from "./components/pages/universes/Universes";
import StarsPage from "./components/pages/stars/Stars";
import Imprint from "./components/pages/imprint/Imprint";
import UniversesMain from "./components/pages/universes/UniversesMain";
import CreateStar from "./components/pages/stars/create/CreateStar";
import CreateUniverse from "./components/pages/universes/create/CreateUniverse";

function App() {

    return (
    <div className="App">
        <Menu />
        <div className="content container">
            <Router>
                <Redirect
                    from="/"
                    to="universes"
                    noThrow
                />
                <UniversesMain path="universes" >
                    <UniversesPage path="/" />
                    <CreateUniverse path="create" />
                    <StarsPage path=":universeId" />
                    <CreateStar path=":universeId/create" />
                </UniversesMain>
                <StarsPage path="stars"/>
                <Imprint path="imprint"/>
            </Router>
        </div>
    </div>
  );
}

export default App;
