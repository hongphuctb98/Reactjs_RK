import React, { Component } from "react";
import "./Baitap2/css/style.css";
import "./Baitap2/js/index.js";

class Baitap2 extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <div className="signupSection">
          <div className="info">
            <h2>Welcome to Rikkei Academy</h2>
            <i className="icon ion-ios-ionic-outline" aria-hidden="true" />
            <p>The Future Is Here</p>
          </div>
          <form
            className="signupForm"
            name="signupform"
            onSubmit={this.handleSubmit}
          >
            <h2>Sign Up</h2>
            <ul className="noBullet">
              <li>
                <label htmlFor="username" />
                <input
                  type="text"
                  className="inputFields"
                  id="username"
                  name="username"
                  placeholder="Username"
                  defaultValue=""
                  oninput="return userNameValidation(this.value)"
                  required=""
                />
              </li>
              <li>
                <label htmlFor="password" />
                <input
                  type="password"
                  className="inputFields"
                  id="password"
                  name="password"
                  placeholder="Password"
                  defaultValue=""
                  oninput="return passwordValidation(this.value)"
                  required=""
                />
              </li>
              <li>
                <label htmlFor="email" />
                <input
                  type="email"
                  className="inputFields"
                  id="email"
                  name="email"
                  placeholder="Email"
                  defaultValue=""
                  required=""
                />
              </li>
              <li id="center-btn">
                <input
                  type="submit"
                  id="join-btn"
                  name="join"
                  alt="Join"
                  defaultValue="Join"
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default Baitap2;
