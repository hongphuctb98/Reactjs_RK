import React, { Component } from "react";

class Bt3 extends Component {
  render() {
    var today = new Date();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    return (
      <div>
        <h2>Hello everyone</h2>
        <h2>Now : {time}</h2>
      </div>
    );
  }
}

export default Bt3;
