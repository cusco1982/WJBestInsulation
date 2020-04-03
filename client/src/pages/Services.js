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
import domino from "../images/domino-factory.jpg"


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
            <div>


                    <img id="logo" alt="Logo" src={domino} style={{width:'100%', height:'630px'}} />


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
<!-- Slideshow container -->
<div class="slideshow-container">

  <!-- Full-width images with number and caption text -->
  <div class="mySlides fade">
    <div class="numbertext">1 / 3</div>
    <img src="img1.jpg" style="width:100%">
    <div class="text">Caption Text</div>
  </div>

  <div class="mySlides fade">
    <div class="numbertext">2 / 3</div>
    <img src="img2.jpg" style="width:100%">
    <div class="text">Caption Two</div>
  </div>

  <div class="mySlides fade">
    <div class="numbertext">3 / 3</div>
    <img src="img3.jpg" style="width:100%">
    <div class="text">Caption Three</div>
  </div>

  <!-- Next and previous buttons -->
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>
<br>

<!-- The dots/circles -->
<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span>
  <span class="dot" onclick="currentSlide(2)"></span>
  <span class="dot" onclick="currentSlide(3)"></span>
</div>                </div>

            </div>

        );
    }
}
export default Services;