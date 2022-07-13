import {useState, useEffect} from "react"


function Form(){
const [values, setValues] = useState({
    name:"",
    image:"",
    distance:""
})

function handleSubmit(event){
    event.preventDefault()
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

console.log(values)


const handleName = (event) => {
    setValues({...values, name: event.target.value})
}
const handleImage = (event) => {
    setValues({...values, image: event.target.value})
}

const handleDistance = (event) => {
    setValues({...values, distance:event.target.value})
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
            <input type="submit"/>
        </form>
        
    </div>
)


}

export default Form