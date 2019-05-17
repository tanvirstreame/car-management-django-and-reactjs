import React, { Component } from 'react';
class CarInformation extends Component {
  constructor(props){
    super(props);
    this.state={
        car:[],
        image:[],
        showroom:[],
        expanded: false //begin with box closed
    }
  }
showButton = () => { 
  this.setState({ expanded: !this.state.expanded })
}

  componentDidMount(){
    var self = this;
    fetch('http://127.0.0.1:8000/single-car-detail/'+this.props.match.params.id,)
    .then(function (res){
        return res.json();
    })
    .then(function(data){
        self.setState({
            car:data,
        })
    })

    fetch('http://127.0.0.1:8000/single-car-image/'+this.props.match.params.id,)
    .then(function (res){
        return res.json();
    })
    .then(function(data){
        self.setState({
            image:data,
        })
    })
  
}
   
  render(){
    return (
      <div className='container'>
        <div className="row">
          <div key={this.state.car.id}>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                 {this.state.image.map((rowData,i)=> (
                  <div key={rowData.image}>
                    <img src={rowData.image} className="d-block w-100" alt="..."/>
                  </div>
                 ))};
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
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
            <label><b>car Mileage:</b></label>
            <span >{this.state.car.mileage}</span>
            <br/>
            <label><b>Year:</b></label>
            <span >{this.state.car.year}</span>
            <br/>
            <label><b>Status:</b></label>
            <span >{this.state.car.status===0 ? "Sold":"In Stock"}</span>
            <br/>
            <label><b>Transmission:</b></label>
            <span >{this.state.car.transmission ===0? "Manual":"Automatic"}</span>
            <br/>
            <label><b>Price:</b></label>
            <span >{this.state.car.price}</span>
            <br/>
      </div>
    </div>
  </div>
    );
  }
}

export default CarInformation ;