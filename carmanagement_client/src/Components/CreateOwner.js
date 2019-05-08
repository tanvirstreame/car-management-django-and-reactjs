import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from "react-dom";

function validate(name, email, password) {
  
  const errors = [];

  if (name.length === 0) {
    errors.push("Name can't be empty");
  }

  if (email.length < 5) {
    errors.push("Email should be at least 5 charcters long");
  }
  if (email.split("").filter(x => x === "@").length !== 1) {
    errors.push("Email should contain a @");
  }
  if (email.indexOf(".") === -1) {
    errors.push("Email should contain at least one dot");
  }

  if (password.length < 6) {
    errors.push("Password should be at least 6 characters long");
  }

  return errors;
}

class CreateOwner extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    username:"",
    email:"",
    password:"",
    errors:[],
  };

  change=e=>{
    this.props.omChange({[e.target.name]:e.target.value});
    this.setState({[e.target.name]:e.target.value
    });
  };
  

  handleSubmit(event) {
    event.preventDefault();
    const name = ReactDOM.findDOMNode(this.Username).value;
    const email = ReactDOM.findDOMNode(this.Email).value;
    const password = ReactDOM.findDOMNode(this.Password).value;
    const errors = validate(name, email, password);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }
    const data = new FormData(event.target);
    fetch('http://localhost:8000/showroomowner/', {
      method: 'POST',
      body: data,
    });
     this.Username.value ='';
     this.Email.value = '';
     this.Password.value = '';
  }

  render() {
    const { errors } = this.state;
    return(
            <div className="container">
              <div className="row">
                  <div className="col-md-8 offset-md-2">
                      <form id="CreateOwner" onSubmit={this.handleSubmit} method="post">
                          <h4 className="text-center">Create Owner</h4>
                          <div className="row">
                              <div className="col-md-8 offset-md-2">
                                  <label>User Name</label>
                                  <input type="text" className="form-control shadow-none" ref={el => this.Username = el} name="username"/>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-8 offset-md-2">
                                  <label>Email</label>
                                  <input type="text" className="form-control shadow-none" ref={el => this.Email = el} name="email"/>
                              </div>
                          </div>
                          <div class="row">
                              <div className="col-md-8 offset-md-2">
                                  <label>Password</label>
                                  <input type="text" className="form-control shadow-none" ref={el => this.Password= el} name="password"/>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-8 offset-md-2">
                                  <input type="submit" className="btn btn-info btn-block shadow-none" value="Create Owner"/>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-8 offset-md-2">
                              {errors.map(error => (
                                <p className="text-danger" key={error}>Error: {error}</p>
                              ))}
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