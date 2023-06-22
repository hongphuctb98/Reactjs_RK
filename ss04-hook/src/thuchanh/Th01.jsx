import React, { useState, useEffect } from "react";

function Th01() {
  const [count, setCount] = useState(0);

  const handleup = () => {
    setCount(count + 1);
  };
  const handleDown = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleup}>up</button>
      <button onClick={handleDown}>Down</button>
    </div>
  );
}

export default Th01;
