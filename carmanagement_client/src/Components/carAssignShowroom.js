import React, { Component } from 'react';
import axios from 'axios';

class CarAssignShowroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: [],
      showroom: [],
    }

  }
  componentDidMount() {
    axios.get('http://localhost:8000/api/v1/all-car-detail/')
      .then(response => {
        this.setState({
          car: response.data,
        })
      })


    axios.get('http://localhost:8000/api/v1/showroom/')
      .then(response => {
        this.setState({
          showroom: response.data,
        })
      })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch('http://localhost:8000/api/v1/showroom-all-car/', {
      method: 'POST',
      body: data,
    }).then(
      function (response) {
        if (response.ok) {
          alert('Car assigned to showroom!');
        }
        else {
          alert('Car is not assigned to showroom!');
        }
      }).catch(
        function () {
          alert('server error');
        }
      );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <form className="formtop" onSubmit={this.handleSubmit} method="post">
              <h4 className="text-center">Car Assign Showroom</h4>
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <label>Choose ShowRoom:</label>
                  <select className='form-control' name="showroom">
                    <option value="" disabled>--Select Showroom--</option>
                    {this.state.showroom.map(item => (
                      <option key={item.id} value={item.id}>{item.name} ( Id- {item.id} )</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <label>Choose Car:</label>
                  <select className='form-control' name="car">
                    <option value="" disabled>--Select Car--</option>
                    {this.state.car.map(item => (
                      <option key={item.id} value={item.id}>{item.manufacture} ( Id- {item.id} )</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <input type="submit" className="btn btn-info btn-block shadow-none" value="Assign" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CarAssignShowroom