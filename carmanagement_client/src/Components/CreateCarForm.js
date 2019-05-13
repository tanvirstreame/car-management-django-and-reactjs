import React, { Component } from 'react';
import axios from 'axios';
import { FormErrors } from './FormErrors';

class CreateCarForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        manufacture:'',
        tagline:'',
        carModel:'',
        mileage:'', 
        year:'',
        status:'',
        transmission:'',
        price:'',
        horsepower:'',
        propellant:'',
        fileupload:'',
        formErrors: { manufacture:'',tagline:'',carModel:'',mileage:'', year:'',status:'',transmission:'',price:'',horsepower:'',propellant:'',fileupload:'',},
        manufacturevalid:false,
        taglinevalid:false,
        carModelvalid:false,
        mileagevalid:false,
        yearvalid:false,
        statusvalid:false,
        transmissionvalid:false,
        pricevalid:false,
        horsepowervalid:false,
        propellantvalid:false,
        fileuploadvalid:false,
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
    let manufacturevalid = this.state.manufacturevalid;
    let taglinevalid = this.state.taglinevalid ;
    let carModelvalid = this.state.carModelvalid ;
    let yearvalid = this.state.yearvalid ;
    let statusvalid = this.state.statusvalid ;
    let mileagevalid = this.state.mileagevalid ;
    let transmissionvalid = this.state.transmissionvalid ;
    let pricevalid = this.state.pricevalid ;
    let horsepowervalid = this.state.horsepowervalid ;
    let propellantvalid = this.state.propellantvalid ;
    let fileuploadvalid = this.state.fileuploadvalid ;
    switch(fieldName) {
      case 'manufacture':
        manufacturevalid= value.length != 0;
        fieldValidationErrors.manufacture = manufacturevalid ? '': 'can not be empty';
        break;
      case 'tagline':
        taglinevalid= value.length != 0;
        fieldValidationErrors.tagline = taglinevalid ? '': 'can not be empty';
        break;
      case 'carModel':
        carModelvalid= value.length != 0;
        fieldValidationErrors.carModel = carModelvalid ? '': 'can not be empty';
        break;
      case 'year':
        yearvalid = value.length != 0;
        fieldValidationErrors.year= yearvalid ? '': 'can not be empty';
        break;
      case 'status':
        statusvalid = value.length != 0;
        fieldValidationErrors.status= statusvalid ? '': 'can not be empty';
        break;
      case 'mileage':
        mileagevalid = value.length != 0;
        fieldValidationErrors.mileage= mileagevalid ? '': 'can not be empty';
        break;
      case 'transmission':
        transmissionvalid = value.length != 0;
        fieldValidationErrors.transmission= transmissionvalid ? '': 'can not be empty';
        break;
      case 'price':
        pricevalid = value.length != 0;
        fieldValidationErrors.price= pricevalid ? '': 'can not be empty';
        break;
      case 'horsepower':
        horsepowervalid = value.length != 0;
        fieldValidationErrors.horsepower= horsepowervalid ? '': 'can not be empty';
        break;
      case 'propellant':
        propellantvalid = value.length != 0;
        fieldValidationErrors.propellant= propellantvalid ? '': 'can not be empty';
        break;
      case 'fileupload':
        fileuploadvalid = value.length != 0;
        fieldValidationErrors.fileupload= fileuploadvalid ? '': 'can not be empty';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    manufacturevalid : manufacturevalid,
                    taglinevalid : taglinevalid ,
                    carModelvalid : carModelvalid ,
                    yearvalid : yearvalid ,
                    statusvalid : statusvalid ,
                    mileagevalid : mileagevalid ,
                    transmissionvalid : transmissionvalid ,
                    pricevalid : pricevalid ,
                    horsepowervalid : horsepowervalid ,
                    propellantvalid : propellantvalid ,
                    fileuploadvalid:fileuploadvalid,
                  }, this.validateForm);
  }


  validateForm() {
    this.setState({formValid: this.state.manufacturevalid && this.state.taglinevalid && this.state.carModelvalid && this.state.yearvalid && this.state.statusvalid && this.state.mileagevalid && this.state.transmissionvalid && this.state.pricevalid && this.state.horsepowervalid && this.state.propellantvalid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
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
                                  <input type="text" className="form-control shadow-none" ref={el => this.manufacture = el} name="manufacture" value={this.state.manufacture} onChange={this.handleUserInput}/>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-8 offset-md-2">
                                  <label>Tagline</label>
                                  <input type="text" className="form-control shadow-none" ref={el => this.tagline= el} name="tagline" value={this.state.tagline} onChange={this.handleUserInput}/>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-8 offset-md-2">
                                  <label>Car Model</label>
                                  <input type="text" className="form-control shadow-none" ref={el => this.carModel = el} name="carModel" value={this.state.carModel} onChange={this.handleUserInput}/>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-8 offset-md-2">
                                  <label>Mileage</label>
                                  <input type="number" className="form-control shadow-none" ref={el => this.mileage = el} name="mileage" value={this.state.mileage} onChange={this.handleUserInput}/>
                              </div>
                          </div>
                          <div class="row">
                              <div className="col-md-8 offset-md-2">
                                  <label>Year</label>
                                  <input type="number" className="form-control shadow-none" ref={el => this.year = el} name="year" value={this.state.year} onChange={this.handleUserInput}/>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-md-8 offset-md-2">
                                  <label>Status</label>
                                  <input type="number" className="form-control shadow-none" ref={el => this.status = el} name="status" value={this.state.status} onChange={this.handleUserInput}/>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-md-8 offset-md-2">
                                  <label>Transmission</label>
                                  <input type="text" className="form-control shadow-none" ref={el => this.transmission = el} name="transmission" value={this.state.transmission} onChange={this.handleUserInput}/>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-md-8 offset-md-2">
                                  <label>Price</label>
                                  <input type="number" className="form-control shadow-none" ref={el => this.price= el} name="price" value={this.state.price} onChange={this.handleUserInput}/>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-md-8 offset-md-2">
                                  <label>Horsepower</label>
                                  <input type="number" className="form-control shadow-none" ref={el => this.horsepower = el} name="horsepower" value={this.state.horsepower} onChange={this.handleUserInput}/>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-md-8 offset-md-2">
                                  <label>Propellant</label>
                                  <input type="text" className="form-control shadow-none" ref={el => this.propellant = el} name="propellant" value={this.state.propellant} onChange={this.handleUserInput}/>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-md-8 offset-md-2">
                                  <label>Upload File</label>
                                  <input type="file" className="form-control shadow-none" accept="image/*" name="file" multiple/>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-md-8 offset-md-2">
                                  <input type="submit" className="btn btn-info btn-block shadow-none" value="Create Car" disabled={!this.state.formValid}/>
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

export default CreateCarForm 