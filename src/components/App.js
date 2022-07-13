import NavBar from './NavBar';
import GalaxyContainer from './GalaxyContainer';
import React, {useEffect, useState} from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';

function App(){
    const [galaxies, setGalaxies]= useState([])
    const [number, setNumber]= useState()
    const [dealerNumber, setDealerNumber]=useState()

    useEffect(()=>{
      fetch('http://localhost:8000/galaxies')
        .then(res=>res.json())
        .then(galaxyData => setGalaxies(galaxyData))
    },[])

    const playerObj= galaxies.filter(galaxy=>(galaxy.id===number))
    const dealerObj= galaxies.filter(galaxy=>(galaxy.id===dealerNumber))
    console.log(dealerObj)
    return (
        <div>
            <NavBar />
                <Routes>
                    <Route path="/about" element={<About />}/>
                    <Route path="/galaxies" element={<GalaxyContainer galaxies={galaxies} />}/>
                    <Route path='/' element={<Home  dealerObj={dealerObj} setDealerNumber={setDealerNumber} playerObj={playerObj} number={number} setNumber={setNumber}/>} />
                </Routes>
            
        </div>
    );
}

export default App;
