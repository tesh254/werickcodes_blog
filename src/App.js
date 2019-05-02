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
import "./assets/css/footer.css";
import "./assets/css/about.css";
import "./assets/css/form.css";
import "./assets/css/prism.css";
import SingleArticle from "./components/containers/SingleArticle";
import Footer from "./components/commons/Footer";
import About from "./components/About";
import Privacy from './components/Privacy';
import ContactForm from "./components/commons/Contact";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <div className="App">
              <Navbar />
              <div className="App-content" id="results">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact={true} path="/articles/:slug" component={SingleArticle}/>
                  <Route exact={true} path="/about" component={About} />
                  <Route exact={true} path="/privacy" component={Privacy}/>
                  <Route exact={true} path="/contact" component={ContactForm}/>
                </Switch>
              </div>
              <Footer />
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
