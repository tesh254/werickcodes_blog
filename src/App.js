import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/commons/NavBar";
import "./assets/css/index.css";
import "./assets/css/home.css";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <div className="App-content">
              <Switch>
                <Route exact to="/" component={Home} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
