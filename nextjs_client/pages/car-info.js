import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

export default class CarInformation extends React.Component {
  static  getInitialProps({ query }) {
    return fetch(`http://127.0.0.1:8000/api/v1/single-car-detail/${query.id}`).then(x => x.json())
  }
 
   
  render(){
    return (
    <div>
      <Header title={'Get Show Room'}/>
      <Navbar />
      <div className='container'>
        <div className="row">
          <div className="formtop" key={this.props.id}>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <img src={this.props.image_feild.image} className="d-block w-100" alt="..."/>
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
            <h4 className="text-center">Car Info</h4>
            <label><b>Car Id:</b></label>
            <span >{this.props.id}</span>
            <br/>
            <label><b>Car Mileage:</b></label>
            <span >{this.props.mileage}</span>
            <br/>
            <label><b>Year:</b></label>
            <span >{this.props.year}</span>
            <br/>
            <label><b>Status:</b></label>
            <span >{this.props.status===0 ? "Sold":"In Stock"}</span>
            <br/>
            <label><b>Transmission:</b></label>
            <span >{this.props.transmission ===0? "Manual":"Automatic"}</span>
            <br/>
            <label><b>Price:</b></label>
            <span >{this.props.price}</span>
            <br/>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

