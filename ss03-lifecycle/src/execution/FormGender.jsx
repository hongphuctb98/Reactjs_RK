import React, { Component } from "react";

class FormGender extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: "",
    };
  }

  render() {
    return (
      <div>
        <form action="">
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
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default FormGender;
