import React, { Component } from 'react';
import axios from 'axios';

var panelStyle = {
	'maxWidth': '80%',
	margin: '0 auto'
}
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
    fetch('http://localhost:8000/allcardetail/')
    .then(function (res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        self.setState({
            car:data,
        })
    })
  
    fetch('http://localhost:8000/showroom/')
    .then(function (res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        self.setState({
          showroom:data,
        })
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch('http://localhost:8000/carassigntoshowroom/', {
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
        <div className="card">
          <div className="card-body">
            <div className="panel panel-primary" style={panelStyle}>
              <div className="panel panel-heading">Car Assign Showroom</div>
              <div className="panel panel-body">
                <form onSubmit={this.handleSubmit} method="post">
                  <strong>Choose Car:</strong>
                  <br/>
                  <select name="car">
                  {this.state.car.map(item => (
                      <option value={item.id}>{item.manufacture}({item.id})</option>
                      ))}
                  </select>
                  <br/>
                  <strong>Choose ShowRoom:</strong>
                  <br/>
                  <select name="showroom">
                  {this.state.showroom.map(item => (
                      <option value={item.id}>{item.name}({item.id})</option>
                      ))}
                  </select>
                  <br/>
                  <button type="submit" className="btn btn-primary">Assign</button>
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

export default CarAssignShowroom