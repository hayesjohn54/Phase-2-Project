import React from 'react'
import Dice from './Dice'
import PlayerCard from './PlayerCard'
import DealerCard from './DealerCard'

function Home({number,winLoseOrDraw, setNumber, playerObj, setDealerNumber, dealerObj, sides, setSides, dealerPoints, playerPoints, draws}){
    const renderPlayerCard= playerObj.map(galaxy=><PlayerCard key={galaxy.id} galaxy={galaxy}/>)
    const renderDealerCard= dealerObj.map(galaxy=><DealerCard key={galaxy.id} galaxy={galaxy}/>)
    
    return (
        <div>
        {renderPlayerCard}
        <Dice winLoseOrDraw={winLoseOrDraw} setSides={setSides} sides={sides} setDealerNumber={setDealerNumber} number={number} setNumber={setNumber} />
        {renderDealerCard}
        <div className='scoreBoard'>
        <h1>ScoreBoard</h1>
        <p>Dealer: {dealerPoints}</p>
        <p>Player:{playerPoints}</p>
        <p>Draws:{draws}</p>
        </div>
        </div>
    )
}

export default Home