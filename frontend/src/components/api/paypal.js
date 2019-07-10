import React, { Component } from "react";
import axios from "axios";

export default class paypal extends Component {
  onClick = () => {
    console.log("on click called");
    axios
      .post("http://localhost:4000/paypal")
      .then(data => {
        console.log("data", data);
      })
      .catch(error => {
        console.log("error", error);
      });
  };

  render() {
    return (
      <div>
        <button className="btn btn-outline-default" onClick={this.onClick}>
          Paypal
        </button>
      </div>
    );
  }
}
