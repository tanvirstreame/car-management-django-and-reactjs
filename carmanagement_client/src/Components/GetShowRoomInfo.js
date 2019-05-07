import React, { Component } from 'react';
import img1 from './assets/bmw1.jpg'
import img2 from './assets/bmw2.jpg'
import img3 from './assets/bmw3.jpeg'
import {Button } from 'reactstrap'
class GetShowRoomInfo extends Component {
  constructor(props){
    super(props);
    this.state={
        car:[],
        showroom:[],
        expanded: false //begin with box closed
    }
  }
showButton = () => { 
  this.setState({ expanded: !this.state.expanded })
}

  componentDidMount(){
    var self = this;
    fetch('http://localhost:8000/GetCarByShowroom/?showroom='+this.props.match.params.id,)
    .then(function (res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        self.setState({
            car:data,
        })
    })
  
    fetch('http://localhost:8000/ShowRoom/'+this.props.match.params.id+"/",)
    .then(function (res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        self.setState({
          showroom:data,
        })
    })
}
   
  render(){
    const { expanded } = this.state
    return (
      <div className='container'>
        <div key={this.state.showroom.id}>
          <h4 className="text-center">Show Room Info</h4>
          <label><b>Show Info Id:</b></label>
          <span >{this.state.showroom.id}</span>
          <br/>
          <label><b>Name:</b></label>
          <span >{this.state.showroom.name}</span>
          <br/>
          <label><b>RegistrationNumber:</b></label>
          <span className="text-center">{this.state.showroom.registrationNumber}</span>
          <br/>
          <label><b>logoType:</b></label>
          <span>{this.state.showroom.logoType}</span>
          <br/>
          <Button onClick={ this.showButton }>Veiw Contact Detail</Button>
          { 
            expanded && //show if expanded is true
            <div>{this.state.showroom.contactInfo}</div>
          }
        </div>
        <div className="row">
          {this.state.car.map((rowdata,i)=>
          <div key={rowdata.id}>
          <div className="card">
            <div className="card-body">
              <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={img1} class="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={img2} class="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={img3} class="d-block w-100" alt="..."/>
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
            <h4 className="text-center">Car Info</h4>
            <label><b>Show Info Id:</b></label>
            <span >{rowdata.car.id}</span>
            <br/>
            <label><b>Car Name:</b></label>
            <span >{rowdata.car.name}</span>
            <br/>
            <label><b>car mileage:</b></label>
            <span >{rowdata.car.mileage}</span>
            <br/>
            <label><b>year:</b></label>
            <span >{rowdata.car.year}</span>
            <br/>
            <label><b>status:</b></label>
            <span >{rowdata.car.status}</span>
            <br/>
            <label><b>transmission:</b></label>
            <span >{rowdata.car.transmission}</span>
            <br/>
            <label><b>price:</b></label>
            <span >{rowdata.car.price}</span>
            <br/>
          </div>
        </div> 
      </div>
      )}
    </div>
  </div>
    );
  }
}

export default GetShowRoomInfo ;