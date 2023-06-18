import React, { Component } from "react";

class Baitap5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      email: "",
      password: "",
      errors: {},
      employees: [],
    };
  }

  validateForm = () => {
    let errors = {};
    const { code, email, password } = this.state;
    console.log(this.state);
    let formIsValid = true;

    //code
    if (!code) {
      errors.codeErr = "Mã nhân viên không được để trống";
      formIsValid = false;
    } else if (code.slice(0, 2) != "NV") {
      errors.codeErr = "Mã nhân viên không đúng định dạng";
      formIsValid = false;
    } else if (code.length < 8) {
      errors.codeErr = "Mã nhân viên phải ít nhất 8 ký tự";
      formIsValid = false;
    } else if (code.length > 16) {
      errors.codeErr = "Mã nhân viên phải ít nhất 16 ký tự";
      formIsValid = false;
    }

    // email
    if (!email) {
      errors.emailErr = "Email không được để trống";
      formIsValid = false;
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      errors.emailErr = "Email không đúng định dạng";
      formIsValid = false;
    }

    //password
    if (!password) {
      errors.passwordErr = "Password không được để trống";
      formIsValid = false;
    } else if (password.length < 8) {
      errors.passwordErr = "Password phải ít nhất 8 ký tự";
      formIsValid = false;
    }
    console.log(errors);

    this.setState({ errors });
    return formIsValid;
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, code, employees } = this.state;
    let newEmployee = {
      code,
      email,
      password,
    };
    if (this.validateForm()) {
      this.setState({ employees: [...employees, newEmployee] }, () => {
        console.log(employees);
      });
    }
  };

  render() {
    const { emailErr, passwordErr, codeErr } = this.state.errors;
    return (
      <div>
        <h2>Đăng ký</h2>
        <form action="" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="">code</label>
            <input
              type="text"
              value={this.state.code}
              name="code"
              onChange={this.handleChange}
            />
            {codeErr && <p style={{ color: "red" }}>{codeErr}</p>}
          </div>
          <div>
            <label htmlFor="">Email: </label>
            <input
              type="text"
              value={this.state.email}
              name="email"
              onChange={this.handleChange}
            />
            {emailErr && <p style={{ color: "red" }}>{emailErr}</p>}
          </div>
          <div>
            <label htmlFor="">Password: </label>
            <input
              type="password"
              value={this.state.password}
              name="password"
              onChange={this.handleChange}
            />
            {passwordErr && <p style={{ color: "red" }}>{passwordErr}</p>}
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Baitap5;
