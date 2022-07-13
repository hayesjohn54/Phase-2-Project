import {useState, useEffect} from "react"


function Form({setSides, sides, setGalaxies}){
const [values, setValues] = useState({
    name:"",
    image:"",
    distance:"",
    contents:"",
    powerLevel: ""
})

function handleSubmit(event){
    event.preventDefault()
    setGalaxies(galaxies=>[...galaxies,values])
    setSides(sides=>sides+1)
    fetch('http://localhost:3000/galaxies',{
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(values)
    })
    .then(data => {
        if (!data.ok) {
          throw Error(data.status);
         }
         return data.json();
        }).then(update => {
        console.log(update);
        }).catch(e => {
        console.log(e);
        })}

console.log(sides)


const handleName = (event) => {
    setValues({...values, name: event.target.value})
}
const handleImage = (event) => {
    setValues({...values, image: event.target.value})
}

const handleDistance = (event) => {
    setValues({...values, distance:event.target.value})
}
const handlePowerLevel = (event) => {
    setValues({...values, powerLevel:event.target.value})
}
const handleContents = (event) => {
    setValues({...values, contents:event.target.value})
}
return(
    <div className="form-container">
        <header className="galaxyHeader">Galactic Conquest</header>
        
        <form className="galaxy-form" onSubmit={handleSubmit}>
           <div className="nameBox"> <input
                onChange={handleName}
                value={values.name}
                className="form-field"
                placeholder="Name"
                name="galaxyName" />
            </div>
            <div className="imageBox">
            <input  
                onChange={handleImage}
                value={values.image}
                className="form-field"
                placeholder="Image"
                name="galaxyImage" />
            </div>
            <div className="descriptionBox">
            <input 
                onChange={handleDistance}
                value={values.distance}
                className="distance"
                placeholder="Distance"
                name="galaxyDistance"/>
            </div>
            <div>
            <input 
                onChange={handlePowerLevel}
                value={values.powerLevel}
                className="powerLevel"
                placeholder="powerLevel"
                name="galaxypowerLevel"/>
            </div>
            <div>
            <input 
                onChange={handleContents}
                value={values.contents}
                className="contents"
                placeholder="contents"
                name="galaxycontents"/>
            </div>
            <input type="submit"/>
        </form>
        
    </div>
)


}

export default Form