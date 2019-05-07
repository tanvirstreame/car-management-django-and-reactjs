import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import CarGetAll from './Components/GetAllCar'
import CreateCarForm from './Components/CreateCarForm';
import GetShowRoomInfo from './Components/GetShowRoomInfo';
import GetShowRoom from './Components/GetShowRoom';
import Home from './Components/Home';
import CreateOwner from './Components/CreateOwner'
import CreateShowRoomForm from './Components/CreateShowroom'
import CarAssignShowroom from './Components/CarAssignShowroom'
import OwnerAssignShowroom from './Components/OwnerAssignShowroom'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import $ from "jquery";
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
      </div>
    </Router>
)
ReactDOM.render(routing, window.document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
