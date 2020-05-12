import React, { Component } from 'react';
import axios from 'axios';
import Dashboard from './dashboard';
class OwnerAssignShowroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: [],
      showroom: [],
      status: {
        succeed: "",
        failed: ""
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    axios.get('http://localhost:8000/api/v1/showroomowner/')
      .then(response => {
        this.setState({
          owner: response.data,
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
    fetch('http://localhost:8000/api/v1/owners-all-showroom/', {
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
        }
        else {
          this.setState({
            status: {
              ...this.state.status,
              failed: "Operation failed"
            }
          })
        }
        }
      );
  }

  render() {
    return (
      <Dashboard
        title="Owner Assign Showroom"
      >
        <div className="container card">
          <div className="row  mb-5">
            <div className="col-md-8 offset-md-2">
              <form className="formtop" onSubmit={this.handleSubmit} method="post">
                <div className="row">
                  <div className="col-md-8 offset-md-2">
                    <label>Choose Owner:</label>
                    <select className="form-control" name="showroom_owner">
                      <option value="" disabled>--Select Owner--</option>
                      {this.state.owner.map(item => (
                        <option key={item.id} value={item.id}>{item.username} ( Id- {item.id} )</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8 offset-md-2">
                    <label>Choose ShowRoom:</label>
                    <select className="form-control" name="showroom">
                      <option value="" disabled>--Select Showroom--</option>
                      {this.state.showroom.map(item => (
                        <option key={item.id} value={item.id}>{item.name} ( Id- {item.id} )</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8 offset-md-2">
                    <input type="submit" className="btn btn-info btn-block shadow-none" value="Assign" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8 offset-md-2 mt-2">
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

export default OwnerAssignShowroom