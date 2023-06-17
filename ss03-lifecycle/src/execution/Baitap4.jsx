import React, { Component } from "react";

class Baitap4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      message: "",
      employee: [],
      success: false,
    };
  }

  handleChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      id: e.target.value,
    });
  };

  validate = (id) => {
    const { message } = this.state;
    if (id == "") {
      this.setState({
        message: "Id không được để trống",
        success: false,
      });
      return;
    }

    if (id.slice(0, 2) != "NV") {
      this.setState({
        message: "Mã nhân viên không đúng định dạng",
        success: false,
      });
      return;
    }
    if (id.length < 8) {
      this.setState({
        message: "Mã nhân viên phải ít nhất 8 ký tự",
        success: false,
      });
      return;
    }

    if (id.length > 16) {
      this.setState({
        message: "Mã nhân viên phải ít nhất 16 ký tự",
        success: false,
      });
      return;
    }
    this.setState({
      success: true,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { id, message } = this.state;
    this.validate(id);
  };

  render() {
    const { id, message, success } = this.state;
    console.log(success);
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">
            <input
              type="text"
              value={this.state.id}
              onChange={this.handleChange}
            />
            {!success ? (
              <p style={{ color: "red" }}>{message}</p>
            ) : (
              <p style={{ color: "green" }}>success</p>
            )}
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Baitap4;
