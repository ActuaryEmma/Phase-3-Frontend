import React from "react";
import "./App.css";
import EditPoet from "./DeletePoet";
import poet2 from "../images/poet2.jpeg";
import PoetEdit from "./PoetEdit";

function Poet({ id, name, achievements, poempublication, poet, setPoet }) {
  return (
    <div
      className="card bg-dark text-white "
      style={{
        margin: 5 +"rem",
        marginRight: 10 + "rem",
        padding: 5 + "rem",
      }}
    >
      <div>
       
       
          <img
            className="card-img-top centre"
            style={{
              width: 20 + "rem",
            }}
            src={poet2}
            alt="poet"
          />
          <h5>Name: </h5>
          <p>{name}</p>
        

        <hr />

        <h5>Publications : </h5>
        <p>{poempublication}</p>
        <br />
        <PoetEdit
          poempublication={poempublication}
          poet={poet}
          setPoet={setPoet}
          id={id}
        />
        <hr />

        <h4>Achievements: </h4>
        <p>{achievements}</p>
        <EditPoet
          poet={poet}
          setPoet={setPoet}
          id={id}
          achievements={achievements}
        />
      </div>
    </div>
  );
}
export default Poet;
