import React, { Component } from 'react';
import './Styles/GetAllCar.css'
import { Link } from 'react-router-dom'

class CarGetAll extends Component {
  state = {
    car: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/all-car-detail');
      const car = await res.json();
      this.setState({
        car
      });
    } catch (e) {
    }
  }

  render() {
    return (
      <div className='container'>
        <div className="row">
            {this.state.car.map(item => (
              <Link key={item.id} className="linkelement"  to={`/getcarinfo/${item.id}`}>
                <div className="card">
                  <div className="card-body">
                    <h4 className="text-center">{item.name}</h4>
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                      <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                      </ol>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img src={'http://localhost:8000'+item.image_feild['image'][0]} className="d-block w-100" alt="..."/>
                        </div>
                      </div>
                      {/* <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                      </a> */}
                    </div>
                    <label><b>Id:</b></label>
                    <span>{item.id}</span>
                    <br/>
                    <label><b>Manufacture:</b></label>
                    <span>{item.manufacture}</span>
                    <br/>
                    <label><b>Mileage:</b></label>
                    <span>{item.mileage}</span>
                    <br/>
                    <label><b>Year:</b></label>
                    <span>{item.year}</span>
                    <br/>
                    <label><b>Status:</b></label>
                    <i className="fas fa-building"></i><span>{item.status===0 ? "Sold":"In Stock"}</span>
                  </div>
                </div> 
              </Link>
            ))}
        </div>
      </div>
    );
  }
}

export default CarGetAll;