import React, { Component } from "react";

class FormGender extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: "",
    };
  }
  onValueChhange = (e) => {
    this.setState({
      selectedOption: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="">
              <input
                value="Male"
                onChange={this.onValueChhange}
                checked={this.state.selectedOption === "Male"}
                type="radio"
              />
              Male
            </label>
          </div>
          <div>
            <label htmlFor="">
              <input
                value="Female"
                onChange={this.onValueChhange}
                checked={this.state.selectedOption === "Female"}
                type="radio"
              />
              Female
            </label>
          </div>
          <div>
            <label htmlFor="">
              <input
                value="Other"
                onChange={this.onValueChhange}
                checked={this.state.selectedOption === "Other"}
                type="radio"
              />
              Other
            </label>
          </div>
          <p>Selected option is: {this.state.selectedOption}</p>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default FormGender;
