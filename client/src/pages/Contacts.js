import React, { Component } from "react";
import Contact from "../components/Contact";
import API from "../utils/API"


class Contacts extends Component {

  
  state = {
    fname: '',
    lname: '',
    email: '',
    phone: '',
    message: ''
  }


  onSubmit = () => {
    const fname = this.state.fname;
    const lname = this.state.lname;
    const email = this.state.email;
    const phone = this.state.phone;
    const message = this.state.message;



    API.contact({ fname: fname, lname: lname, email: email, phone: phone, message: message })
  }
  render() {
    return (
      <div className="row">

        <div className="container col-md-8" style={{ marginTop: "30px" }}>
          <div className="jumbotron form animated fadeInUp slow">
            <div className="contact-left">
            <br/>
            <br/>
            <br/>
            <br/>

              <h1 styleName="text-align: center">HAVE A PROJECT IN MIND?</h1><br />
              <h4>Questions about an upcoming project or need a quote? We’d be glad to help.</h4><br />
              <Contact onChange={this.onChange} onSubmit={this.onSubmit} />
            </div>
          </div>
        </div>

        <div className="col-md-4" ><br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        2nd column

        

        </div>






      </div>

    )
  }
}

export default Contacts;