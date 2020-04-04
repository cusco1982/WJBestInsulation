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


                    <div id="main">
                        <h1>something</h1>
                        <div class="content">
                            <p>You can press <kbd>▲</kbd> <kbd>▼</kbd> on your keyboard or swipe up/down to navigate. Mouse wheel works too.</p>
                            <p><a href="https://codepen.io/theseventh" target="_blank">codepen</a> // <a href="https://twitter.com/the_seventh_kek" target="_blank">twitter</a> // <a href="https://t.me/the_seventh" target="_blank">telegram</a></p>
                        </div>
                        <div class="buttons">
                            <button class="next" onclick="go(-1)"></button>
                            <button class="prev" onclick="go(1)"></button>
                        </div>
                    </div>



                </div>
                




            </div>
            
        );
        
    }
    
    
}

export default Services;