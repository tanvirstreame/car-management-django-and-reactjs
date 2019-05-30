import React, { Component } from 'react';
import { Button } from 'reactstrap'
import Link from 'next/link'
import Nav from '../components/Nav'
import Header from '../components/Header'
// import './GetShowRoomInfo.css'
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
        this.setState({ expanded: !this.state.expanded })
    }

    componentDidMount() {
        var self = this;
        fetch('http://localhost:8000/api/v1/get-car-by-showroom/?showroom=' + this.props.query)
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                self.setState({
                    car: data,
                })
            })

        fetch('http://localhost:8000/api/v1/single-showroom/' + this.props.query)
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                self.setState({
                    showroom: data,
                })
            })
    }

    render() {
        const { expanded } = this.state
        return (
            <div>
                <Header />
                <Nav />
                <div className='container'>
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
                        <Button onClick={this.showButton}>Veiw Contact Detail</Button>
                        {
                            expanded && //show if expanded is true
                            <div>{this.state.showroom.contact_info}</div>
                        }
                        <div className="row">
                            {this.state.car.map((rowdata, i) =>
                                <Link key={rowdata.car.id} className="linkelement" to={`/getcarinfo/${rowdata.car.id}`}>
                                    <div className="card showroomcarinfo">
                                        <div className="card-body showroomcarbodyinfo">
                                            <h4 className="text-center">Car Info</h4>
                                            <label><b>Car Id:</b></label>
                                            <span >{rowdata.car.id}</span>
                                            <br />
                                            <label><b>Car Mileage:</b></label>
                                            <span >{rowdata.car.mileage}</span>
                                            <br />
                                            <label><b>Year:</b></label>
                                            <span >{rowdata.car.year}</span>
                                            <br />
                                            <label><b>Status:</b></label>
                                            <span >{rowdata.car.status === 0 ? "Sold" : "In Stock"}</span>
                                            <br />
                                            <label><b>Transmission:</b></label>
                                            <span >{rowdata.car.transmission === 0 ? "Manual" : "Automatic"}</span>
                                            <br />
                                            <label><b>Price:</b></label>
                                            <span >{rowdata.car.price}</span>
                                            <br />
                                        </div>
                                    </div>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default GetShowRoomInfo;