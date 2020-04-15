import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import CarGetAll from './Components/getAllCar'
import CreateCarForm from './Components/createCarForm';
import GetShowRoomInfo from './Components/getShowRoomInfo';
import GetShowRoom from './Components/getShowRoom';
import Home from './Components/home';
import CreateOwner from './Components/createOwner'
import CreateShowRoomForm from './Components/createShowroom'
import CarAssignShowroom from './Components/carAssignShowroom'
import OwnerAssignShowroom from './Components/ownerAssignShowroom'
import CarInformation from './Components/carInformation'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'


const routing = (
    <Router>
      <div>
        <Route path="/" component={Home}/>
        <Route path="/getallcar" component={CarGetAll}/>
        <Route path="/createowner" component={CreateOwner}/>
        <Route path="/createcar" component={CreateCarForm}/>
        <Route path="/showroom/" component={GetShowRoom}/>
        <Route path="/getshowroominfo/:id" component={GetShowRoomInfo}/>
        <Route path="/createshowroomform" component={CreateShowRoomForm}/>
        <Route path="/carassignshowroom" component={CarAssignShowroom}/>
        <Route path="/ownerassignshowroom" component={OwnerAssignShowroom}/>
        <Route path="/getcarinfo/:id" component={CarInformation}/>
      </div>
    </Router>
)
ReactDOM.render(routing, window.document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
