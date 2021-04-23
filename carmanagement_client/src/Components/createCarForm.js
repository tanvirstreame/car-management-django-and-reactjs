import React, { Component } from 'react';
import axios from 'axios';
import Dashboard from './dashboard';
import swal from 'sweetalert';

class CreateCarForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      manufacture: '',
      tagline: '',
      car_model: '',
      mileage: '',
      year: '',
      status: '',
      transmission: '',
      price: '',
      horse_power: '',
      propellant: '',
      fileupload: '',
      formErrors: {
        manufacture: '',
        tagline: '',
        car_model: '',
        mileage: '',
        year: '',
        status: '',
        transmission: '',
        price: '',
        horse_power: '',
        propellant: '',
        fileupload: '',
      },
      status: {
        succeed: "",
        failed: "",
      }
    };

  }

  handleUserInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }


  handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('car/api/v1/createcar/', {
      method: 'POST',
      body: data,
    }).then(
      (response) => {
        if (response.status == 201) {
          this.setState({
            manufacture: '',
            tagline: '',
            car_model: '',
            mileage: '',
            year: '',
            status: '',
            transmission: '',
            price: '',
            horse_power: '',
            propellant: '',
            fileupload: '',
            status: {
              succeed: "Inserted Successfully",
              failed: ""
            }
          })


        }
        else {
          this.setState({
            status: {
              succeed: "",
              failed: "Operation failed"
            }
          })
          swal("", "Operation failed", "error");
        }

      }
    ).catch(error => {
      this.setState({
        status: {
          succeed: "",
          failed: "Operation failed"
        }
      })
      swal("", "Operation failed", "error");
    })
  }



  render() {
    return (
      <Dashboard
        title="Create Car"
      >
        <div className="container card shadow">
          <div className="row  mb-5">
            <div className="col-md-12">
              <form className="formtop" id="CreateCar" onSubmit={this.handleSubmit} method="post">
                <div className="row">
                  <div className="col-md-6">
                    <label>Manufacture Name</label>
                    <input type="text" className="form-control shadow-none" name="manufacture" value={this.state.manufacture} onChange={this.handleUserInput} />
                  </div>

                  <div className="col-md-6">
                    <label>Tagline</label>
                    <input type="text" className="form-control shadow-none" name="tagline" value={this.state.tagline} onChange={this.handleUserInput} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Car Model</label>
                    <input type="text" className="form-control shadow-none" name="car_model" value={this.state.car_model} onChange={this.handleUserInput} />
                  </div>

                  <div className="col-md-6">
                    <label>Mileage</label>
                    <input type="number" className="form-control shadow-none" name="mileage" value={this.state.mileage} onChange={this.handleUserInput} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Year</label>
                    <input type="number" className="form-control shadow-none" name="year" value={this.state.year} onChange={this.handleUserInput} />
                  </div>
                  <div className="col-md-6">
                    <label>Status</label>
                    <select className="form-control" name="status">
                      <option defaultValue="0" disabled>Choose here</option>
                      <option value='0'>Sold</option>
                      <option value='1'>In Stock</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Transmission</label>
                    <select className="form-control" ref={el => this.transmission = el} name="transmission" >
                      <option value="0" disabled>Choose here</option>
                      <option value='0'>Manual</option>
                      <option value='1'>Automatic</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label>Price</label>
                    <input type="number" className="form-control shadow-none" name="price" value={this.state.price} onChange={this.handleUserInput} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Horse Power</label>
                    <input type="number" className="form-control shadow-none" name="horse_power" value={this.state.horse_power} onChange={this.handleUserInput} />
                  </div>
                  <div className="col-md-6">
                    <label>Propellant</label>
                    <input type="text" className="form-control shadow-none" name="propellant" value={this.state.propellant} onChange={this.handleUserInput} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Upload File</label>
                    <input type="file" className="form-control shadow-none" accept="image/*" name="image" multiple />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2">
                    <input type="submit" className="btn btn-info btn-block shadow-none" value="Create Car" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8 mt-2">
                    <span className="text-success">{this.state.status.succeed}</span>
                    <span className="text-danger">{this.state.status.failed}</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Dashboard>
    );
  }
}

export default CreateCarForm 
