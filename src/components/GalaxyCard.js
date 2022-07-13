
function GalaxyCard({galaxy}){
    return(
        <li className="cards__item">
        <div className="card">
          <img
            style={{width:500, height:250}}
            src={galaxy.image}
            alt={galaxy.name}
            className="card__image"
          />
          <div className="card__content">
            <div className="card__title">{galaxy.name}</div>
            <p className="card__text">{galaxy.name}</p>
            <div className="card__detail">
              <p>{galaxy.distance}</p>
            </div>
          </div>
        </div>
      </li>
    )
}

export default GalaxyCard;