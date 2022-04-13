import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div style={{fontSize:"1.2rem"}}>
        <Link to="/">ʍմӀէì-Ƒօɾʍ</Link>
      </div>
      <div>
        <Link to="/firstpage">First Page</Link>
        <Link to="/secondpage">Second Page</Link>
        <Link to="/user">User Details</Link>
      </div>
    </div>
  );
}

export default Navbar;
