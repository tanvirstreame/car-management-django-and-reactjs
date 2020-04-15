import React, { Component } from 'react';
import axios from 'axios';

class CreateOwner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:"",
      email:"",
      password:"",
      formErrors: {
        username:'',
        email: '', 
        password: ''
      },
  
    };
  }
  

  handleUserInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }


  handleSubmit = (event) =>{
    event.preventDefault();

    const data = new FormData(event.target);
    fetch('http://localhost:8000/api/v1/showroomowner/', {
      method: 'POST',
      body: data,
    }).then( response => {
      this.setState({
        username: "",
        email: '', 
        password: ''

      })
        if (response.ok) {    
         
          alert('Owner have been added!');
        }
        else {
          alert('Owner have been not added!');
        }
      }
    )
    .catch(
      (error)=> {
        alert(error);
      }
    );

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
                                  <input type="text" className="form-control shadow-none" name="username"  value={this.state.username} onChange={this.handleUserInput}/>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-8 offset-md-2">
                                  <label>Email</label>
                                  <input type="text" className="form-control shadow-none" name="email"  value={this.state.email} onChange={this.handleUserInput}/>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-8 offset-md-2">
                                  <label>Password</label>
                                  <input type="text" className="form-control shadow-none" name="password"  value={this.state.password} onChange={this.handleUserInput}/>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-8 offset-md-2">
                                  <input type="submit" className="btn btn-info btn-block shadow-none" value="Create Owner" />
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

export default CreateOwner 