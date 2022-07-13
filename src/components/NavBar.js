import React from "react";
import {NavLink} from 'react-router-dom'
function NavBar() {
    
    return (
        <nav className="nav">
            <h1 className="nav-title">SPACEY</h1>
            <a><NavLink to="/form">Create</NavLink></a>
            <a><NavLink to="/galaxies" >Galaxies</NavLink></a>
            <a><NavLink to="/about">About</NavLink></a>
            <a><NavLink exact="true" to="/">Home</NavLink></a>
            
        </nav>
    );
}

export default NavBar;