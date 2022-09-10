import React from 'react';
import "./App.css";
import poet1 from "../images/poet1.jpeg";
import poet2 from "../images/poet2.jpeg";

function Poet({id, name, achievements, poempublication}){
    return(
    <div className="card" style={{ width: 15 + "rem" }}>
        <div>
        <img  className="card-img-top" src={poet2} alt="poet"/>
        <h5>Name: </h5>
        <p>{name}</p>
        <h5>Publications : </h5>
        <p>{poempublication}</p>
        <h5>Achievements: </h5>
        <p>{achievements}</p>
        

        </div>
        
    </div>)
}
export default Poet;