import React, { Component } from "react";

class Baitap1Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      username: "",
      password: "",
      cpassword: "",
      email: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  validateRegister = () => {
    const { username, password, cpassword, email } = this.state;
    const passRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  };

  render() {
    const { username, password, cpassword, email } = this.state;
    return (
      <div>
        <div className="form-panel two">
          <div className="form-header">
            <h1>Register Account</h1>
          </div>
          <div className="form-content">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  // onChange={this.handleChange}
                  value={username}
                  type="text"
                  id="username"
                  name="username"
                  required="required"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  // onChange={this.handleChange}
                  value={password}
                  type="password"
                  id="password"
                  name="password"
                  required="required"
                />
              </div>
              <div className="form-group">
                <label htmlFor="cpassword">Confirm Password</label>
                <input
                  // onChange={this.handleChange}
                  value={cpassword}
                  type="password"
                  id="cpassword"
                  name="cpassword"
                  required="required"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  // onChange={this.handleChange}
                  value={email}
                  type="email"
                  id="email"
                  name="email"
                  required="required"
                />
              </div>
              <div className="form-group">
                <button type="submit">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Baitap1Register;
