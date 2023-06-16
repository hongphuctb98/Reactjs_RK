import React, { Component } from "react";

class BtBai2 extends Component {
  constructor() {
    super();
    this.state = {
      textContent: "",
    };
  }
  handleClick = () => {
    this.setState({
      textContent: "Bài 2 đã chạy",
    });
  };

  render() {
    return (
      <div>
        <input type="text" />
        <button type="submit" onClick={this.handleClick}>
          Input
        </button>
        <p>{this.state.textContent}</p>
      </div>
    );
  }
}

export default BtBai2;
