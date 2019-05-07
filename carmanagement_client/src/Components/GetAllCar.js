import React, { Component } from 'react';
import './Styles/GetAllCar.css'
class CarGetAll extends Component {
  state = {
    todos: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/allcardetail');
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
                       <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                          <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                          </ol>
                          <div class="carousel-inner">
                            <div class="carousel-item active">
                              <img src={item.file} class="d-block w-100" alt="..."/>
                            </div>
                          </div>
                          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                          </a>
                          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                          </a>
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