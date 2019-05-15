import React from "react";
import { Switch, Route } from "react-router";
// import Home from "../components/Home";
// import SingleArticle from "../components/containers/SingleArticle";
// import About from '../components/About';
// import Privacy from "../components/Privacy";
// import ContactForm from "../components/commons/Contact";

export default (
  <Switch>
    <Route exact path="/" />
    <Route exact={true} path="/articles/:slug" />
    <Route exact={true} path="/about" />
    <Route exact={true} path="/privacy" />
    <Route exact={true} path="/contact" />
  </Switch>
);
