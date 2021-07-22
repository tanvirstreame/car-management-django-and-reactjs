import React, { Component } from 'react';
import axios from 'axios';
import Dashboard from './dashboard';
import swal from "sweetalert";

class CarAssignShowroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: [],
      showroom: [],
      status: {
        succeed: "",
        failed: ""
      }
    }
  }
  componentDidMount() {
    axios.get('car/api/v1/all-car-detail/')
      .then(response => {
        this.setState({
          car: response.data,
        })
      })


    axios.get('car/api/v1/showroom/')
      .then(response => {
        this.setState({
          showroom: response.data,
        })
      })
  }

  onSelectChange = (event) => {
    this.setState({
      status: {
        succeed: "",
        failed: ""
      }
    })

  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch('car/api/v1/showroom-all-car/', {
      method: 'POST',
      body: data,
    }).then(
      response => {
        if (response.status==201) {
          this.setState({
            status: {
              ...this.state.status,
              succeed: "Assigned successfully"
            }
          })
          swal("", "Car assigned  successfully", "success");
        }
        else {
          this.setState({
            status: {
              ...this.state.status,
              failed: "Operation failed"
            }
          })
          swal("", "Car assigned failed", "error");
        }
      })
  }

  render() {
    return (
      <Dashboard
        title="Car Assign Showroom"
      >
        <div className="container card">
          <div className="row mb-5">
            <div className="col-md-12">
              <form className="formtop" onSubmit={this.handleSubmit} method="post">
                <div className="row">
                  <div className="col-md-6">
                    <label>Choose ShowRoom:</label>
                    <select className='form-control' name="showroom" onChange={event=>{this.onSelectChange(event)}}>
                      <option value="" disabled>--Select Showroom--</option>
                      {this.state.showroom.map(item => (
                        <option key={item.id} value={item.id}>{item.name} | Id- {item.id}</option>
                      ))}
                    </select>
                  </div>
                
                  <div className="col-md-6">
                    <label>Choose Car:</label>
                    <select className='form-control' name="car" onChange={event=>{this.onSelectChange(event)}}>
                      <option value="" disabled>--Select Car--</option>
                      {this.state.car.map(item => (
                        <option key={item.id} value={item.id}>{item.manufacture} | Id- {item.id} | Manufacturer- {item.manufacture}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2">
                    <input type="submit" className="btn btn-primary btn-block shadow-none" value="Assign" />
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

export default CarAssignShowroom