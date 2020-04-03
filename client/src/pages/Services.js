import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
// import "./style.css";
import domino from "../images/domino-factory.jpg"
import "../css/index.js";



class Services extends Component {





    render() {

        
        return (
            <div>


                <img id="logo" alt="Logo" src={domino} style={{ width: '100%', height: '630px' }} />


                <div className="row services">
                    <ul>
                        <h1>List of services</h1>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </div>

                <div className="row2">


                    {/* <!-- Slideshow container --> */}
                    <div class="slideshow-container">
                        {/* <!-- Full-width images with number and caption text --> */}
                        <div class="mySlides fade">
                            <div class="numbertext">
                                1 / 3
                            </div>
                            {/* <img src="img1.jpg" style="width:100%"> */}
                            <img id="logo" alt="Logo" src={domino} style={{ width: '100%' }} />
                            <div class="text">
                                Caption Text
                                </div>
                        </div>


                        <div class="mySlides fade">
                            <div class="numbertext">
                                2 / 3
                                </div>
                            {/* <img src="img2.jpg" style="width:100%"> */}
                            <img id="logo" alt="Logo" src={domino} style={{ width: '100%' }} />
                            <div class="text">
                                Caption Two
                                </div>
                        </div>


                        <div class="mySlides fade">
                            <div class="numbertext">
                                3 / 3
                                </div>
                            {/* <img src="img3.jpg" style="width:100%"> */}
                            <img id="logo" alt="Logo" src={domino} style={{ width: '100%' }} />
                            <div class="text">
                                Caption Three
                                </div>
                        </div>

                        {/* <!-- Next and previous buttons --> */}
                        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                        <a class="next" onclick="plusSlides(1)">&#10095;</a>
                    </div>
                    <br />

                    {/* <!-- The dots/circles --> */}
                    <div style={{ textAlign: "center" }}>
                        <span class="dot" onclick="currentSlide(1)"></span>
                        <span class="dot" onclick="currentSlide(2)"></span>
                        <span class="dot" onclick="currentSlide(3)"></span>
                    </div>




                </div>




            </div>
        );
    }
}
export default Services;