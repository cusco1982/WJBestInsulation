import React, { Component } from "react";
import Card from "../components/Card";


class Contacts extends Component {

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }


  render() {
    const { status } = this.state;
    return (
      <div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />


        <div className="row">


          <div className="left col-md-6">
            <div style={{ marginLeft: 'calc((100%-980px)* 0.5)' }}>

              <h1>Contact Us</h1> <br />
              <form
                onSubmit={this.submitForm}
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
                <label>Subject:</label>
                <br />
                <input class='form-control' type="text" name="subject" />
                <br />
                <label>Message:</label>
                <br />
                <input class='form-control' type="textarea" name="message" />
                <br />
                <br />
                {/* <br/>
                <label>Your file:</label>
                <input type="file" name="upload" /> */}
                {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
              </form>
              
            </div>
          </div>


          <div className="right col-md-6" style={{ paddingLeft: '10%' }}>

            <div style={{ marginBottom: '60px' }}>
              <h1 style={{ marginBottom: '30px' }}>Head Office</h1>
              <p>2 Nora Rd</p>
              <p>Edison, NJ 08837</p>
            </div>

            <div>
              <p>
                WJBestInsulation@gmail.com
              </p>
              <p>
                Tel: 732-423-9671
              </p>
              <p>
                Fax: 123-456-7890
              </p>
            </div>

          </div>



        </div>





      </div>
    );
  }

}

export default Contacts;