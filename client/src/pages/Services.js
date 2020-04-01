import React, { Component } from "react";
import {Link} from "react-router-dom";
// import CardMain from "../components/CardMain";
// import video from "../images/video.mp4";
// import image1 from '../images/1.jpg';
// import image2 from '../images/2.jpg';
// import image3 from '../images/3.jpg';
// import image4 from '../images/4.jpg';
// import "../css/style.css";
// import "./style.css";
import logosmiley from "../images/logosmiley.png"


// const API = {
//   getAppart: () => {
//     return ([{
//       image: image1,
//       title: "New Appartment"
//     }, {
//       image: image2,
//       title: "New Appartment"
//     }, {
//       image: image3,
//       title: "New Appartment"
//     }, {
//       image: image4,
//       title: "New Appartment"
//     }])
//   }
// }


class Services extends Component {
    // state = {
    //   appartments: [],

    // };

    // open = () => {
    //   let path = `/Contact`;
    //   this.props.history.push(path);
    // }

    // close = (event) => {
    //   if (event) event.preventDefault();
    //   this.setState({ showModal: false });
    // }

    // componentDidMount() {
    //   this.loadAppart();
    // }

    // loadAppart = () => {
    // API.getAppart()
    // .then(res =>
    //   this.setState({ appartments: res.data })
    // )
    // .catch(err => console.log(err));

    //   const appartments = API.getAppart()

    //   this.setState({ appartments: appartments })

    // };




    render() {
        return (
            <div style={{ paddingTop: '10%', paddingBottom: '18%' }}>

                <Link style={{ paddingTop: '15px', paddingLeft: '6.5%' }} className="navbar-brand navbrand animated slideInLeft slow" to="/">
                    <img id="logo" className="d-inline-block img-fluid" alt="Logo" src={logosmiley} style={{ height: '30%', width: '30%' }} />
                </Link>

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
                    images going by area located on bottom middle of screen
                </div>

            </div>

        );
    }
}
export default Services;