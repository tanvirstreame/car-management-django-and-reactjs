import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <a className="navbar-brand" href="#">Car Cater</a>
      <ul className="navbar-nav">
        <li className="nav-item">
            <Link className="nav-link" to={"/CreateOwner"}>Create Owner</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to={"/create"}>Create Car Detail</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to={"/CreateShowRoomForm"}>Create Show Room</Link>
        </li>
        
        <li className="nav-item">
            <Link className="nav-link" to={"/Get"}>All Car</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to={"/showroom"}>Show Room</Link>
        </li>  
        <li className="nav-item">
            <Link className="nav-link" to={"/CarAssignShowroom"}>CarAssignShowroom</Link>
        </li>  
        <li className="nav-item">
            <Link className="nav-link" to={"/OwnerAssignShowroom"}>OwnerAssignShowroom</Link>
        </li>  
      </ul>
    </nav>
    );
  }
}

export default Home;