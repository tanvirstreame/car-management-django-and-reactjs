import React, { Component } from 'react';
import axios from 'axios';
import Dashboard from './dashboard';
import { blankValidtiaion } from "../validation/validations";

class CreateOwner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: {
        username: '',
        email: '',
        password: '',
      },
      formErrors: {
        username: '',
        email: '',
        password: ''
      },
      status: {
        succeed: '',
        failed: ''
      }

    };
  }

  handleUserInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      formValue: {
        ...this.state.formValue,
        [name]: value,
      },
      formErrors: {
        ...this.state.formErrors,
        [name]: ""
      },
      status: {
        succeed: "",
        failed: ""
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let succeed = "";
    let failed = "";
    const { valid, error } = blankValidtiaion(this.state.formValue);
    if (valid) {

      axios.post('/api/v1/showroomowner/', {
        ...this.state.formValue
      }).then(response => {
        console.log("response", response);

        if (response.status == 201) {
          succeed = "Inserted succesfully";
          this.setState({
            formValue: {
              username: "",
              email: '',
              password: ''
            },
            status: {
              ...this.state.status,
              succeed,
            }
          })
        }
        else {
          failed = "Operation failed";
          this.setState({
            status: {
              ...this.state.status,
              failed,
            }
          })
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
          }
        );

    }

    if (!valid) {
      this.setState({
        status: {
          succeed,
          failed
        },
        formErrors: error

      })
    }

  }

  render() {
    return (
      <Dashboard
        title="Create Owner"
      >
        <div className="container card shadow">
          <div className="row  mb-5">
            <div className="col-md-12">
              <form className="formtop" id="CreateOwner" >
                <div className="row">
                  <div className="col-md-6">
                    <label>User Name</label>
                    <input type="text" className="form-control shadow-none" name="username" value={this.state.formValue.username} onChange={this.handleUserInput} />
                    <span className="text-danger">{this.state.formErrors.username}</span>
                  </div>
                  <div className="col-md-6">
                    <label>Email</label>
                    <input type="text" className="form-control shadow-none" name="email" value={this.state.formValue.email} onChange={this.handleUserInput} />
                    <span className="text-danger">{this.state.formErrors.email}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Password</label>
                    <input type="text" className="form-control shadow-none" name="password" value={this.state.formValue.password} onChange={this.handleUserInput} />
                    <span className="text-danger">{this.state.formErrors.password}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2">
                    <input type="button" onClick={event => this.handleSubmit(event)} className="btn btn-info btn-block shadow-none" value="Create Owner" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8mt-2">
                    <span className="text-success">{this.state.status.succeed}</span>
                    <span className="text-danger">{this.state.status.failed}</span>
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

export default CreateOwner 