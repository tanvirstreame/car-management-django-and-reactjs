import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class GetShowRoom extends Component {
  state = {
    todos: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/ShowRoom/');
      const todos = await res.json();
      this.setState({
        todos
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className='container'>
          <div className="row">
             <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Showroom Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                 {this.state.todos.map(item => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td><Link  className='btn btn-primary' to={`/GetShowRoomInfo/${item.id}`}>Edit</Link></td>
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