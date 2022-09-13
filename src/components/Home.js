import React from 'react';
import home from "../images/home.jpg";
import {useNavigate} from "react-router-dom"


function Home() {
    const history = useNavigate();

    function handleClick(path){
        history(path)
    }

  return (
    <div style={{ backgroundColor: "black"}}>
      <div className="container position-relative  d-flex justify-content-around align-items-center ">
        <img
          src={home}
          id="homepage"
          className="img-fluid "
          style={{ margin: `${50}px` }}
          alt="homepage"
        />
        <div>
          <h1 className="text-warning">
            POETRY IS THE BEST WAY TO SPREAD LOVE
          </h1>
          <br />
          <div>
            <button onClick = {() => handleClick("/poetry")}>LEARN MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
