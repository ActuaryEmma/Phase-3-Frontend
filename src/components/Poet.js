import React, { useState } from "react";
import "./App.css";
import EditPoet from "./EditPoet";
import poet1 from "../images/poet1.jpeg";
import poet2 from "../images/poet2.jpeg";
import PoetEdit from "./PoetEdit";

function Poet({ id, name, achievements, poempublication, poet, setPoet }) {
  
  return (
    <div
      className="card"
      style={{
        width: 15 + "rem",
        marginTop: 2 + "rem",
        marginRight: 2 + "rem",
      }}
    >
      <div>
        <img className="card-img-top" src={poet2} alt="poet" />
        <h5>Name: </h5>
        <p>{name}</p>
        <hr />

        <h5>Publications : </h5>
        <p>{poempublication}</p>
        <PoetEdit
          // onHandleUpdateComment={handleUpdateComment}
          // publicationBody={publicationBody}
          // setPublicationBody={setpublicationBody}
          // isHide={isHide}
          // setIsHide={setIsHide}
          // onHandleHide={handlehide}
        poempublication={poempublication}
          poet={poet}
          setPoet={setPoet}
          id={id}
        />
        <hr />

        <h5>Achievements: </h5>
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
