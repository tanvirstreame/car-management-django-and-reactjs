import React, { Component, Fragment }  from "react";
import  { Redirect } from 'react-router-dom'

class CheckAuth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticate: true
        }

    }

    componentDidMount() {
        const auth = localStorage.getItem('auth');
        if(!auth) {
            this.setState({
                authenticate: false
            })
        }

    }

    render() {

        if(this.state.authenticate) {
            return(
                <Fragment></Fragment>
            )  
        }

        return(
            <Redirect to="/login"/>
        )    
    }
}

export default CheckAuth;