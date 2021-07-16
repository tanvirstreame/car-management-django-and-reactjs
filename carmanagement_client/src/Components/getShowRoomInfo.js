import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import Dashboard from './dashboard';
import '../Components/Styles/get-show-room-info.css'

class GetShowRoomInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: [],
      showroom: [],
      expanded: false //begin with box closed
    }
  }
  showButton = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  componentDidMount() {
    axios.get(`/car/api/v1/get-car-by-showroom/?showroom=${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          car: response.data,
        })
      })


    axios.get(`/car/api/v1/single-showroom/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          showroom: response.data,
        })
      })
  }

  render() {
    const { expanded } = this.state
    return (
      <Dashboard>
        <div className='container card  mb-5'>
          <div key={this.state.showroom.id}>
            <h4 className="text-center formtop">Show Room Info</h4>
            <label><b>Show Info Id:</b></label>
            <span >{this.state.showroom.id}</span>
            <br />
            <label><b>Name:</b></label>
            <span >{this.state.showroom.name}</span>
            <br />
            <label><b>Registration Number:</b></label>
            <span className="text-center">{this.state.showroom.registration_number}</span>
            <br />
            <label><b>Logo Type:</b></label>
            <span>{this.state.showroom.logo_type}</span>
            <br />
            <Button className="mt-2" onClick={this.showButton}>Veiw Contact Detail</Button>
            {
              expanded && //show if expanded is true
              <div className="mt-4"><b>Phone: </b>{this.state.showroom.contact_info}</div>
            }
            <hr></hr>
            <h4 className="text-center">All car</h4>
            <div className="row mt-4 mb-4">
              {this.state.car.map((rowdata, i) =>
                <div className="col-md-4">
                  <Link key={rowdata.car.id} className="linkelement" to={`/getcarinfo/${rowdata.car.id}`}>
                    <div className="card showroomcarinfo">
                      <div className="card-body showroomcarbodyinfo">
                        <h4 className="text-center">Car Info</h4>
                        <div>
                          <label><b>Car Id:</b></label>
                          <span >{rowdata.car.id}</span>
                        </div>
                        <div>
                          <label><b>Car Mileage:</b></label>
                          <span >{rowdata.car.mileage}</span>
                        </div>
                        <div>
                          <label><b>Year:</b></label>
                          <span >{rowdata.car.year}</span>
                        </div>
                        <div>
                          <label><b>Status:</b></label>
                          <span >{rowdata.car.status === 0 ? "Sold" : "In Stock"}</span>
                        </div>
                        <div>
                          <label><b>Transmission:</b></label>
                          <span >{rowdata.car.transmission === 0 ? "Manual" : "Automatic"}</span>
                        </div>
                        <div>
                          <label><b>Price:</b></label>
                          <span >{rowdata.car.price}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </Dashboard>
    );
  }
}

export default GetShowRoomInfo;