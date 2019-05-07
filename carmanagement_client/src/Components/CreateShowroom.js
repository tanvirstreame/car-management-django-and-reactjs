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
    
    fetch('http://localhost:8000/ShowRoom/', {
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
        <div className="card">
            <div className="card-body">
                <div className="panel panel-primary" style={panelStyle}>
                    <div className="panel panel-heading">Create Showroom</div>
                    <div className="panel panel-body">
                        <form onSubmit={this.handleSubmit} method="post">
                            <strong>Name:</strong> <br /> <input type="text" ref={el => this.name= el} name="name" /> <br />
                            <strong>registrationNumber</strong> <br /> <input type="text" ref={el => this.registrationNumber= el} name="registrationNumber"  /> <br />
                            <strong>logoType</strong> <br />  <input type="text" ref={el => this.logoType = el} name="logoType"  /> <br />
                            <strong>contactInfo</strong> <br /> <input type="text" ref={el => this.contactInfo = el} name="contactInfo"  /> <br />
                            <br/>
                            <button type="submit" className="btn btn-primary">Create Show Room</button>
                            <br/>
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

export default CreateShowRoomForm