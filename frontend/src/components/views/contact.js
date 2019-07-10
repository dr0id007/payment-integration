import React, { Component } from "react";

export default class contact extends Component {
  state = {
    email: "",
    text: ""
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container-fluid">
        <form className="form row" onSubmit={this.onSubmit}>
          <h2>Contact</h2>
          <input
            className="input"
            placeholder="email"
            name="email"
            onChange={this.onChange}
          />
          <input
            className="input"
            placeholder="your feedback"
            onChange={this.onChange}
          />
          <button className="btn btn-outline-primary submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
