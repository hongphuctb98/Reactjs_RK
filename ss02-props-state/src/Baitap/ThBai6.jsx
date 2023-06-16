import React, { Component } from "react";

class ThBai6 extends Component {
  constructor() {
    super();
    this.state = {
      number: "",
      array: [],
      total: 0,
    };
  }
  handleChange = (e) => {
    this.setState({
      number: +e.target.value,
    });
  };
  handleSumbitForm = (e) => {
    e.preventDefault();
    this.setState({
      array: [...this.state.array, this.state.number],
      total: this.state.total + +this.state.number,
      number: "",
      // total: this.state.array.reduce((a, b) => a + +b, 0),
    });
  };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSumbitForm}>
          <input
            type="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
          <button type="submit">add</button>
          <p>result</p>
          {this.state.array.length != 0 ? (
            <p>
              {/* {this.state.array.join("+")}={this.state.total} */}
              {this.state.number}
              {/* {this.state.array.reduce((a, b) => a + +b, 0)} */}
            </p>
          ) : null}
        </form>
      </div>
    );
  }
}

export default ThBai6;
