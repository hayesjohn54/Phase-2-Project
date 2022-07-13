import React from "react";
import {NavLink} from 'react-router-dom'
function NavBar() {
    
    return (
        <nav className="nav">
            <a><NavLink exact="true" to="/">Home</NavLink></a>
            <a><NavLink to="/about">About</NavLink></a>
            <a><NavLink to="/galaxies">Galaxies</NavLink></a>
        </nav>
    );
}

export default NavBar;