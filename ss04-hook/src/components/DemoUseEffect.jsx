import React, { useState, useEffect } from "react";

function DemoUseEffect() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  //Th1
  // useEffect(() => {
  //   console.log("useEffect");
  // });

  //Th2

  // useEffect(() => {
  //   console.log("useEffect running");
  // }, []);

  //Th3
  useEffect(() => {
    console.log("useEffect running");
  }, []);

  return (
    <div>
      <h2>Demo Effect</h2>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      {console.log("re-render")}

      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>up</button>
      <button onClick={() => setCount(count - 1)}>Down</button>
    </div>
  );
}

export default DemoUseEffect;
