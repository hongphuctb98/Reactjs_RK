import React, { Component } from "react";

class ThBai7 extends Component {
  constructor() {
    super();
    this.state = {
      color: "red",
      fontSize: 50,
      content: "Hello",
      isShow: true,
    };
  }

  handleShow = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };

  handleChange = () => {
    this.setState({
      color: `rgb(${Math.random() * 255}, ${
        Math.random() * 255
      }, ${Math.random()}, ${Math.random() * 255})`,

      fontSize: Math.random() * 100 + 20,
    });
  };
  render() {
    return (
      <div>
        <h2>Show text content</h2>
        <button onClick={this.handleShow}>Show</button>
        <button onClick={this.handleChange}>Change</button>
        {this.state.isShow ? (
          <p style={{ color: this.state.color, fontSize: this.state.fontSize }}>
            {this.state.content}
          </p>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default ThBai7;
