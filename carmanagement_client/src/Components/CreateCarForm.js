import React, { Component } from 'react';
import axios from 'axios';

var panelStyle = {
	'maxWidth': '80%',
	margin: '0 auto'
}
class CreateCarForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    fetch('http://localhost:8000/allcardetail/', {
      method: 'POST',
      body: data,
    });
     
    this.manufacture.value =''; 
    this.tagline.value ='';
    this.carModel.value =''; 
    this.mileage.value =''; 
    this.year.value ='';
    this.status .value ='';
    this.transmission .value ='';
    this.price.value ='';
    this.horsepower.value ='';
    this.propellant.value ='';
  }
  
  handleSelectValue() {
  if (this.refs.showroom) {
    return(this.refs.showroom.value);
    }
}

  render() {
    return(
        <div className="card">
            <div className="card-body">
                <div className="panel panel-primary" style={panelStyle}>
                    <div className="panel panel-heading">Car Record</div>
                    <div className="panel panel-body">
                        <form onSubmit={this.handleSubmit} method="post">
                            <strong>manufacture Name:</strong> <br /> <input type="text" ref={el => this.manufacture = el} name="manufacture" /> <br />
                            <strong>tagline</strong> <br /> <input type="text" ref={el => this.tagline= el} name="tagline"  /> <br />
                            <strong>carModel</strong> <br />  <input type="text" ref={el => this.carModel = el} name="carModel"  /> <br />
                            <strong>mileage</strong> <br /> <input type="text" ref={el => this.mileage = el} name="mileage"  /> <br />
                            <strong>year</strong> <br /> <input type="text" ref={el => this.year = el} name="year"  /> <br />
                            <strong>status</strong> <br /> <input type="text" ref={el => this.status = el} name="status"  /> <br />
                            <strong>transmission</strong> <br /> <input type="text" ref={el => this.transmission = el} name="transmission"  /> <br />
                            <strong>price</strong> <br /> <input type="text" ref={el => this.price= el} name="price"  /> <br />
                            <strong>horsepower</strong> <br /> <input type="text" ref={el => this.horsepower = el} name="horsepower"  /> <br />
                            <strong>propellant</strong> <br /> <input type="text" ref={el => this.propellant = el} name="propellant"  /> <br />
                            <input type="file" name="file" accept="image/*"></input>
                            <br/>
                            <br/>
                            <button type="submit" className="btn btn-primary">Create Car Record</button>
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

export default CreateCarForm 