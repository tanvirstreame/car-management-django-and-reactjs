import React, { Component } from 'react';
import axios from 'axios';
import { FormErrors } from './FormErrors';

class CreateShowRoomForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      name:'',
      registrationNumber:'',
      logoType:'',
      contactInfo:'',
      nameValid: false,
      registrationNumberValid: false,
      logoTypeValid: false,
      contactInfoValid: false,
      formErrors: {name: '', registrationNumber: '',logoType: '',contactInfo: ''},
      formValid: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let registrationNumberValid = this.state.registrationNumberValid;
    let logoTypeValid = this.state.logoTypeValid;
    let contactInfoValid = this.state.contactInfoValid;


    switch(fieldName) {
      case 'name':
        nameValid = value.length != 0;
        fieldValidationErrors.name = nameValid ? '': 'can not be empty';
        break;
      case 'logoType':
        logoTypeValid = value.length != 0;
        fieldValidationErrors.logoType = logoTypeValid ? '': 'can not be empty';
        break;
      case 'contactInfo':
        contactInfoValid = value.length != 0;
        fieldValidationErrors.contactInfo = contactInfoValid ? '': 'can not be empty';
        break;
      case 'registrationNumber':
        registrationNumberValid = value.length >= 6;
        fieldValidationErrors.registrationNumber = registrationNumberValid ? '': 'is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    nameValid: nameValid,
                    registrationNumberValid : registrationNumberValid ,
                    logoTypeValid:logoTypeValid,
                    contactInfoValid:contactInfoValid,
                  }, this.validateForm);
  }


  validateForm() {
    this.setState({formValid: this.state.nameValid && this.state.registrationNumberValid && this.state.logoTypeValid && this.state.contactInfoValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
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
                                  <input type="text" class="form-control shadow-none" ref={el => this.name= el} value={this.state.name} name="name" onChange={this.handleUserInput} />
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-md-8 offset-md-2">
                                  <label>Registration Number</label>
                                  <input type="text" class="form-control shadow-none"  ref={el => this.registrationNumber= el} value={this.state.registrationNumber} name="registrationNumber" onChange={this.handleUserInput} />
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-md-8 offset-md-2">
                                  <label>Logo Type</label>
                                  <input type="text" class="form-control shadow-none" ref={el => this.logoType = el} value={this.state.logoType} name="logoType" onChange={this.handleUserInput} />
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-md-8 offset-md-2">
                                  <label>Contact Detail</label>
                                  <input type="text" class="form-control shadow-none" ref={el => this.contactInfo = el} value={this.state.contactInfo} name="contactInfo" onChange={this.handleUserInput} />
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-md-8 offset-md-2">
                                  <input type="submit" class="btn btn-info btn-block shadow-none" value="Create Show Room" disabled={!this.state.formValid}/>
                              </div>
                          </div>
                          <div className="panel panel-default">
                              <div class="col-md-8 offset-md-2 text-danger">
                                  <FormErrors formErrors={this.state.formErrors} />
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