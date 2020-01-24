import React, { Component } from "react";
import CardMain from "../components/CardMain";
import ProjectCard from "../components/ProjectCard";
// import video from "../images/video.mp4";
import image1 from '../images/wj/duct-before-fullview.jpg';
import image2 from '../images/wj/1.JPG';
import image3 from '../images/wj/duct-finish-rightcorner.JPEG';
// import image4 from '../images/wj/duct1after.PNG';
// import image5 from '../images/wj/duct1before.PNG';
// import image6 from '../images/wj/duct2after.PNG';
// import image7 from '../images/wj/duct2before.PNG';
import image8 from '../images/wj/hallway-overhead.JPG';
import image9 from '../images/wj/hospital-bare-cornerlongview.jpg';
import image10 from '../images/wj/hospital-bare-farsideview.jpg';
import image11 from '../images/wj/hospital-bare-fullview.jpg';
import image12 from '../images/wj/hospital-bare-longview.jpg';
// import image13 from '../images/wj/';
// import image14 from '../images/wj/';
// import image15 from '../images/wj/';
// import image16 from '../images/wj/';
// import image17 from '../images/wj/';
// import image18 from '../images/wj/';
// import image19 from '../images/wj/';
// import image20 from '../images/wj/';





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
      image: image8,
      title: "New Appartment"
    },//{
      // image: image5,                     <----img 4,5,6,7 need editing
      // title: "New Appartment"
    // }, {
      // image: image6,
      // title: "New Appartment"
    // }, {
      // image: image7,
      // title: "New Appartment"
    // }, {
      // image: image4,
      // title: "New Appartment"
    // }, 
    {
      image: image9,
      title: "New Appartment"
    }, {
      image: image10,
      title: "New Appartment"
    }, {
      image: image11,
      title: "New Appartment"
    },{
      image: image12,
      title: "New Appartment"
    }])
}
}



class Projects extends Component {
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


        {/* <div className="row1">

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

        </div> */}
        <br /><br />
        <br />
        <br />
        
        <br /><br />
        <br /><br />
        <br />


        <div className="project-header" id="project-header">
          <h1 className=" animated fadeInUp delay-1s" style={{textAlign:"center"}}><strong>OUR WORK</strong></h1><br/>        <br />
          <p className=" animated fadeInUp delay-1s" style={{textAlign:"center", fontSize:"20px"}}> New York Insulation has completed over 20,000 projects for private and public sector clients; helping <br/>
             restore some of New York City’s most prominent landmarks. <br/><br/>        <br /><br />

        </p>
        </div>


        <div className="row">

          {this.state.appartments.map(appartment => {
            return <ProjectCard image={appartment.image} title={appartment.title} open={this.open} />

          })}

        </div>

      </div>

    );
  }
}
export default Projects;