import React, { Component } from "react";
import Time from "./Time";
import Buttons from "./Buttons";

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      time: 0,
      isRunning: true,
    };
  }

  handleStart = () => {
    setInterval(() => {
      this.state((prevState) => ({ time: prevState.time++ }));
    }, 1000);
    this.setState({ isRunning: true });
  };

  render() {
    const { time } = this.state;
    console.log(time);
    return (
      <div>
        <Time time={time} />
        <Buttons />
      </div>
    );
  }
}

export default Clock;
