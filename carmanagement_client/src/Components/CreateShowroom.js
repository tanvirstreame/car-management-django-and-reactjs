import React, { Component } from 'react';
import axios from 'axios';

var panelStyle = {
	'maxWidth': '80%',
	margin: '0 auto'
}
class CreateShowRoomForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    fetch('http://localhost:8000/showroom/', {
      method: 'POST',
      body: data,
    });
     
    this.name.value =''; 
    this.registrationNumber.value ='';
    this.logoType.value =''; 
    this.contactInfo.value =''; 
    
  }
  
  handleSelectValue() {
  if (this.refs.showroom){
    return(this.refs.showroom.value);
    }
  }

  render() {
    return(
            <div class="container">
              <div class="row">
                  <div class="col-md-8 offset-md-2">
                      <form id="CreateShowRoom" onSubmit={this.handleSubmit} method="post">
                          <h4 class="text-center">Create Showroom</h4>
                          <div class="row">
                              <div class="col-md-8 offset-md-2">
                                  <label>Show Name</label>
                                  <input type="text" class="form-control shadow-none" ref={el => this.name= el} name="name"/>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-md-8 offset-md-2">
                                  <label>Registration Number</label>
                                  <input type="text" class="form-control shadow-none" ref={el => this.registrationNumber= el} name="registrationNumber" />
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-md-8 offset-md-2">
                                  <label>Logo Type</label>
                                  <input type="text" class="form-control shadow-none" ref={el => this.logoType = el} name="logoType"/>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-md-8 offset-md-2">
                                  <label>Contact Detail</label>
                                  <input type="text" class="form-control shadow-none" ref={el => this.contactInfo = el} name="contactInfo"/>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-md-8 offset-md-2">
                                  <input type="submit" class="btn btn-info btn-block shadow-none" value="Create Show Room"/>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
            </div>
    );
  }

  inputChangeHandler(e) {
   let formFields = {...this.state.formFields};
   formFields[e.target.name] = e.target.value;
   this.setState({
    formFields
   });
  }

  formHandler(formFields) {
   axios.post('/api/register', formFields)
     .then(function(response){
       console.log(response);
       //Perform action based on response
   })
     .catch(function(error){
       console.log(error);
       //Perform action based on error
     });
  }
}

export default CreateShowRoomForm