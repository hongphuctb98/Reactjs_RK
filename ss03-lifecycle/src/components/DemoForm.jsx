import React, { Component } from "react";

class DemoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    alert("content is " + this.state.text);
  };

  render() {
    console.log(this.state.text);
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">Student Name</label>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default DemoForm;
