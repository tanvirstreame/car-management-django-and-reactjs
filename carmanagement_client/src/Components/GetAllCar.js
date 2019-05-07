import React, { Component } from 'react';
import './Styles/GetAllCar.css'
class CarGetAll extends Component {
  state = {
    todos: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/all');
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
            {this.state.todos.map(item => (
                <div className="card">
                   <div className="card-body">
                       <div key={item.id}>
                       <h4 className="text-center">{item.name}</h4>
                       <div className="row text-center m-center">
                        <img src={item.file} alt="Smiley face" height="250" width="250"/> 
                        <br/>
                       </div>
                       <div className="row text-center m-center">
                        <label><b>Id:</b></label>
                        <p className="text-center">{item.id}</p>
                       </div>
                       <div className="row text-center m-center">
                        <label><b>Manufacture:</b></label>
                        <p className="text-center">{item.manufacture}</p>
                       </div>
                       <div className="row text-center m-center">
                        <label><b>Mileage:</b></label>
                        <p className="text-center">{item.mileage}</p>
                       </div>
                       <div className="row text-center m-center">
                        <label><b>Year:</b></label>
                        <p>{item.year}</p>
                       </div>
                       <div className="row text-center m-center">
                        <label><b>Status:</b></label>
                        <i class="fas fa-building"></i><span>{item.status}</span>
                       </div>
                       
                    </div>
                  </div> 
                </div>
            ))}
          </div>
      </div>
    );
  }
}

export default CarGetAll;