import React from 'react'
import Dice from './Dice'
import PlayerCard from './PlayerCard'
import DealerCard from './DealerCard'

function Home({number, setNumber, playerObj, setDealerNumber, dealerObj}){
    const renderPlayerCard= playerObj.map(galaxy=><PlayerCard key={galaxy.id} galaxy={galaxy}/>)
    const renderDealerCard= dealerObj.map(galaxy=><DealerCard key={galaxy.id} galaxy={galaxy}/>)
    
    return (
        <div>
        {renderPlayerCard}
        <Dice  setDealerNumber={setDealerNumber} number={number} setNumber={setNumber} />
        {renderDealerCard}
        </div>
    )
}

export default Home