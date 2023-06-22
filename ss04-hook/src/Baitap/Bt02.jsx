import React, { useState } from "react";

function Bt02() {
  const [length, setLength] = useState(0);
  return (
    <div>
      <textarea
        cols="30"
        rows="10"
        onChange={(e) => setLength(e.target.value.length)}
      ></textarea>
      <p>Text count: {length}</p>
    </div>
  );
}

export default Bt02;
