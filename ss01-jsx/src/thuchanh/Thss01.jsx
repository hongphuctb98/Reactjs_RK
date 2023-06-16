import React, { Component } from "react";

class Thss01 extends Component {
  render() {
    const courses = [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS" },
      { id: 3, name: "JavaScript" },
      { id: 4, name: "React" },
    ];

    // const reactEement = React.createElement(
    //   "h1",
    //   { title: "hi", className: "h1-class" },
    //   "Hi anh em "
    // );
    // return reactEement;

    return (
      <div>
        <ul>
          {courses.map((course) => (
            <li key={course.id}>{course.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Thss01;
