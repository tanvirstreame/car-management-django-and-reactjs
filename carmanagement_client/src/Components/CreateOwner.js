import React, { Component } from 'react';
import axios from 'axios';

var panelStyle = {
	'max-width': '80%',
	margin: '0 auto'
}
class CreateOwner extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
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
    return(
            <div className="container">
              <div className="row">
                  <div className="col-md-8 offset-md-2">
                      <form id="CreateOwner" onSubmit={this.handleSubmit} method="post">
                          <h4 className="text-center">Create Owner</h4>
                          <div className="row">
                              <div className="col-md-8 offset-md-2">
                                  <label>User Name</label>
                                  <input type="text" className="form-control shadow-none" ref={el => this.Username = el} name="username" required/>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-8 offset-md-2">
                                  <label>Email</label>
                                  <input type="text" className="form-control shadow-none" ref={el => this.Email = el} name="email" required/>
                              </div>
                          </div>
                          <div class="row">
                              <div className="col-md-8 offset-md-2">
                                  <label>Password</label>
                                  <input type="text" className="form-control shadow-none" ref={el => this.Password= el} name="password" required/>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-8 offset-md-2">
                                  <input type="submit" className="btn btn-info btn-block shadow-none" value="Create Owner"/>
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