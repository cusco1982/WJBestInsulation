import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/navlogo.png";
import "./style.css";
import logosmiley from "../../images/logosmiley.png"





function Nav() {
  return (

    <div className="container-fluid contnav" id="contnav">
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-light navigator" >

          <Link style={{ paddingTop: '15px', paddingLeft:'10%' }} className="navbar-brand navbrand animated slideInLeft slow" to="/">
            <img id="logo" className="d-inline-block img-fluid" alt="Logo" src={logosmiley} style={{ height: '30%', width: '30%' }} />
          </Link>

          <Link style={{ paddingTop: '30px', fontSize:'250%' }} className="navbar-brand navbrand animated slideInLeft slow" to="/">
            {/* <img id="logo" className="d-inline-block img-fluid" alt="Logo" src={logo} style={{ height: "20px" }} /> */}
            WJ Best Insulation
          </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div style={{ paddingTop: '40px' }} className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mr-auto animated slideInRight slow">

              <li className="nav-item active">
                <Link style={{fontSize:'130%'}} className="nav-link" to="/">HOME</Link>
              </li> &nbsp;&nbsp;&nbsp;&nbsp;

              <li className="nav-item">
                <Link style={{fontSize:'130%'}} className="nav-link" to="/services">SERVICES</Link>
              </li> &nbsp;&nbsp;&nbsp;&nbsp;

              {/* <li className="nav-item">
                <Link className="nav-link" to="/properties">PROPERTIES</Link>
              </li> */}

              {/* <li className="nav-item">
                <Link className="nav-link" to="/tenants">TENANTS</Link>
              </li> */}

              {/* <li className="nav-item">
                <Link className="nav-link" to="/tenants">LOGIN</Link>
              </li> */}

              {/* <li className="nav-item">
                <Link className="nav-link" to="/projects">PROJECTS</Link>
              </li> */}

              <li className="nav-item">
                <Link style={{fontSize:'130%'}} className="nav-link" to="/projects">PROJECTS</Link>
              </li> &nbsp;&nbsp;&nbsp;&nbsp;

              <li className="nav-item">
                <Link style={{fontSize:'130%'}} className="nav-link" to="/contact">CONTACT US</Link>
              </li>

            </ul>
          </div>

        </nav>
      </div>
    </div>
  );
}

export default Nav;
