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

                    <form
                // onSubmit={this.submitForm}
                action="https://formspree.io/xjvolkon"
                method="POST"
              // enctype="multipart/form-data"
              >

                <label>Name:</label>
                {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <label>Company:</label> */}
                <br />
                <input class='form-control' type="text" name="name" />
                {/* <input type="text" name="company" />          */}
                <br />
                <label>Email:</label>
                {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <label>Phone:</label> */}
                <br />
                <input class='form-control' type="email" name="email" />
                {/* <input type="phone" name="phone" /> */}
                <br />
                <label>Message:</label>
                <br />
                <textarea class='form-control' type="textarea" name="message" />
                <br />
                <br />
                {/* <br/>
                <label>Your file:</label>
                <input type="file" name="upload" /> */}
                {/* {status === "SUCCESS" ? <p>Thanks!</p> :  */}
                <button>Submit</button>
                {/* {status === "ERROR" && <p>Ooops! There was an error.</p>} */}
              </form>




                    </div>

                </div>


            </div>


        </div>
    );
}

export default Footer;
