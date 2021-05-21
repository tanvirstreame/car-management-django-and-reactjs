import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Login from "./login";
import "./Styles/home.scss"
import car1 from "./assets/car1.jpg";
import car2 from "./assets/car2.jpg";

class Home extends Component {
  render() {
    return (
      <div className="home-component">
        <div className="row home-header">
          <div className="col-md-7">
            <div className="h-100 d-flex justify-content-center align-items-center">
              <div>
                <h1 className="heading-message text-white">Create your showroom today!</h1>
                <h5 className="text-center home-motivation">Just sign in and manage your car</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            {this.props.children}
          </div>
          <div className="col-md-1">
          </div>
        </div>
        <div className="text-center heading-title">
          <h2 className="">Your dream cars showroom</h2>
        </div>
        <div className="row car-information-section">
          <div className="col-md-6">
            <img className="w-100 car-image" src={car1} />
          </div>
          <div className="col-md-6">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </div>
        </div>
        <div className="row car-information-section">
          <div className="col-md-6">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </div>
          <div className="col-md-6">
            <img className="w-100  car-image" src={car2} />
          </div>

        </div>
      </div>
    );
  }
}

export default Home;