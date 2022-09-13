import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-light " >
      <div>
      <ul className="nav justify-content-center">
      <li>
        <Link className="nav-link" to="/home">Home</Link>
      </li>
      <li>
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li>
        <Link className="nav-link" to="/poetry">Poetry Blogs</Link>
      </li>
      <li>
        <Link className="nav-link" to="/profile">Profiles</Link>
      </li>
      <li>
        <Link className="nav-link" to="/contact">Contact</Link>
      </li>
      </ul>
      </div>
    </nav>
    
  );
}
export default NavBar;