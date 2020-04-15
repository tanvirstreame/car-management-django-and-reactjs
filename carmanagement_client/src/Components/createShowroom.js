import React, { Component } from 'react';
import axios from 'axios';

class CreateShowRoomForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      name:'',
      registration_number:'',
      logo_type:'',
      contact_info:'',
      nameValid: false,
      registration_numberValid: false,
      logo_typeValid: false,
      contact_infoValid: false,
      formErrors: {
        name: '', 
        registration_number: '',
        logo_type: '',
        contact_info: ''},
      formValid: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })              
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    fetch('http://localhost:8000/api/v1/showroom/', {
      method: 'POST',
      body: data,
    }).then(
      function(response) {
        if (response.ok) {    
          alert('Showroom have been added!');
        }
        else {
          alert('Showroom have been not added!');
        }
      }
    )
    .catch(
      function(error) {
        alert('server error');
      }
    );
  }
  
  
  handleSelectValue() {
  if (this.refs.showroom){
    return(this.refs.showroom.value);
    }
  }

  render() {
    return(
            <div className="container">
              <div className="row">
                  <div className="col-md-8 offset-md-2">
                      <form className="formtop" id="CreateShowRoom" onSubmit={this.handleSubmit} method="post">
                          <h4 className="text-center">Create Showroom</h4>
                          <div className="row">
                              <div className="col-md-8 offset-md-2">
                                  <label>Show Name</label>
                                  <input type="text" className="form-control shadow-none" value={this.state.name} name="name" onChange={this.handleUserInput} />
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-8 offset-md-2">
                                  <label>Registration Number</label>
                                  <input type="text" className="form-control shadow-none" value={this.state.registration_number} name="registration_number" onChange={this.handleUserInput} />
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-8 offset-md-2">
                                  <label>Logo Type</label>
                                  <input type="text" className="form-control shadow-none" value={this.state.logo_type} name="logo_type" onChange={this.handleUserInput} />
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-8 offset-md-2">
                                  <label>Contact Detail</label>
                                  <input type="text" className="form-control shadow-none" value={this.state.contact_info} name="contact_info" onChange={this.handleUserInput} />
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-8 offset-md-2">
                                  <input type="submit" className="btn btn-info btn-block shadow-none" value="Create Show Room"/>
                              </div>
                          </div>
                          <div className="panel panel-default">
                              <div className="col-md-8 offset-md-2 text-danger">
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
            </div>
    );
  }
}

export default CreateShowRoomForm