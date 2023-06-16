import React, { Component } from "react";

class ThBai2 extends Component {
  render() {
    return (
      <div>
        <button
          style={{ color: this.props.color, background: this.props.background }}
        >
          {this.props.text}
        </button>
      </div>
    );
  }
}

export default ThBai2;
