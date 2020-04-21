import React, { Component } from 'react';
import axios from 'axios';
import Dashboard from './dashboard';

class CreateShowRoomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue : {
        name: '',
        registration_number: '',
        logo_type: '',
        contact_info: '',
      },
      formErrors: {
        name: '',
        registration_number: '',
        logo_type: '',
        contact_info: ''
      },
      formValid: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      formValue: {
        ...this.state.formValue,
        [name]: value
      }
    })
  }

  

  handleSubmit(event) {
    event.preventDefault();

    console.log("this.state.formValue",this.state.formValue);



    axios({
      url: 'http://127.0.0.1:8000/graphql/',
      method: 'post',
      data: {
        query: `
          mutation {
            createShowroom(input: {
              name : "${this.state.formValue.name}" 
              registrationNumber : "${this.state.formValue.registration_number}"
              logoType : "${this.state.formValue.logo_type}"
              contactInfo : "${this.state.formValue.contact_info}"
          
          
          }) {
              showroom {
                name
                
              }
            }
          }
          `
      }
    }).then((response) => {
      if (response.status == 200) {
        alert('Showroom have been added!');
      }
      else {
        alert('Showroom have been not added!');
      }

    });
  }


  handleSelectValue() {
    if (this.refs.showroom) {
      return (this.refs.showroom.value);
    }
  }

  render() {
    return (
      <Dashboard
        title="Create Showroom"
      >
        <div className="container card">
          <div className="row  mb-5">
            <div className="col-md-8 offset-md-2">
              <form className="formtop" id="CreateShowRoom" onSubmit={this.handleSubmit} method="post">
                <div className="row">
                  <div className="col-md-8 offset-md-2">
                    <label>Show Name</label>
                    <input type="text" className="form-control shadow-none" value={this.state.formValue.name} name="name" onChange={e => this.handleUserInput(e)} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8 offset-md-2">
                    <label>Registration Number</label>
                    <input type="text" className="form-control shadow-none" value={this.state.formValue.registration_number} name="registration_number" onChange={e => this.handleUserInput(e)} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8 offset-md-2">
                    <label>Logo Type</label>
                    <input type="text" className="form-control shadow-none" value={this.state.formValue.logo_type} name="logo_type" onChange={e => this.handleUserInput(e)} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8 offset-md-2">
                    <label>Contact Detail</label>
                    <input type="text" className="form-control shadow-none" value={this.state.formValue.contact_info} name="contact_info" onChange={e => this.handleUserInput(e)} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8 offset-md-2">
                    <input type="submit" className="btn btn-info btn-block shadow-none" value="Create Show Room" />
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
      </Dashboard>
    );
  }
}

export default CreateShowRoomForm