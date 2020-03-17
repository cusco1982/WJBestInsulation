import React from "react";


function Contact(props) {
  return (

    <div className="container">




      <div className="myform">

        <div className="row">

          <div className="col-md-3">
            <label className="lable"> </label>
            <input style={{height: "80px"}} className="form-control input" type="text" name="name" id="fname" placeholder=" First Name" required onChange={props.onChange} />
          </div>

          <div className="col-md-3">
            <label className="lable"> </label>
            <input style={{height: "80px"}} className="form-control input" type="text" name="name" id="fname" placeholder=" Last Name" required onChange={props.onChange} />
          </div>

          <div className="col-md-6">
            <label className="lable1"> </label>
            <input style={{height: "80px"}} className="form-control input" type="email" id="email" name="email" placeholder=" Email" required onChange={props.onChange} />
          </div>

        </div><br />


        <label class="lable1"> </label>
        <textarea style={{height: "400px"}} class="form-control text" name="message" id="message" rows="3" cols="128" placeholder=" Tell us about your project, scope of work and timeline"

          required></textarea><br /><br />


        <button style={{height: "70px", width:"140px"}} id="sendmail" class="btn btn-primary btn-lg btn-block" onClick={props.onSubmit}>Submit</button>


      </div>


    </div>


  )
}
export default Contact;
