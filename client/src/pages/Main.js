import React, { Component } from "react";
import CardMain from "../components/CardMain";
import video from "../images/video.mp4";
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import "../css/style.css";
// import "./style.css";



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

            <div id="company-info">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquam exercitationem unde totam officia numquam natus quam quos quia, eius dignissimos atque velit. Repellat, vero enim officia odit culpa est a aspernatur voluptas alias, harum magni dolorum cumque optio velit mollitia facere tenetur illum rerum ratione ut recusandae, reiciendis ullam asperiores quidem. Velit aliquid labore dolores, expedita nobis, explicabo fuga facere autem, deserunt magnam debitis iure eaque saepe voluptatem ad adipisci delectus. Exercitationem nobis minus mollitia excepturi ab velit corrupti eius. Praesentium modi aliquid libero maxime doloribus suscipit tenetur enim fugit, molestiae neque in ab soluta unde nihil magnam numquam quam dolor deleniti necessitatibus molestias placeat magni labore voluptatem eos. Voluptas adipisci ex placeat temporibus blanditiis, recusandae, modi, doloribus est tenetur incidunt a dolores fugit aliquam consequatur consectetur sunt id mollitia? Voluptatem culpa illo ea? Eos excepturi sequi expedita sit fuga accusamus porro perspiciatis distinctio quia ex quod eum assumenda esse voluptatibus dolorem dolorum quas, nulla soluta maiores. Voluptatum sunt, ea amet necessitatibus voluptatibus vero natus nihil temporibus error ab quam inventore vitae laborum suscipit quasi delectus aperiam eligendi eos cumque. Laudantium cupiditate officiis quidem nobis aut, minima ducimus temporibus harum libero sit dolor accusantium assumenda ipsum, voluptates ipsa modi?
            </p>
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



        <div className="row justify-content-center">

          {this.state.appartments.map(appartment => {
            return <CardMain image={appartment.image} title={appartment.title} open={this.open} />

          })}

        </div>


      </div>

    );
  }
}
export default Main;