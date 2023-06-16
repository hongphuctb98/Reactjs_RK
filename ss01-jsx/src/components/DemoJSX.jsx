import React, { Component } from "react";

class DemoJSX extends Component {
  render() {
    const greeting = "Hello, world!";
    const people = {
      name: "phuc",
      age: 24,
      course: "ReactJS",
    };
    return (
      <div>
        {/* phép nội suy */}
        {/* lưu ý:
          + class=> className
          + các thuộc tính viết theo camelCase ví dụ: backgroundColor
          + các sự kiện cũng viết teo kiểu CamelCase: onclick => onClick, onchange => onChange
        */}
        <h2
          style={{ color: "red", backgroundColor: "pink" }}
          className="container"
        >
          {greeting}
        </h2>
        <p>
          studentName: {people.name}- course: {people.course}
        </p>
      </div>
    );
  }
}

export default DemoJSX;
