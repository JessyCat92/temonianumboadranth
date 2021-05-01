import React from 'react';
import './Menu.scss';
import NavLink from "./NavLink";

function Menu() {
    return (
        <div className="Menu">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img className="navbar-brand logo" alt ="logo" src="/img/logo_randlos.png"/>
                        Coding
                    </a>
                    <div className="navbar" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/">Universes</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="stars">Stars</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="imprint">Imprint</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Menu;
