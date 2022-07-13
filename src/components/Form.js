import {useState, useEffect} from "react"


function Form(){
const [values, setValues] = useState({
    name:"",
    image:"",
    description:""
})

function handleSubmit(event){
    event.preventDefault()
    

}


const handleName = (event) => {
    setValues({...values, name: event.target.value})
}
const handleImage = (event) => {
    setValues({...values, image: event.target.value})
}

const handleDescription = (event) => {
    setValues({...values, description:event.target.value})
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
                onChange={handleDescription}
                value={values.description}
                className="form-field"
                placeholder="Description"
                name="galaxyDescription"/>
            </div>
            <input type="submit"/>
        </form>
        
    </div>
)


}

export default Form