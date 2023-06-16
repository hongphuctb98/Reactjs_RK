import React, { Component } from "react";

class DemoForm2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: "html",
    };
  }

  handleChange = (e) => {
    this.setState({
      course: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert("content is " + this.state.course);
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">Selec course</label>
          <select
            name=""
            id=""
            value={this.state.course}
            onChange={this.handleChange}
          >
            <option value="html">html</option>
            <option value="js">js</option>
            <option value="css">css</option>

            <option value="reactjs">reactjs</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default DemoForm2;
