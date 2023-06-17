import React, { Component } from "react";

class Baitap3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeIdList: ["1", "2", "3", "4", "5"],
      inputId: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      inputId: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { employeeIdList, inputId } = this.state;

    let check = employeeIdList.some((id) => id == inputId);
    if (check) {
      alert("id already");
    } else {
      alert("success");
      this.setState({
        employeeIdList: [...employeeIdList, inputId],
        inputId: "",
      });
      console.log(employeeIdList);
    }
  };

  render() {
    console.log("render ", this.state.employeeIdList);
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Input employee id:
            <input
              type="text"
              // value={this.state.inputId}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Baitap3;
