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
            <div className="container">
              <div className="row">
                  <div className="col-md-8 offset-md-2">
                      <form id="CreateCar" onSubmit={this.handleSubmit} method="post">
                          <h4 className="text-center">Create Car</h4>
                          <div className="row">
                              <div className="col-md-8 offset-md-2">
                                  <label>Manufacture Name</label>
                                  <input type="text" className="form-control shadow-none" ref={el => this.manufacture = el} name="manufacture"/>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-8 offset-md-2">
                                  <label>Tagline</label>
                                  <input type="text" className="form-control shadow-none" ref={el => this.tagline= el} name="tagline" />
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-8 offset-md-2">
                                  <label>Car Model</label>
                                  <input type="text" className="form-control shadow-none" ref={el => this.carModel = el} name="carModel"/>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-8 offset-md-2">
                                  <label>Mileage</label>
                                  <input type="text" className="form-control shadow-none" ref={el => this.mileage = el} name="mileage"/>
                              </div>
                          </div>
                          <div class="row">
                              <div className="col-md-8 offset-md-2">
                                  <label>Year</label>
                                  <input type="text" className="form-control shadow-none" ref={el => this.year = el} name="year"/>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-md-8 offset-md-2">
                                  <label>Status</label>
                                  <input type="text" className="form-control shadow-none" ref={el => this.status = el} name="status"/>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-md-8 offset-md-2">
                                  <label>Transmission</label>
                                  <input type="text" className="form-control shadow-none" ref={el => this.transmission = el} name="transmission"/>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-md-8 offset-md-2">
                                  <label>Price</label>
                                  <input type="text" className="form-control shadow-none" ref={el => this.price= el} name="price"/>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-md-8 offset-md-2">
                                  <label>Horsepower</label>
                                  <input type="text" className="form-control shadow-none" ref={el => this.horsepower = el} name="horsepower"/>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-md-8 offset-md-2">
                                  <label>Propellant</label>
                                  <input type="text" className="form-control shadow-none" ref={el => this.propellant = el} name="propellant"/>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-md-8 offset-md-2">
                                  <label>Upload File</label>
                                  <input type="file" className="form-control shadow-none" accept="image/*" name="file"/>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-md-8 offset-md-2">
                                  <input type="submit" className="btn btn-info btn-block shadow-none" value="Create Car"/>
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

export default CreateCarForm 