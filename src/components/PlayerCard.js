function PlayerCard({galaxy}){
    
    return(
        <div id="playerCard">
        <li className="ards__item">
        <div className="ard">
          <img
            style={{width:500, height:250}}
            src={galaxy.image}
            alt={galaxy.name}
            className="ard__image"
          />
          <div className="ard__content">
            <div className="ard__title">{galaxy.name}</div>
            <p className="ard__text">{galaxy.contents}</p>
            <p>Power Level:{galaxy.powerLevel}</p>
            <div className="ard__detail">
              <p>{galaxy.distance}</p>
            </div>
            <h1 id="headerPlayerForCard">Your Card</h1>
          </div>
        </div>
      </li>
      </div>
    )
    
}

export default PlayerCard;