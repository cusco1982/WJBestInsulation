import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.jpg";
import "./style.css";

window.onscroll = function() {
  var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  if (scrollTop >= document.getElementById("welcome-message").offsetTop) {
    document.getElementById("contnav").style.position = "fixed";
    document.getElementById("welcome-message").style.marginTop = "50px";
    document.getElementById("contnav").style.marginTop = "-50px";
  } else {
    document.getElementById("contnav").style.position = "static";
    document.getElementById("welcome-message").style.marginTop = "0px";
    document.getElementById("contnav").style.marginTop = "0px";
  }
}



function Nav() {
  return (
    <div className="container-fluid contnav" id="contnav">
    <div className="container">
<nav className="navbar navbar-expand-lg navbar-light navigator">

<Link className="navbar-brand navbrand animated slideInLeft slow" to="/">
  <img id="logo" className="d-inline-block img-fluid" alt="Logo" src={logo}/>
</Link>

<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav ml-auto mr-auto animated slideInRight slow">
    <li className="nav-item active">
      <Link className="nav-link" to="/">HOME</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/properties">PROPERTIES</Link>
    </li>

    {/* <li className="nav-item">
      <Link className="nav-link" to="/tenants">TENANTS</Link>
    </li> */}

    <li className="nav-item">
      <Link className="nav-link" to="/contact">Contact Us</Link>
    </li>
    
    <li className="nav-item">
        <Link className="nav-link" to="/tenants">LOGIN</Link>
    </li>

    <li className="nav-item">
        <Link className="nav-link" to="/projects">PROJECTS</Link>
    </li>

  </ul>
  </div>
  
</nav>
</div>
</div>
);
}

export default Nav;
