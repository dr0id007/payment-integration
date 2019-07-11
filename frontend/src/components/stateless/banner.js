import React, { Component } from "react";
import axios from "axios";
import { async } from "q";
import Stripe from "../api/stripe";

class banner extends Component {
  state = {
    click: false
  };

  onClick = async () => {
    console.log("on click");
    this.setState({
      click: true
    });
    await axios
      .get("http://localhost:4000/pay/paypal")
      .then(data => {
        console.log("data:-", data);
      })
      .catch(error => {
        console.log("error", error);
      });
  };

  render() {
    return (
      <div className="banner">
        <div className="banner-img" />
        <div className="banner-text">
          <h1>Hello</h1>
          <h1>WELCOME</h1>
          {/* <button className="btn btn-outline-default" onClick={this.onClick}>
            Donate
          </button> */}
          <Stripe />
        </div>
      </div>
    );
  }
}
export default banner;
