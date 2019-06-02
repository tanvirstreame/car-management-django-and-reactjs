import { Component } from 'react'
import 'isomorphic-fetch'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import axios from 'axios';
class CreateCarForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      manufacture: '',
      tagline: '',
      car_model: '',
      mileage: '',
      year: '',
      status: '',
      transmission: '',
      price: '',
      horse_power: '',
      propellant: '',
      fileupload: '',
      formErrors: { manufacture: '', tagline: '', car_model: '', mileage: '', year: '', status: '', transmission: '', price: '', horse_power: '', propellant: '', fileupload: '', },
      manufacturevalid: false,
      taglinevalid: false,
      car_modelvalid: false,
      mileagevalid: false,
      yearvalid: false,
      statusvalid: false,
      transmissionvalid: false,
      pricevalid: false,
      horse_powervalid: false,
      propellantvalid: false,
      fileuploadvalid: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value },
      () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let manufacturevalid = this.state.manufacturevalid;
    let taglinevalid = this.state.taglinevalid;
    let car_modelvalid = this.state.car_modelvalid;
    let yearvalid = this.state.yearvalid;
    let statusvalid = this.state.statusvalid;
    let mileagevalid = this.state.mileagevalid;
    let transmissionvalid = this.state.transmissionvalid;
    let pricevalid = this.state.pricevalid;
    let horse_powervalid = this.state.horse_powervalid;
    let propellantvalid = this.state.propellantvalid;
    let fileuploadvalid = this.state.fileuploadvalid;
    switch (fieldName) {
      case 'manufacture':
        manufacturevalid = value.length !== 0;
        fieldValidationErrors.manufacture = manufacturevalid ? '' : 'can not be empty';
        break;
      case 'tagline':
        taglinevalid = value.length !== 0;
        fieldValidationErrors.tagline = taglinevalid ? '' : 'can not be empty';
        break;
      case 'car_model':
        car_modelvalid = value.length !== 0;
        fieldValidationErrors.car_model = car_modelvalid ? '' : 'can not be empty';
        break;
      case 'year':
        yearvalid = value.length !== 0;
        fieldValidationErrors.year = yearvalid ? '' : 'can not be empty';
        break;
      case 'status':
        statusvalid = value.length !== 0;
        fieldValidationErrors.status = statusvalid ? '' : 'can not be empty';
        break;
      case 'mileage':
        mileagevalid = value.length !== 0;
        fieldValidationErrors.mileage = mileagevalid ? '' : 'can not be empty';
        break;
      case 'transmission':
        transmissionvalid = value.length !== 0;
        fieldValidationErrors.transmission = transmissionvalid ? '' : 'can not be empty';
        break;
      case 'price':
        pricevalid = value.length !== 0;
        fieldValidationErrors.price = pricevalid ? '' : 'can not be empty';
        break;
      case 'horse_power':
        horse_powervalid = value.length !== 0;
        fieldValidationErrors.horse_power = horse_powervalid ? '' : 'can not be empty';
        break;
      case 'propellant':
        propellantvalid = value.length !== 0;
        fieldValidationErrors.propellant = propellantvalid ? '' : 'can not be empty';
        break;
      case 'fileupload':
        fileuploadvalid = value.length !== 0;
        fieldValidationErrors.fileupload = fileuploadvalid ? '' : 'can not be empty';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      manufacturevalid: manufacturevalid,
      taglinevalid: taglinevalid,
      car_modelvalid: car_modelvalid,
      yearvalid: yearvalid,
      statusvalid: statusvalid,
      mileagevalid: mileagevalid,
      transmissionvalid: transmissionvalid,
      pricevalid: pricevalid,
      horse_powervalid: horse_powervalid,
      propellantvalid: propellantvalid,
      fileuploadvalid: fileuploadvalid,
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.manufacturevalid && this.state.taglinevalid && this.state.car_modelvalid && this.state.yearvalid && this.state.mileagevalid && this.state.pricevalid && this.state.horse_powervalid && this.state.propellantvalid });
  }

  errorClass(error) {
    return (error.length === 0 ? '' : 'has-error');
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('http://localhost:8000/api/v1/createcar/', {
      method: 'POST',
      body: data,
    }).then(
      function (response) {
        if (response.ok) {
          alert('Car have been added!');
        }
        else {
          alert('Car have been not added!');
        }
      }
    )
    this.manufacture.value = '';
    this.tagline.value = '';
    this.car_model.value = '';
    this.mileage.value = '';
    this.year.value = '';
    this.status.value = '';
    this.transmission.value = '';
    this.price.value = '';
    this.horse_power.value = '';
    this.propellant.value = '';
  }

  handleSelectValue() {
    if (this.refs.showroom) {
      return (this.refs.showroom.value);
    }
  }

  render() {
    return (
      <div>
        <Header title={'Car Create'} />
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <form className="formtop" id="CreateCar" onSubmit={this.handleSubmit} method="post">
                <h4 className="text-center">Create Car</h4>
                <div className="row">
                  <div className="col-md-8 offset-md-2">
                    <label>Manufacture Name</label>
                    <input type="text" className="form-control shadow-none" ref={el => this.manufacture = el} name="manufacture" value={this.state.manufacture} onChange={this.handleUserInput} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8 offset-md-2">
                    <label>Tagline</label>
                    <input type="text" className="form-control shadow-none" ref={el => this.tagline = el} name="tagline" value={this.state.tagline} onChange={this.handleUserInput} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8 offset-md-2">
                    <label>Car Model</label>
                    <input type="text" className="form-control shadow-none" ref={el => this.car_model = el} name="car_model" value={this.state.car_model} onChange={this.handleUserInput} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8 offset-md-2">
                    <label>Mileage</label>
                    <input type="number" className="form-control shadow-none" ref={el => this.mileage = el} name="mileage" value={this.state.mileage} onChange={this.handleUserInput} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8 offset-md-2">
                    <label>Year</label>
                    <input type="number" className="form-control shadow-none" ref={el => this.year = el} name="year" value={this.state.year} onChange={this.handleUserInput} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8 offset-md-2">
                    <label>Status</label>
                    <select className="form-control" ref={el => this.status = el} name="status">
                      <option defaultValue="0" disabled>Choose here</option>
                      <option value='0'>Sold</option>
                      <option value='1'>In Stock</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8 offset-md-2">
                    <label>Transmission</label>
                    <select className="form-control" ref={el => this.transmission = el} name="transmission" >
                      <option value="0" disabled>Choose here</option>
                      <option value='0'>Manual</option>
                      <option value='1'>Automatic</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8 offset-md-2">
                    <label>Price</label>
                    <input type="number" className="form-control shadow-none" ref={el => this.price = el} name="price" value={this.state.price} onChange={this.handleUserInput} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8 offset-md-2">
                    <label>Horse Power</label>
                    <input type="number" className="form-control shadow-none" ref={el => this.horse_power = el} name="horse_power" value={this.state.horse_power} onChange={this.handleUserInput} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8 offset-md-2">
                    <label>Propellant</label>
                    <input type="text" className="form-control shadow-none" ref={el => this.propellant = el} name="propellant" value={this.state.propellant} onChange={this.handleUserInput} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8 offset-md-2">
                    <label>Upload File</label>
                    {/* <input type="file" className="form-control shadow-none" accept="image/*" name="image" multiple /> */}
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                      </div>
                      <div className="custom-file">
                        <input type="file" className="custom-file-input" accept="image/*" id="inputGroupFile01"
                          aria-describedby="inputGroupFileAddon01" name="image" multiple />
                        <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8 offset-md-2 formtop">
                    <input type="submit" className="btn btn-info btn-block shadow-none" value="Create Car" />
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="col-md-8 offset-md-2 text-danger">
                    {/* <FormErrors formErrors={this.state.formErrors} /> */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  inputChangeHandler(e) {
    let formFields = { ...this.state.formFields };
    formFields[e.target.name] = e.target.value;
    this.setState({
      formFields
    });
  }

  formHandler(formFields) {
    axios.post('/api/register', formFields)
      .then(function (response) {
      })
      .catch(function (error) {
      });
  }
}

export default CreateCarForm 