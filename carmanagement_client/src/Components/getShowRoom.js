import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import gql from 'graphql-tag';
import { graphql } from 'react-apollo'
import Dashboard from './dashboard';


const GET_SHOWROOM = gql`
  {
    showrooms {
      id
      name
    }
  }
`;

class GetShowRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRoom: []
    };
  }

  render() {
    const { showrooms } = this.props.data;
    return (
      <Dashboard
        title="Showroom List"
      >
        <div className='container card'>
          <h4 className="text-center formtop">Showroom List</h4>
          <div className="row  mb-5">
          
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Showroom Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {showrooms ? showrooms.map(room => (
                  <tr key={room.id}>
                    <td>{room.id}</td>
                    <td>{room.name}</td>
                    <td><Link className='btn btn-primary' to={`/getshowroominfo/${room.id}`}>View Cars</Link></td>
                  </tr>
                )): ""}
              </tbody>
            </table>
          
          </div>
        </div>
      </Dashboard>
    );
  }
}

export default graphql (GET_SHOWROOM)(GetShowRoom);