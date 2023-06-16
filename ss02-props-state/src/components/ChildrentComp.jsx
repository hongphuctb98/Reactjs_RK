import React, { Component } from "react";

class ChildrentComp extends Component {
  constructor() {
    super();
    this.state = {
      studentA: "Hong phuc",
      question: "What is your name?",
      anwser: "",
      display: true,
    };
    // this.handleToggleDisplay = this.handleToggleDisplay.bind(this);
  }

  hanleChangeState = () => {
    this.setState({
      anwser: "Momo",
    });
  };

  // hanleChangeState() {
  //   this.setState({ anwser: "Momo" });
  // }

  handleToggleDisplay = () => {
    this.setState({
      display: !this.state.display,
    });
  };
  render() {
    return (
      <div>
        <h2>
          {this.props.titleParent} {this.props.course}
        </h2>

        <p>{this.props.children}</p>
        <h2>State</h2>
        <p>{this.state.studentA}</p>
        <p>
          {this.state.question} - {this.state.anwser}
        </p>
        <button onClick={this.hanleChangeState}>Click! </button>
        {this.state.display ? (
          <div>
            <p>Anh back sp co nhiet tinh khong</p>
            <p>Co</p>
            <button onClick={this.handleToggleDisplay}>CLick!</button>
          </div>
        ) : (
          <div>
            <p>Anh back sp co nhiet tinh khong</p>
            <p>Rat nhiet tinh</p>
            <button onClick={this.handleToggleDisplay}>CLick!</button>
          </div>
        )}
      </div>
    );
  }
}

export default ChildrentComp;
