import NavBar from './NavBar'
import GalaxyContainer from './GalaxyContainer'
import React, {useEffect, useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'

function App(){

    function fetchAPI(){
        fetch('http://localhost:3001/galaxies')
        .then(res=>res.json())
        .then(galaxyData => console.log(galaxyData))
    }

    fetchAPI()
    const [page, setPage]= useState('/')
    return (
        <div>
            <NavBar onChangePage={setPage} />
            <Routes>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/projects">
                    {/* <ProjectList /> */}
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <h1>404 not found</h1>
                </Route>
            </Routes>
        </div>
    );
}

export default App;