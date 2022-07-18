import React, { useState } from "react";
import "./Navbar.css";
import logo from "../images/logo.png";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [navWidth, setNavWidth] = useState(false);

  //we give sidenav a particular width so we can control it's css
  const setWidth = {
    width: "0",
  };

  // here we are using conditionals to control the style of the width of sidenav
  navWidth ? (setWidth.width = "250px") : (setWidth.width = "0");



  return (
    <>
      <div className="navbar">
        <div className="logo">
          <NavLink to="/">Career Lab</NavLink>
        </div>
        <div className="nav">
          {/* <NavLink to="/" className="a" activeClassName="active">
            Home
          </NavLink> */}
          <NavLink to="/js" className="a">
            JSS2-3(8th-9th)
          </NavLink>
          <NavLink to="/ss" className="a">
            SSS1-3(10th-12th)
          </NavLink>
          {/* <NavLink to="/graduate" className="a">
            GRADUATE
          </NavLink> */}
        </div>
        <div className="menu">
          <i className="fas fa-bars" onClick={() => setNavWidth(true)}></i>
        </div>
      </div>

      {/* mobile navbar */}
      <div id="mySidenav" className="sidenav" style={setWidth}>
        <a
          href="JavaScript:void(0)" 
          className="closebtn"
          onClick={() => setNavWidth(false)}
        >
          <i className="fas fa-times"></i>
        </a>
        {/* <Link to="/" onClick={() => setNavWidth(false)}>
          Home
        </Link> */}
        <Link to="/js" onClick={() => setNavWidth(false)}>
          JSS2-3(8th-9th)
        </Link>
        <Link to="/ss" onClick={() => setNavWidth(false)}>
          SSS1-3(10th-12th)
        </Link>
        {/* <Link to="/graduate" onClick={() => setNavWidth(false)}>
          GRADUATE
        </Link> */}
      </div>
    </>
  );
}

export default Navbar;
