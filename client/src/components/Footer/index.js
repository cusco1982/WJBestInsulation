import React from "react";
import { Link } from "react-router-dom";
// import logo from "../../images/logo.jpg";
import "./style.css";



function Footer() {
    return (
        <div className="footer" id="footer">

            <div className="row">

                <div className='left col-md-6'>
                    <h3>GET IN TOUCH:</h3>
                    <p>Tel: 732-423-9671</p>
                    <p>Email: WJBestInsulation@gmail.com</p>
                </div>


                <div class='right col-md-6'>

                    <div className="row">

                    <div className="left col-md-6">
                    <label>Contact Us:</label>
                    </div>

                    <div className="right col-md-6">
                    <label htmlFor="textarea">Enter Your Message *</label>
                    </div>




                    </div>

                </div>


            </div>


        </div>
    );
}

export default Footer;
