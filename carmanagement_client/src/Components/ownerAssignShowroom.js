import React, { Component } from 'react';
import axios from 'axios';

class OwnerAssignShowroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: [],
      showroom: [],
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

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch('http://localhost:8000/api/v1/owners-all-showroom/', {
      method: 'POST',
      body: data,
    }).then(
      function (response) {
        if (response.ok) {
          alert('Owner assigned to showroom!');
        }
        else {
          alert('Owner is not assigned to showroom!');
        }
      }).catch(
        function () {
          alert('server error');
        }
      );
  }

  handleSelectValue() {
    if (this.refs.showroom) {
      return (this.refs.showroom.value);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <form className="formtop" onSubmit={this.handleSubmit} method="post">
              <h4 className="text-center">Owner Assign Showroom</h4>
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
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default OwnerAssignShowroom