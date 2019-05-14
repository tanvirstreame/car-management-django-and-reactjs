import React, { Component } from 'react';
import axios from 'axios';

class CarAssignShowroom extends Component {
  constructor(props) {
    super(props);
    this.state={
      car:[],
      showroom:[],
  }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    var self = this;
    fetch('http://localhost:8000/all-car-detail/')
    .then(function (res){
        return res.json();
    })
    .then(function(data){
        self.setState({
            car:data,
        })
    })
  
    fetch('http://localhost:8000/showroom/')
    .then(function (res){
        return res.json();
    })
    .then(function(data){
        self.setState({
          showroom:data,
        })
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch('http://localhost:8000/showroom-all-car/', {
      method: 'POST',
      body: data,
    });  
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
                    <form className="formtop" onSubmit={this.handleSubmit} method="post">
                        <h4 className="text-center">Car Assign Showroom</h4>
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <label>Choose ShowRoom:</label>
                                <select className='form-control' name="showroom">
                                    <option value="" disabled>--Select Showroom--</option>
                                {this.state.showroom.map(item => (
                                    <option key={item.id} value={item.id}>{item.name} ( Id- {item.id} )</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <label>Choose Car:</label>
                                <select className='form-control' name="car">
                                    <option value="" disabled>--Select Car--</option>
                                {this.state.car.map(item => (
                                    <option key={item.id} value={item.id}>{item.manufacture} ( Id- {item.id} )</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <input type="submit" className="btn btn-info btn-block shadow-none" value="Assign"/>
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

export default CarAssignShowroom