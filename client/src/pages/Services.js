import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
// import "./style.css";
import domino from "../images/domino-factory.jpg"




class Services extends Component {





    render() {

        
        return (
            <div>


                <img id="logo" alt="Logo" src={domino} style={{ width: '100%', height: '630px' }} />


                <div className="row services">
                    <ul>
                        {/* <h1>List of services</h1> */}
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </div>

                <div className="row2">


                image slider



                </div>
                




            </div>
            
        );
        
    }
    
    
}

export default Services;