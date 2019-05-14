import React, { Component } from 'react';
import axios from 'axios';

class OwnerAssignShowroom extends Component {
  constructor(props) {
    super(props);
    this.state={
      owner:[],
      showroom:[],
  }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    var self = this;
    fetch('http://localhost:8000/showroomowner/')
    .then(function (res){
        return res.json();
    })
    .then(function(data){
        self.setState({
            owner:data,
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
    fetch('http://localhost:8000/owners-all-showroom/', {
      method: 'POST',
      body: data,
    }).then(
      function(response) {
        if (response.ok) {    
          alert('Owner assigned to showroom!');
        }
        else {
          alert('Owner is not assigned to showroom!');
        }
      }).catch(
        function() {
          alert('server error');
        }
      );
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
                        <h4 className="text-center">Owner Assign Showroom</h4>
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <label>Choose Owner:</label>
                                <select className="form-control" name="showroom_owner">
                                    <option value="" disabled>--Select Owner--</option>
                                {this.state.owner.map(item => (
                                    <option key={item.id} value={item.id}>{item.username} ( Id- {item.id} )</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <label>Choose ShowRoom:</label>
                                <select className="form-control" name="showroom">
                                    <option value="" disabled>--Select Showroom--</option>
                                {this.state.showroom.map(item => (
                                    <option key={item.id} value={item.id}>{item.name} ( Id- {item.id} )</option>
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

export default OwnerAssignShowroom