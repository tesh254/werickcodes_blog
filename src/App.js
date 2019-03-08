import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import Home from "./components/Home";
import Navbar from "./components/commons/NavBar";
import "./assets/css/index.css";
import "./assets/css/home.css";
import "./assets/css/bootstrap/css/bootstrap.min.css";
import "./assets/css/posts.css";
import "./assets/css/loader.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
