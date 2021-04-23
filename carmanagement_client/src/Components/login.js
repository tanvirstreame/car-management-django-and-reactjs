import React, { Component } from "react";
import { Route , withRouter, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from "axios";

import "../Components/Styles/login.scss";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formValue: {
                username: "",
                password: "",
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

            }
        })
    }

    handleSubmit = () => {
        console.log(this.state.formValue)

        axios.post('/core/api/token/', {
            ...this.state.formValue
        })
            .then(response => {
                if (response.status == 200) {
                    localStorage.setItem('auth', response.data.access);
                    this.props.history.push("/")
                }
            })
    }

    render() {
        const { username, password } = this.state.formValue
        return (

            <div className="login-page">
                <div className="row">
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-4">
                        <div className="card login-card w-100">
                            <div className="card-body">
                                <form className="login-form m-4">
                                    <label>Username</label>
                                    <input defaultValue="" className="" type="text" onChange={e => this.handleOnChange(e)} name="username" value={username} />
                                    <label className="mt-3">Password</label>
                                    <input defaultValue="" className="" type="text" onChange={e => this.handleOnChange(e)} name="password" value={password} />
                                    <input className="mt-5 btn btn-primary btn-submit btn-block" value="Submit" onClick={e => this.handleSubmit(e)} type="button" />

                                </form>
                                <p className="ml-4">Don't have an account?<Link className="ml-1" to={"/register"}>Sign Up</Link></p>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-4">

                    </div>
                </div>
                {/* <CustomTabView/>  */}
            </div>
        )
    }
}

export default Login;