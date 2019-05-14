import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
    <nav className="navbar navbar-expand-sm navbar-expand-md navbar-full  bg-info navbar-dark">
      <a className="navbar-brand" href="/createowner">Car Cater</a>
      <ul className="navbar-nav">
        <li className="nav-item">
            <Link className="nav-link" to={"/createowner"}>Create Owner</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to={"/createcar"}>Create Car</Link>
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
            <Link className="nav-link" to={"/carassignshowroom"}>Car Assign Showroom</Link>
        </li>  
        <li className="nav-item">
            <Link className="nav-link" to={"/ownerassignshowroom"}>Owner Assign Showroom</Link>
        </li>  
      </ul>
    </nav>
    );
  }
}

export default Home;