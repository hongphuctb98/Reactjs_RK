import React from "react";

function ColorPicker(props) {
  console.log(props);

  const handleColor = (e) => {
    props.changeColor(e.target.value);
  };

  const handleAdd = () => {
    console.log(props.student);
  };
  return (
    <div>
      <button onClick={handleAdd}>add</button>
      <input type="color" onChange={handleColor} />
    </div>
  );
}

export default ColorPicker;
