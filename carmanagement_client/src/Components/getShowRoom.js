import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
class GetShowRoom extends Component {
  state = {
    showRoom: []
  };

  componentDidMount() {
      axios.get('http://127.0.0.1:8000/api/v1/showroom/').then(
        response => {
          this.setState({
            showRoom: response.data
          });
        }
      );
  }

  render() {
    return (
      <div className='container'>
        <h4 className="text-center formtop">Showroom List</h4>
          <div className="row">
             <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Showroom Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                 {this.state.showRoom.map(room => (
                  <tr key={room.id}>
                    <td>{room.id}</td>
                    <td>{room.name}</td>
                    <td><Link  className='btn btn-primary' to={`/getshowroominfo/${room.id}`}>View Cars</Link></td>
                  </tr> 
                  ))}
                </tbody>
             </table>
          </div>
      </div>
    );
  }
}

export default GetShowRoom;