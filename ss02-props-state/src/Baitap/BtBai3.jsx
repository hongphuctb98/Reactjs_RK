import React, { Component } from "react";

class BtBai3 extends Component {
  constructor() {
    super();
    this.state = {
      textContent: "",
      isShow: false,
    };
  }

  handleSumbitForm = (e) => {
    e.preventDefault();
  };
  handleChange = (e) => {
    this.setState({
      textContent: e.target.value,
    });
  };
  handleClick = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSumbitForm}>
          <input type="text" onChange={this.handleChange} />
          <button onClick={this.handleClick}>Cick me !</button>
        </form>
        {this.state.isShow ? <p>{this.state.textContent}</p> : null}
      </div>
    );
  }
}

export default BtBai3;
