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
    fetch('http://localhost:8000/ShowRoomOwner/', {
      method: 'POST',
      body: data,
    });
     this.Username.value ='';
     this.Email.value = '';
     this.Password.value = '';
  }

  render() {
    return(
        <div class="card">
            <div class="card-body">
                <div class="panel panel-primary" style={panelStyle}>
                    <div class="panel panel-heading">Create Owner</div>
                    <div class="panel panel-body">
                        <form onSubmit={this.handleSubmit} method="post">
                            <strong>Username:</strong> <br /> <input type="text" ref={el => this.Username = el} name="username" /> <br />
                            <strong>Email</strong> <br /> <input type="text" ref={el => this.Email = el} name="email"  /> <br />
                            <strong>Password</strong> <br />  <input type="text" ref={el => this.Password= el} name="password"  /> <br /><br/>
                            <button type="submit" class="btn btn-primary">Create Owner</button>
                        </form>
                    </div>
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