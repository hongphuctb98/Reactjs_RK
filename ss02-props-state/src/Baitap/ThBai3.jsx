import React, { Component } from "react";

class ThBai3 extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }

  upNumber = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button
          onClick={() => this.setState({ number: this.state.number + 1 })}
        >
          click me
        </button>
      </div>
    );
  }
}

export default ThBai3;
