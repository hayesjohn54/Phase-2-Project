import GalaxyCard from "./GalaxyCard"

function GalaxyContainer({galaxies}){
    const renderGalaxies= galaxies.map(galaxy=><GalaxyCard key={galaxy.id} galaxy={galaxy}/>)
return(
    <div>
        {renderGalaxies}
    </div>
)
}

export default GalaxyContainer;