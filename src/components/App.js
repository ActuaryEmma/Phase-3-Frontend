import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar";



function App() {
 

  return (
    <Router>

      <div>
        <NavBar />
      </div>

      <Routes>
        <Route exact path="/home" element={<Home/>}></Route>
        {/* <Route exact path="/about" element={<About />}></Route>
         <Route exact path="/poetry" element={<Poetry poem={poem} setPoem={setPoem} commentData={commentData} setCommentData={setCommentData}/>}></Route> */}
        {/* <Route exact path="/profile" element={<Profile/>}></Route>  */}
        {/* <Route exact path="/contact" element={<Contact/>}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;