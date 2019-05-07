import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <a className="navbar-brand" href="#">Car Cater</a>
      <ul className="navbar-nav">
        <li className="nav-item">
            <Link className="nav-link" to={"/createowner"}>Create Owner</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to={"/createcar"}>Create Car Detail</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to={"/createshowroomform"}>Create Show Room</Link>
        </li>
        
        <li className="nav-item">
            <Link className="nav-link" to={"/getallcar"}>All Car</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to={"/showroom"}>Show Room</Link>
        </li>  
        <li className="nav-item">
            <Link className="nav-link" to={"/carassignshowroom"}>CarAssignShowroom</Link>
        </li>  
        <li className="nav-item">
            <Link className="nav-link" to={"/ownerassignshowroom"}>OwnerAssignShowroom</Link>
        </li>  
      </ul>
    </nav>
    );
  }
}

export default Home;