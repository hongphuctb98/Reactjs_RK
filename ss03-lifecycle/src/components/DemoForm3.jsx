import React, { Component } from "react";

class DemoForm3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studenName: "",
      age: "",
      course: "",
    };
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `name is ${this.state.studenName} and age is ${this.state.age} and course is ${this.state.course}`
    );
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">Student name:</label>
          <input
            name="studenName"
            type="text"
            value={this.state.studenName}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="">Student age:</label>
          <input
            name="age"
            type="text"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <br />

          <label htmlFor="">Course</label>
          <select
            name="course"
            id=""
            value={this.state.course}
            onChange={this.handleChange}
          >
            <option value="html">html</option>
            <option value="js">js</option>
            <option value="css">css</option>

            <option value="reactjs">reactjs</option>
          </select>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default DemoForm3;
