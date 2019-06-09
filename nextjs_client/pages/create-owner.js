import React , { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar'
import Header from '../components/Header'

const CreateOwner =()=>{
    const intailFormState= { username : '' , email : '' , password : '' };
    const [ owner , setOwner ] = useState(intailFormState);

    const handleUserInput = event => {
        const {name , value}= event.target;
        setOwner( { ...owner , [name] : value } );
    }

    const handleSubmit = event =>{
        {event.preventDefault() 
        axios.post("http://localhost:8000/api/v1/showroomowner/", { username:owner.username ,email:owner.email , password : owner.password })
        .then(res => {
            alert("Owner Added");
            setOwner(intailFormState);
        }).catch(error=>{
            console.log(error);
        });
        }
    }

    return ( 
        <form
            onSubmit={handleSubmit}>
            <Header title={'Car Owner'} />
            <Navbar />
            <div className="container">
              <div className="row">
                  <div className="col-md-8 offset-md-2">
                        <h4 className="text-center">Create Owner</h4>
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <label>User Name</label>
                                <input type="text" className="form-control shadow-none" name="username"  value={ owner.username} onChange={ handleUserInput }/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <label>Email</label>
                                <input type="text" className="form-control shadow-none" name="email" value={ owner.email } onChange={ handleUserInput }/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <label>Password</label>
                                <input type="text" className="form-control shadow-none" name="password"  value={ owner.password } onChange={ handleUserInput }/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 offset-md-2 formtop">
                                <input type="submit" className="btn btn-info btn-block shadow-none" value="Create Owner"/>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="col-md-8 offset-md-2 text-danger">
                            </div>
                        </div>
                  </div>
              </div>
            </div>

        </form>
    )
}

export default CreateOwner;