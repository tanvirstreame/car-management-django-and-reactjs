import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import "../Components/Styles/dashboard.css";
import CheckAuth from "../helper/auth";
const createHistory = require("history").createBrowserHistory;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dashboardActive: {
        carManagement: false,
        shopManagement: false,
        userManagement: false
      }
    }
  };

  logout = () => {
    let history = createHistory();
    history.push("/login");
    let pathUrl = window.location.href;
    window.location.href = pathUrl;
    localStorage.clear();
  }

  handleDashboardActive = (name) => {
    this.setState({
      dashboardActive: {
        [name]: !this.state.dashboardActive[name]
      }
    })

  }


  render() {
    return (
      <Fragment>
        <CheckAuth />
        <section id="dashboard">
          <div className="container-fluid">
            <div className="dashboard-container row">

              <div className="col-12 col-sm-12 col-md-4 col-lg-2 sidenav">
                <div className="logo">

                  <h4 className="text-white">Car Management</h4>
                  <h6>

                  </h6>
                </div>
                <div className="sn-group">
                  <Link className="sn-link" to={""}>
                    <i className="fas fa-tachometer-alt"></i>Dashboard
                    </Link>
                </div>

                <div className="sn-group">
                  <Link onClick={() => this.handleDashboardActive("carManagement")} className="sn-link">
                    <i className="fas fa-car"></i>Car<i className={`ml-2 pt-2 fas ${this.state.dashboardActive.carManagement ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}`}></i>
                  </Link>
                  {
                    this.state.dashboardActive.carManagement &&
                    <nav className="bg-white p-2 rounded mt-1">
                      <Link className="sn-link text-dark" to={"/"}>
                        <i className="fas fa-plus text-dark"></i>Create Car
                    </Link>
                      <Link className="sn-link text-dark" to={"/getallcar"}>
                        <i className="fas fa-list text-dark"></i>Car List
                    </Link>
                    </nav>
                  }

                </div>

                <div className="sn-group">

                  <Link onClick={() => this.handleDashboardActive("showManagement")} className="sn-link">
                    <i className="fas fa-store"></i>Showroom<i className={`ml-2 pt-2 fas ${this.state.dashboardActive.showManagement ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}`}></i>
                  </Link>
                  {
                    this.state.dashboardActive.showManagement &&
                    <nav className="bg-white p-2 rounded mt-1">
                      <Link className="sn-link text-dark" to={"/createshowroomform"}>
                        <i className="fas fa-plus text-dark"></i>Create Show Room
                    </Link>
                      <Link className="sn-link text-dark" to={"/showroom"}>
                        <i className="fas fa-list text-dark"></i>Show Room List
                    </Link>
                      <Link className="sn-link text-dark" to={"/carassignshowroom"}>
                        <i className="fas fa-plus text-dark"></i>Car Assign Showroom
                    </Link>
                    </nav>
                  }
                </div>

                <div className="sn-group">
                  <Link onClick={() => this.handleDashboardActive("userManagement")} className="sn-link">
                    <i className="fas fa-user"></i>User<i className={`ml-2 pt-2 fas ${this.state.dashboardActive.userManagement ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}`}></i>
                  </Link>
                  {
                    this.state.dashboardActive.userManagement &&
                    <nav className="bg-white p-2 rounded mt-1">
                      <Link className="sn-link text-dark" to={"/createowner"}>
                        <i className="fas fa-plus text-dark"></i>Create Owner
                    </Link>
                      <Link className="sn-link text-dark" to={"/ownerassignshowroom"}>
                        <i className="fas fa-plus text-dark"></i>Owner Assign Showroom
                    </Link>
                    </nav>}
                </div>



              </div>

              <div className="col-12 col-sm-12 col-md-8 col-lg-10 px-0 dashbody">

                <nav className="navbar navbar-expand-lg navbar-light bg-light shadow py-3 px-5">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                    <h4>{this.props.title}</h4>
                    <div className="navbar-nav ml-auto">
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
                          aria-expanded="false"><i className="fas fa-user-circle fa-lg"></i></a>
                        <div className="dropdown-menu">
                          <a onClick={event => { this.logout(event) }} className="dropdown-item" >logout</a>
                          <div className="dropdown-divider"></div>

                        </div>
                      </li>
                    </div>
                  </div>
                </nav>
                <div id="dash-body-inner" className="container-fluid p-5">
                  {this.props.children}
                </div>
                <footer id="footer">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 py-1">
                        <p>&copy;copyright 2020, reserved by <em>Tanvir</em></p>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>

            </div>

          </div>
        </section>
      </Fragment>
    );
  }
}


export default Dashboard

