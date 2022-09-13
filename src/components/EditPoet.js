import React, {useState} from 'react'
import PoetEdit from './PoetEdit';

function EditPoet({poet, setPoet, id, achievements}){


   

    // ****************************************************************

    const[newObjPoet, setNewObjPoet] = useState({
        achievement: ""
       
     })

     
 
     function handleChange(event) {
         setNewObjPoet({ ...newObjPoet, [event.target.name]: event.target.value });
       }
     function handleSubmit(e){
         e.preventDefault();
         fetch("http://localhost:9292/poemauthor", {
         method: "POST",
         headers: {
             "Content-Type": "application/json",
         },
         body: JSON.stringify(newObjPoet)
     })
     .then((response) => response.json())
     .then((newData) => {
 

         let x = [...poet, newData]
         console.log(x)
         setPoet(x)
         console.log("Data")
         
     } 
 
    
     )
 
     setNewObjPoet({
        achievement: ""
     })
     }
   
    //  ****************************************************************
    function handleDelete(){

        fetch(`http://localhost:9292/poemauthor/${id}`, {
            method:  'DELETE'
        })
        .then((response) => response.json())
        .then(() => {
            console.log(poet)

    
            let editPoet = poet.filter((item ) => item.id !== id)
            setPoet(editPoet)
            console.log(id)
            console.log(editPoet)
    
        })

    }
   
    

    return(
        <div>
            
            <form onSubmit={handleSubmit}>
            <input type="text" name='major_achievements' value={newObjPoet.major_achievements} onChange={handleChange} />
            <button type="submit">Send</button>
            </form><br/>

            <button onClick={handleDelete}>Delete</button>
            
            
            

            
        </div>
    )
}
export default EditPoet
