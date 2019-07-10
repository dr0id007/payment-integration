import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/views/home";
import About from "./components/views/about";
import Contact from "./components/views/contact";
import Navbar from "./components/views/navbar";
import Error from "./components/views/error";
import Success from "./components/views/success";
import Footer from "./components//views/footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <div className="banner-img">
            <img
              className="img-responsive"
              src={require("./assets/back1.jpg")}
              alt=""
            />
          </div>
          <Switch>
            <Route path={"/about"} component={About} />
            <Route path={"/contact"} component={Contact} />
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/"} component={Home} />
            <Route path={"/success"} component={Success} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
