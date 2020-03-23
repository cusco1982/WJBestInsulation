import React, { Component } from "react";
import Contact from "../components/Contact";
import API from "../utils/API"


class Contacts extends Component {


  // state = {
  //   fname: '',
  //   lname: '',
  //   email: '',
  //   phone: '',
  //   message: ''
  // }


  onSubmit = () => {
    // console.log(this.state);
    // const fname = this.state.fname;
    // const lname = this.state.lname;
    // const email = this.state.email;
    // const phone = this.state.phone;
    // const message = this.state.message;
    // API.contact({ fname: fname, lname: lname, email: email, phone: phone, message: message })
  }
  render() {
    return (

      <div>
        <div className="container col-md-7" style={{ marginTop: "30px", float: "left" }}>
          <div className="jumbotron form animated fadeInUp slow">
            <div className="contact-left">
              <br />
              <br />
              <br />
              <br />
              <h1 style={{ float: "center" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;
                {/* HAVE A PROJECT IN MIND? */}
              </h1>
              <br />
              <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {/* Questions about an upcoming project or need a quote? */}
                &nbsp;&nbsp;
                {/* We’d be glad to help! */}
              </h4>
              <br />
              {/* <Contact onChange={this.onChange} onSubmit={this.onSubmit} /> */}
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Contacts;