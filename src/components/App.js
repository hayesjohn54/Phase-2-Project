import NavBar from './NavBar';
import GalaxyContainer from './GalaxyContainer';
import React, {useEffect, useState} from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Form from './Form';
import { func } from 'prop-types';

function App(){
    const [galaxies, setGalaxies]= useState([])
    const [number, setNumber]= useState()
    const [dealerNumber, setDealerNumber]=useState()
    const [sides, setSides]= useState(6)
    const [dealerPoints, setDealerPoints]=useState(0)
    const [playerPoints, setPlayerPoints]=useState(0)
    const [draws, setDraws]= useState(0)
    

    useEffect(()=>{
      fetch('http://localhost:3000/galaxies')
        .then(res=>res.json())
        .then(galaxyData => setGalaxies(galaxyData))
    },[])

    const playerObj= galaxies.filter(galaxy=>(galaxy.id===number))
    const dealerObj= galaxies.filter(galaxy=>(galaxy.id===dealerNumber))

    function winLoseOrDraw(){
        if(number>dealerNumber){
            setPlayerPoints(playerPoints=>playerPoints+1)
        }else if(number<dealerNumber){
            setDealerPoints(dealerPoints=>dealerPoints+1)
        }else(setDraws(draws=>draws+1))
    }
    
    return (
        <div>
            <NavBar />
                <Routes>
                    <Route path="/about" element={<About />}/>
                    <Route path="/galaxies" element={<GalaxyContainer galaxies={galaxies} />}/>
                    <Route path='/' element={<Home winLoseOrDraw={winLoseOrDraw} sides={sides} dealerObj={dealerObj} setDealerNumber={setDealerNumber} playerObj={playerObj} number={number} setNumber={setNumber} dealerPoints={dealerPoints} playerPoints={playerPoints} draws={draws}/>} />
                    <Route path="/form" element={<Form setGalaxies={setGalaxies} sides={sides} setSides={setSides}/>}/>
                </Routes>
            
        </div>
    );
}

export default App;
