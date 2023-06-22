import React, { useState } from "react";
import ColorPicker from "./ColorPicker";

function IndexColor() {
  const [color, setColor] = React.useState("#000000");
  const [student, setStudent] = useState({
    id: "",
    name: "",
    age: "",
    gender: "",
    birthday: "",
    place: "",
    address: "",
  });
  const handleChangeColor = (e) => {
    setColor(e);
  };
  return (
    <div>
      <h2>Lifting state up</h2>
      <ColorPicker
        changeColor={handleChangeColor}
        student={student}
        setStudent={setStudent}
      />
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: color,
          margin: "0 auto",
          marginTop: "100px",
        }}
      ></div>
    </div>
  );
}

export default IndexColor;
