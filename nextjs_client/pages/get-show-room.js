import React, { Component } from 'react';
import Link from 'next/link'
import Nav from '../components/Nav'
import Header from '../components/Header'
class GetShowRoom extends Component {
  state = {
    todos: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/v1/showroom/');
      const todos = await res.json();
      this.setState({
        todos
      });
    } catch (e) {
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Nav />
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
                {this.state.todos.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td><Link className='btn btn-primary' href="/getshowroominfo/${item.id}">View Cars</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default GetShowRoom;