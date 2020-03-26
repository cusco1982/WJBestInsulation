import React, { Component } from "react";


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



      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xjvolkon"
        method="POST"
      // enctype="multipart/form-data"
      >
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <label>Email:</label>
        <input type="email" name="email" />

        <label>Message:</label>
        <input type="text" name="message" />

        {/* <br/>
        <label>Your file:</label>
        <input type="file" name="upload" /> */}

        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }
  
}

export default Contacts;