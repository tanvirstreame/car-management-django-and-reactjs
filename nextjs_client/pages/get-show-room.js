import React, { Component } from 'react';
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
class GetShowRoom extends Component {
  state = {
    todos: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('/api/v1/showroom/');
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
        <Header title={'Get Show Room'}/>
        <Navbar />
        <div className='container'>
          <h4 className="text-center formtop">Showroom List</h4>
          <div className="row list-scroll">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th className="text-center" id="t-id">Id</th>
                  <th className="text-center">Showroom Name</th>
                  <th className="text-center" id="t-action">Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.todos.map(item => (
                  <tr key={item.id}>
                    <td className="text-center">{item.id}</td>
                    <td>{item.name}</td>
                    <td className="text-center"><Link  href={`/get-showroom-info/${item.id}`}><a className="btn btn-primary">View Cars</a></Link></td>
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