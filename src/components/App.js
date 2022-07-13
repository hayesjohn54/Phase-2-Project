import NavBar from './NavBar';
import GalaxyContainer from './GalaxyContainer';
import React, {useEffect, useState} from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';

function App(){
    const [galaxies, setGalaxies]= useState([])

    useEffect(()=>{
      fetch('http://localhost:8000/galaxies')
        .then(res=>res.json())
        .then(galaxyData => setGalaxies(galaxyData))
    },[])
    
    return (
        <div>
            <NavBar />
                <Routes>
                    <Route path="/about" element={<About />}/>
                    <Route path="/galaxies" element={<GalaxyContainer galaxies={galaxies} />}/>
                    <Route path='/' element={<Home/>} />
                </Routes>
            
        </div>
    );
}

export default App;
