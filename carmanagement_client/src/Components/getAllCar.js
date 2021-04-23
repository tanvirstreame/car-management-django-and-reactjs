import React, { Component } from 'react';
import axios from 'axios';
import Dashboard from './dashboard';
import './Styles/GetAllCar.css'
import { Link } from 'react-router-dom'

class CarGetAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: []
    };
  }

  componentDidMount() {
    axios.get('car/api/v1/all-car-detail').then(
      response => {
        this.setState({
          car: response.data
        });
      }

    )
  }

  render() {
    return (
      <Dashboard
        title="Car List"
      >
        <div className='container card  mb-5'>
          <div className="row">
            {this.state.car.length > 0 ?
            this.state.car && this.state.car.map((rowData, i) => (
              <Link key={rowData.id} className="linkelement" to={`/getcarinfo/${rowData.id}`}>
                <div className="card">
                  <div className="card-body">
                    <h4 className="text-center">{rowData.name}</h4>
                    <div className="carousel-inner">
                      {rowData.image_feild.map((subRow, k) =>
                        (k === 0) ?
                          <div key={subRow.image} className="carousel-item active">
                            <img src={subRow.image} className="" alt="..." />
                          </div> :
                          <div key={subRow.image} className="carousel-item">
                            <img src={subRow.image} className="" alt="..." />
                          </div>
                      )}
                    </div>
                    <label><b>Id:</b></label>
                    <span>{rowData.id}</span>
                    <br />
                    <label><b>Manufacture:</b></label>
                    <span>{rowData.manufacture}</span>
                    <br />
                    <label><b>Mileage:</b></label>
                    <span>{rowData.mileage}</span>
                    <br />
                    <label><b>Year:</b></label>
                    <span>{rowData.year}</span>
                    <br />
                    <label><b>Status:</b></label>
                    <i className="fas fa-building"></i><span>{rowData.status === 0 ? "Sold" : "In Stock"}</span>
                  </div>
                </div>
              </Link>
            )) : <div className="text-center w-100 mt-3"><p className="pb-3">No Data</p></div>}
          </div>
        </div>
      </Dashboard>
    );
  }
}

export default CarGetAll;