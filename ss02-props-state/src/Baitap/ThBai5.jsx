import React, { Component } from "react";

class ThBai5 extends Component {
  constructor() {
    super();
    this.state = {
      textInput: "",
    };
  }

  handleSumbitForm = (e) => {
    e.preventDefault();
    console.log(this.state.textInput);
  };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSumbitForm}>
          <input
            type="text"
            value={this.state.textInput}
            onChange={(e) => this.setState({ textInput: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ThBai5;
