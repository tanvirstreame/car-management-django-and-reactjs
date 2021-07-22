import React, { Component } from 'react';
import axios from 'axios';
import Dashboard from './dashboard';
import { blankValidtiaion } from "../validation/validations";
import swal  from "sweetalert";

class CreateShowRoomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: {
        name: '',
        registration_number: '',
        logo_type: '',
        contact_info: '',
      },
      formError: {
        name: '',
        registration_number: '',
        logo_type: '',
        contact_info: ''
      },
      status: {
        succuess: '',
        failed: ''
      }
    }

  }

  handleUserInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      formValue: {
        ...this.state.formValue,
        [name]: value,
      },
      formError: {
        ...this.state.formError,
        [name]: ""
      },
      status: {
        succuess: "",
        failed: ""
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let succuess = "";
    let failed = "";
    const { valid, error } = blankValidtiaion(this.state.formValue);
    console.log("valid", valid, error);

    if (valid) {

      axios.post('car/api/v1/showroom/', {
        ...this.state.formValue
      }).then(response => {
        if (response.status == 201) {
          succuess = "Inserted succesfully";
          this.setState({
            formValue: {
              name: '',
              registration_number: '',
              logo_type: '',
              contact_info: '',
            },
            status: {
              ...this.state.status,
              succuess,
            }
          })
          swal("", "Showroom added successfully", "success");
        }
        else {
          failed = "Operation failed";
          this.setState({
            status: {
              ...this.state.status,
              failed,
            }
          })
          swal("", "Showroom add failed", "error");
        }
      }
      )
        .catch(
          (error) => {
            failed = "Operation failed error message" + error;
            this.setState({
              status: {
                ...this.state.status,
                failed
              }

            })
            swal("", "Showroom add failed", "error");
          }
        );
    }
    if (!valid) {
      this.setState({

        status: {
          succuess,
          failed
        },
        formError: error

      })
    }
  }

  render() {
    return (
      <Dashboard
        title="Create Showroom"
      >
        <div className="container card">
          <div className="row  mb-5">
            <div className="col-md-12">
              <form className="formtop" id="CreateShowRoom" onSubmit={this.handleSubmit} method="post">
                <div className="row">
                  <div className="col-md-6">
                    <label>Show Name</label>
                    <input type="text" className="form-control shadow-none" value={this.state.formValue.name} name="name" onChange={this.handleUserInput} />
                    <span className="text-danger">{this.state.formError.name}</span>
                  </div>

                  <div className="col-md-6">
                    <label>Registration Number</label>
                    <input type="text" className="form-control shadow-none" value={this.state.formValue.registration_number} name="registration_number" onChange={this.handleUserInput} />
                    <span className="text-danger">{this.state.formError.registration_number}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Logo Type</label>
                    <input type="text" className="form-control shadow-none" value={this.state.formValue.logo_type} name="logo_type" onChange={this.handleUserInput} />
                    <span className="text-danger">{this.state.formError.logo_type}</span>
                  </div>
                  <div className="col-md-6">
                    <label>Contact Detail</label>
                    <input type="text" className="form-control shadow-none" value={this.state.formValue.contact_info} name="contact_info" onChange={this.handleUserInput} />
                    <span className="text-danger">{this.state.formError.contact_info}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <input type="submit" className="btn btn-primary btn-block shadow-none" value="Create Show Room" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Dashboard>
    );
  }
}

export default CreateShowRoomForm