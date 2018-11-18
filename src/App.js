import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import NavBarComponent from "./component/navbar/navbar.component";
import AccueilComponent from "./component/accueil/accueil.component";
import SmoothiesComponent from "./component/smoothie/smoothies.component";
import CreationComponent from "./component/creation/creation.component";

class App extends Component {
  render() {
    return (

      <Router>
          <div>
              <NavBarComponent />

              <Route exact path="/" component={AccueilComponent} />
              <Route path="/smoothies" component={SmoothiesComponent} />
              <Route path="/creations" component={CreationComponent} />
          </div>
      </Router>
    );
  }
}

export default App;
