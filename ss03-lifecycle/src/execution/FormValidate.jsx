import { logDOM } from "@testing-library/react";
import React, { Component } from "react";

class FormValidate extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  validateEmail = (email) => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailRegex.test(email)) {
      return false;
    }
    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.value) {
      alert("Vui lòng nhập email");
    } else if (!this.validateEmail(this.state.value)) {
      alert("Email không hợp lệ");
    } else {
      alert("Đăng ký thành công: " + this.state.value);
    }
  };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="">
              Email
              <input
                type="email"
                onChange={this.handleChange}
                value={this.state.value}
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default FormValidate;
