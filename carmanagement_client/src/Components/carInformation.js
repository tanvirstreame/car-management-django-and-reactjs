import React, { Component } from 'react';
import axios from "axios";
import Dashboard from './dashboard';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Components/Styles/car-information.css";

class CarInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: [],
      image: [],
      showroom: [],
      expanded: false //begin with box closed
    }
  }
  showButton = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  componentDidMount() {
    axios.get(`car/api/v1/single-car-detail/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          car: response.data,
        })
      })


    axios.get(`/api/v1/single-car-image/?car=${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          image: response.data,
        })
      })
  }

  render() {
    let show = this.state.image.map((rowData, i) => {
      let carouselClass = (i === 0) ? "carousel-item active" : "carousel-item";
      return <div key={rowData.image} className={carouselClass}>
        <img src={rowData.image} className="d-block w-100" alt="..." />
      </div>
    })
    return (
      <Dashboard
        title="Car Info"
      >
        <div className='container card'>
          <div className="row mb-5">
            <div className="formtop" key={this.state.car.id}>
              <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  {show};
              </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              <div className="ml-4 mr-4">
              <div>
                <label><b>Car Id:</b></label>
                <span >{this.state.car.id}</span>
              </div>
              <div>
                <label><b>Car Mileage:</b></label>
                <span >{this.state.car.mileage}</span>
              </div>
              <div>
                <label><b>Year:</b></label>
                <span >{this.state.car.year}</span>
              </div>
              <div>
                <label><b>Status:</b></label>
                <span >{this.state.car.status === 0 ? "Sold" : "In Stock"}</span>
              </div>
              <div>
                <label><b>Transmission:</b></label>
                <span >{this.state.car.transmission === 0 ? "Manual" : "Automatic"}</span>
              </div>
              <div>
                <label><b>Price:</b></label>
                <span >{this.state.car.price}</span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </Dashboard>
    );
  }
}

export default CarInformation;