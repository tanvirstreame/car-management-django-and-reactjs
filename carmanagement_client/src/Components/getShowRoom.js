import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Dashboard from './dashboard';
class GetShowRoom extends Component {
  state = {
    showRoom: []
  };

  componentDidMount() {
    axios.get('car/api/v1/showroom/').then(
      response => {
        this.setState({
          showRoom: response.data
        });
      }
    );
  }

  render() {
    return (
      <Dashboard
        title="Showroom List"
      >
        <div className='container'>
          {this.state.showRoom.length > 0 ? <>
          <h4 className="text-center formtop">Showroom List</h4>
          <div className="row  mb-5 ml-2 mr-2">
            <table className="table table-bordered shadow">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Showroom Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.showRoom && this.state.showRoom.map(room => (
                  <tr key={room.id}>
                    <td>{room.id}</td>
                    <td>{room.name}</td>
                    <td><Link className='btn btn-primary' to={`/getshowroominfo/${room.id}`}>View Cars</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </>
          : <div className="text-center w-100 mt-3"><p className="pb-3">No Data</p></div>}
        </div>
      </Dashboard>
    );
  }
}

export default GetShowRoom;