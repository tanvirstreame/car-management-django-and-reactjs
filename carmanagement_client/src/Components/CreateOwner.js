import React, { Component } from 'react';
import axios from 'axios';
import { FormErrors } from './FormErrors';

class CreateOwner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:"",
      email:"",
      password:"",
      formErrors: {username:'',email: '', password: ''},
      usernamevalid:false,
      emailValid: false,
      passwordValid: false,
      formValid: false
    
    };
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
    let usernameValid = this.state.usernameValid;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'username':
        usernameValid= value.length !== 0;
        fieldValidationErrors.username = usernameValid ? '': 'can not be empty';
        break;
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length !== 0;
        fieldValidationErrors.password= passwordValid ? '': 'can not be empty';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    usernameValid: usernameValid,
                    emailValid : emailValid ,
                    passwordValid:passwordValid,
                  }, this.validateForm);
  }


  validateForm() {
    this.setState({formValid: this.state.usernameValid && this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }


  handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    fetch('http://localhost:8000/api/v1/showroomowner/', {
      method: 'POST',
      body: data,
    }).then(
      function(response) {
        if (response.ok) {    
         
          alert('Owner have been added!');
        }
        else {
          alert('Owner have been not added!');
        }
      }
    )
    .catch(
      function(error) {
        alert(error);
      }
    );
    this.Username.value ='';
    this.Email.value = '';
    this.Password.value = ''; 
  }

  render() {
    return(
            <div className="container">
              <div className="row">
                  <div className="col-md-8 offset-md-2">
                      <form className="formtop" id="CreateOwner" onSubmit={this.handleSubmit} method="post">
                          <h4 className="text-center">Create Owner</h4>
                          <div className="row">
                              <div className="col-md-8 offset-md-2">
                                  <label>User Name</label>
                                  <input type="text" className="form-control shadow-none" ref={el => this.Username = el} name="username"  value={this.state.username} onChange={this.handleUserInput}/>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-8 offset-md-2">
                                  <label>Email</label>
                                  <input type="text" className="form-control shadow-none" ref={el => this.Email = el} name="email"  value={this.state.email} onChange={this.handleUserInput}/>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-8 offset-md-2">
                                  <label>Password</label>
                                  <input type="text" className="form-control shadow-none" ref={el => this.Password= el} name="password"  value={this.state.password} onChange={this.handleUserInput}/>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-8 offset-md-2">
                                  <input type="submit" className="btn btn-info btn-block shadow-none" value="Create Owner"  disabled={!this.state.formValid}/>
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

export default CreateOwner 