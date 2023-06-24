import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

function DemoBootstrap() {
  let courses = [
    {
      id: 1,
      name: "HTML",
    },
    {
      id: 2,
      name: "CSS",
    },
    {
      id: 3,
      name: "JavaScript",
    },
  ];

  const handleSubmit = () => {
    console.log({ id: checked });
  };
  const [checked, setChecked] = useState([]);
  console.log(checked);
  const handleCheck = (id) => {
    setChecked(
      !checked.includes(id)
        ? [...checked, id]
        : checked.filter((item) => item !== id)
    );
  };
  return (
    <div>
      {courses.map((course, id) => (
        <div>
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onAbort={handleSubmit}>Click</button>
    </div>
  );
}

export default DemoBootstrap;
