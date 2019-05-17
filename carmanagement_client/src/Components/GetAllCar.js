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
            {this.state.car.map((rowData,i)=> (
              <Link key={rowData.id} className="linkelement"  to={`/getcarinfo/${rowData.id}`}>
                <div className="card">
                  <div className="card-body">
                    <h4 className="text-center">{rowData.name}</h4>
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                      <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                      </ol>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                        {
                          rowData.image_feild.slice(0,1).map((subRow,k)=>
                            <div key={subRow.image}>
                            <img src={'http://localhost:8000'+subRow.image} className="d-block w-100" alt="..."/>
                            </div>
                            )
                        }
                        </div>
                      </div>
                    </div>
                    <label><b>Id:</b></label>
                    <span>{rowData.id}</span>
                    <br/>
                    <label><b>Manufacture:</b></label>
                    <span>{rowData.manufacture}</span>
                    <br/>
                    <label><b>Mileage:</b></label>
                    <span>{rowData.mileage}</span>
                    <br/>
                    <label><b>Year:</b></label>
                    <span>{rowData.year}</span>
                    <br/>
                    <label><b>Status:</b></label>
                    <i className="fas fa-building"></i><span>{rowData.status===0 ? "Sold":"In Stock"}</span>
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