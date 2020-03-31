import React from "react";
import { Link } from "react-router-dom";
// import logo from "../../images/logo.jpg";
import "./style.css";



function Footer() {
    return (
        <div className="footer" id="footer">

            <div className="row">

                <div className='left col-md-6'>
                    Hello
                </div>

                <div class='right col-md-6'>
                    <p>© 2019 WJ Best Insulation, LLC <a href="">Privacy Policy</a> | <a href="">Legal</a></p>
                </div>


            </div>


        </div>
    );
}

export default Footer;
