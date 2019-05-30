import React, { Component } from 'react';
import Link from 'next/link'
import Nav from '../components/Nav'
import Header from '../components/Header'

class CarGetAll extends Component {
  state = {
    car: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/v1/all-car-detail');
      const car = await res.json();
      this.setState({
        car
      });
    } catch (e) {
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Nav />

        <div className='container'>
          <div className="row">
            {this.state.car.map((rowData, i) => (
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
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CarGetAll;