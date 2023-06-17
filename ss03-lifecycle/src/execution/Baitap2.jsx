import React, { Component } from "react";
// import "./Baitap2/css/style.css";
import "./Baitap2/js/index.js";

class Baitap2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      erros: {},
      success: false,
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validate = () => {
    const { username, password, email } = this.state;
    const userNameRegex = /^[a-zA-Z0-9]{3,15}$/;
    const passwordRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const erros = {};
    if (!username) {
      erros.username = "Username is required";
    } else if (!userNameRegex.test(username)) {
      erros.username = "Username is invalid";
    }

    if (!password) {
      erros.password = "Password is required";
    } else if (!passwordRegex.test(password)) {
      erros.password = "Password is invalid";
    }
    if (!email) {
      erros.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      erros.email = "Email is invalid";
    }

    this.setState({
      erros,
      success: Object.keys(erros).length === 0,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.validate();
  };

  render() {
    const { username, password, email, erros, success } = this.state;

    return (
      <div>
        <div className="signupSection">
          <div className="info">
            <h2>Welcome to Rikkei Academy</h2>
            <i className="icon ion-ios-ionic-outline" aria-hidden="true" />
            <p>The Future Is Here</p>
          </div>

          <form
            action="#"
            method="POST"
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
                  onChange={this.handleChange}
                />
                {erros.username && (
                  <p style={{ color: "red" }}>{erros.username}</p>
                )}
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
                  onChange={this.handleChange}
                />
                {erros.password && (
                  <p style={{ color: "red" }}>{erros.password}</p>
                )}
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
                  onChange={this.handleChange}
                />
                {erros.email && <p style={{ color: "red" }}>{erros.email}</p>}
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
