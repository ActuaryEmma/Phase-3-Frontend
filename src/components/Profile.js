import React, {useEffect, useState} from 'react';
import Poet from "./Poet"
import "./App.css";

function Profile(){
    const[poet, setPoet] = useState([])
    useEffect(() => {
        fetch("http://localhost:9292/poemauthor")
        .then((response) => response.json())
        .then((data) => setPoet(data))
    },[])
   
    return(
    <div className="poemcontainer">
        {poet.map((item) => {
            return(
                <Poet
                name={item.name}
                key={item.id}
                id={item.id}
                poempublication={item.publication}
                achievements={item.major_achievements}
                />
            )
        })}
    </div>)
}
export default Profile;