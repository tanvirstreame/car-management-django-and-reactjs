import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import "../Components/Styles/login.scss";

class Registration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formValue: {
                username: "",
                password: "",
                email: "",
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
        const { username, password, email} = this.state.formValue
        return (

            <div className="login-page">
                <div className="row">
                    <div className="col-md-7">

                    </div>
                    <div className="col-md-4">
                        <div className="card login-card w-100">
                            <div className="text-center mt-2">
                                <h4>Registration</h4>
                            </div>
                            <div className="card-body">
                                <form className="login-form ml-4 mb-4 mr-4  mt-2">
                                    <label>Username</label>
                                    <input defaultValue="" className="" type="text" onChange={e => this.handleOnChange(e)} name="username" value={username} />
                                    <label className="mt-3">Email</label>
                                    <input defaultValue="" className="" type="text" onChange={e => this.handleOnChange(e)} name="email" value={email} />
                                    <label className="mt-3">Password</label>
                                    <input defaultValue="" className="" type="text" onChange={e => this.handleOnChange(e)} name="password" value={password} />
                                    <input className="mt-5 btn btn-primary btn-submit btn-block" value="Submit" onClick={e => this.handleSubmit(e)} type="button" />

                                </form>
                                <p className="ml-4">Already have an account?<Link className="ml-1" to={"/login"}>Login</Link></p>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-1">

                    </div>
                </div>
                {/* <CustomTabView/>  */}
            </div>
        )
    }
}

export default Registration;