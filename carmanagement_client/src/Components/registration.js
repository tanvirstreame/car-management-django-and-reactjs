import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import "../Components/Styles/login.scss";
import Home from "../Components/home"

class Registration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formValue: {
                username: "",
                password: "",
                email: "",
            },
            formError: {
                username: false,
                password: false,
                email: false,
            }
        }
    }


    handleOnChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({

            formValue: {
                ...this.state.formValue,
                [name]: value,

            },
            formError: {
                ...this.state.formError,
                [name]: false,

            }
        })
    }

    handleSubmit = () => {
        let formError = {};
        let formData = this.state.formValue;
        let isValid = true;
        Object.keys(formData).forEach(key => {
            if (!formData[key]) {
                isValid = false;
                formError = {
                    ...formError,
                    [key]: true
                }
            }
        })
        if (!isValid) {
            this.setState({
                formError: {
                    ...this.state.formError,
                    ...formError
                }
            })
            return;
        }

        axios.post('/core/api/register/', {
            ...this.state.formValue
        })
            .then(response => {
                if (response.status == 200) {
                    this.props.history.push("/login");
                }
            })
    }

    render() {
        const { username, password, email } = this.state.formValue
        return (
            <Home>
                <div className="login-page">
                    <div className="row">

                        <div className="card login-card w-100">
                            <div className="text-center mt-4">
                                <h4>Sign Up</h4>
                            </div>
                            <div className="card-body">
                                <form className="login-form ml-4 mb-4 mr-4  mt-2">
                                    <div>
                                        <label>Username</label>
                                        <input className="" type="text" onChange={e => this.handleOnChange(e)} name="username" value={username} />
                                        <span className="text-danger">{this.state.formError.username && "Please enter your username"}</span>
                                    </div>
                                    <div>
                                        <label className="mt-3">Email</label>
                                        <input className="mb-2" type="text" onChange={e => this.handleOnChange(e)} name="email" value={email} />
                                        <span className="text-danger">{this.state.formError.email && "Please enter your email"}</span>
                                    </div>
                                    <div>
                                        <label className="mt-3">Password</label>
                                        <input className="mb-2" type="text" onChange={e => this.handleOnChange(e)} name="password" value={password} />
                                        <span className="text-danger">{this.state.formError.password && "Please enter your password"}</span>
                                    </div>
                                    <input className="mt-4 btn btn-primary btn-submit btn-block" value="Submit" onClick={e => this.handleSubmit(e)} type="button" />

                                </form>
                                <p className="ml-4">Already have an account?<Link className="ml-1" to={"/login"}>Login</Link></p>
                            </div>
                        </div>

                    </div>

                    {/* <CustomTabView/>  */}
                </div>
            </Home>
        )
    }
}

export default Registration;