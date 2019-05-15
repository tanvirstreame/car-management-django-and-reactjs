import React, { Component } from 'react';
import axios from 'axios';
import { FormErrors } from './FormErrors';

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
      formErrors: {name: '', registration_number: '',logo_type: '',contact_info: ''},
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
    let registration_numberValid = this.state.registration_numberValid;
    let logo_typeValid = this.state.logo_typeValid;
    let contact_infoValid = this.state.contact_infoValid;


    switch(fieldName) {
      case 'name':
        nameValid = value.length !== 0;
        fieldValidationErrors.name = nameValid ? '': 'can not be empty';
        break;
      case 'logo_type':
        logo_typeValid = value.length !== 0;
        fieldValidationErrors.logo_type = logo_typeValid ? '': 'can not be empty';
        break;
      case 'contact_info':
        contact_infoValid = value.length !== 0;
        fieldValidationErrors.contact_info = contact_infoValid ? '': 'can not be empty';
        break;
      case 'registration_number':
        registration_numberValid = value.length >= 6;
        fieldValidationErrors.registration_number = registration_numberValid ? '': 'is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    nameValid: nameValid,
                    registration_numberValid : registration_numberValid ,
                    logo_typeValid:logo_typeValid,
                    contact_infoValid:contact_infoValid,
                  }, this.validateForm);
  }


  validateForm() {
    this.setState({formValid: this.state.nameValid && this.state.registration_numberValid && this.state.logo_typeValid && this.state.contact_infoValid});
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
  this.name.value =''; 
  this.registration_number.value ='';
  this.logo_type.value =''; 
  this.contact_info.value =''; 
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
                                  <input type="text" className="form-control shadow-none" ref={el => this.name= el} value={this.state.name} name="name" onChange={this.handleUserInput} />
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-8 offset-md-2">
                                  <label>Registration Number</label>
                                  <input type="text" className="form-control shadow-none"  ref={el => this.registration_number= el} value={this.state.registration_number} name="registration_number" onChange={this.handleUserInput} />
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-8 offset-md-2">
                                  <label>Logo Type</label>
                                  <input type="text" className="form-control shadow-none" ref={el => this.logo_type = el} value={this.state.logo_type} name="logo_type" onChange={this.handleUserInput} />
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-8 offset-md-2">
                                  <label>Contact Detail</label>
                                  <input type="text" className="form-control shadow-none" ref={el => this.contact_info = el} value={this.state.contact_info} name="contact_info" onChange={this.handleUserInput} />
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-8 offset-md-2">
                                  <input type="submit" className="btn btn-info btn-block shadow-none" value="Create Show Room" disabled={!this.state.formValid}/>
                              </div>
                          </div>
                          <div className="panel panel-default">
                              <div className="col-md-8 offset-md-2 text-danger">
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