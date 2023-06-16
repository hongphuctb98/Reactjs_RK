import React, { Component } from "react";

class ThBai4 extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleCount = this.handleCount.bind(this);
  }

  handleCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <div>
        <h2>
          Count is : <span>{this.state.count}</span>
        </h2>
        <button onClick={this.handleCount}>Click</button>
      </div>
    );
  }
}

export default ThBai4;
