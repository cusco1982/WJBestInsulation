import React from "react";


function Contact(props) {
  return (

    <div className="container">




      <div className="myform">

        <div className="row">

          <div className="col-md">
            <label className="lable"> </label>
            <input className="form-control input" type="text" name="name" id="fname" placeholder=" Full Name" required onChange={props.onChange} />
          </div>

          <div className="col-md">
            <label className="lable1"> </label>
            <input className="form-control input" type="email" id="email" name="email" placeholder=" Email" required onChange={props.onChange} />
          </div>

        </div><br />


        <label class="lable1"> </label>
        <textarea class="form-control text" name="message" id="message" rows="3" cols="128" placeholder=" Tell us about your project, scope of work and timeline"

          required></textarea><br /><br />


        <button id="sendmail" class="btn btn-primary btn-lg btn-block" onClick={props.onSubmit}>Submit</button>
        
      </div>





      <div id="location">


      2nd col
      </div>






    </div>


  )
}


export default Contact;