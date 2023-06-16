import React, { Component } from "react";

class Event extends Component {
  // event with arrow function
  handleClick01 = () => {
    console.log("click 01");
  };

  //
  handleClick02 = () => {
    console.log("click 02");
  };

  handleClick03 = () => {
    console.log("click 03");
  };

  handleClick04 = (mes) => {
    console.log("click 04");
    console.log(mes);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick01}>click1</button>
        {/* <button onClick={this.handleClick02()}>click2</button>
        <button onClick={() => this.handleClick03}>click3</button> */}
        <button onClick={() => this.handleClick04("hello")}>click4</button>
      </div>
    );
  }
}

export default Event;
