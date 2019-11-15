import React, { Component } from "react";
import CardMain from "../components/CardMain";
import video from "../images/video.mp4";
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';


const API = {
  getAppart: () => {
    return ([{
      image: image1,
      title: "New Appartment"
    }, {
      image: image2,
      title: "New Appartment"
    }, {
      image: image3,
      title: "New Appartment"
    }, {
      image: image4,
      title: "New Appartment"
    }])
  }
}


{/* <script type="text/javascript"> */}
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollpos = window.pageYOffset;
  if(prevScrollpos > currentScrollpos) {
    document.getElementById("contnav").style.top="0";
  } else {
    document.getElementById("contnav").style.top="-140px";
  }
  prevScrollpos=currentScrollpos;
}
// </script>




class Main extends Component {
  state = {
    appartments: [],

  };

  open = () => {
    let path = `/Contact`;
    this.props.history.push(path);
  }

  close = (event) => {
    if (event) event.preventDefault();
    this.setState({ showModal: false });
  }

  componentDidMount() {
    this.loadAppart();
  }

  loadAppart = () => {
    // API.getAppart()
    // .then(res =>
    //   this.setState({ appartments: res.data })
    // )
    // .catch(err => console.log(err));

    const appartments = API.getAppart()

    this.setState({ appartments: appartments })

  };

  

  
  render() {
    return (
      <div>


        <div className="row1">

          <div className="container-fluid">
            <video autoPlay muted loop id="myVideo">
              <source src={video} type="video/mp4" />
            </video>

            <div className="row animated fadeInDown delay-1s" id="welcome-message">
              <div className="col-md-12 search">
                <h1 className="htitle">Welcome to Advanced Property Management</h1>
              </div>
            </div>
            <div className="content">
              <h3 className="hed3">Featured properties</h3>

              <div className="row justify-content-center">

                {this.state.appartments.map(appartment => {
                  return <CardMain image={appartment.image} title={appartment.title} open={this.open} />

                })}
              </div>
            </div>
          </div>

        </div>



        <div className="row2">

          {this.state.appartments.map(appartment => {
            return <CardMain image={appartment.image} title={appartment.title} open={this.open} />

          })}

        </div>


      </div>

    );
  }
}
export default Main;