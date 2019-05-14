import React, { Component } from 'react';
class CarInformation extends Component {
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
    fetch('http://127.0.0.1:8000/all-car-detail/'+this.props.match.params.id,)
    .then(function (res){
        return res.json();
    })
    .then(function(data){
        self.setState({
            car:data,
        })
    })
  
}
   
  render(){
    return (
      <div className='container'>
        <div className="row">
          <div key={this.state.car.id}>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={this.state.car.file} class="d-block w-100" alt="..."/>
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
            <span >{this.state.car.id}</span>
            <br/>
            <label><b>Car Name:</b></label>
            <span >{this.state.car.name}</span>
            <br/>
            <label><b>car mileage:</b></label>
            <span >{this.state.car.mileage}</span>
            <br/>
            <label><b>year:</b></label>
            <span >{this.state.car.year}</span>
            <br/>
            <label><b>status:</b></label>
            <span >{this.state.car.status===0 ? "Sold":"In Stock"}</span>
            <br/>
            <label><b>transmission:</b></label>
            <span >{this.state.car.transmission ===0? "Manual":"Automatic"}</span>
            <br/>
            <label><b>price:</b></label>
            <span >{this.state.car.price}</span>
            <br/>
      </div>
    </div>
  </div>
    );
  }
}

export default CarInformation ;