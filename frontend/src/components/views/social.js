import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class connect extends Component {
  render() {
    return (
      <div className="social">
        <h1>Connect with us</h1>
        <div className="icon mt-5 pt-5">
          <div className="git">
            <a className="ic" href="https://www.github.com/dr0id007">
              <i className="fab fa-github fa-4x" />
              Github
            </a>
          </div>
          <div className="linked">
            <a
              className="ic"
              href="https://www.linkedin.com/in/dev-arora-668180167/"
            >
              <i className="fab fa-linkedin fa-4x" />
              LinkedIn
            </a>
          </div>
          <div className="facebook">
            <a className="ic" href="https://www.facebook.com/devarora43">
              <i className="fab fa-facebook-square fa-4x" />
              Facebook
            </a>
          </div>
          <div className="telegram">
            <a className="ic" href="https://web.telegram.org/@Dr0id007">
              <i className="fab fa-telegram-plane fa-4x" />
              Telegram
            </a>
          </div>
          <div className="slack">
            <a className="ic" href="https://slack.com/intl/en-in/get-started">
              <i className="fab fa-slack fa-4x" />
              Slack
            </a>
          </div>
        </div>
      </div>
    );
  }
}
