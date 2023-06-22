import React, { useState } from "react";

function Th07() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);

  const handleCelChange = (e) => {
    let c = e.target.value;
    setCelsius(c);
    setFahrenheit(((c * 9) / 5 + 32).toFixed(2));
  };

  const handleFehChange = (e) => {
    let f = e.target.value;
    setFahrenheit(f);
    setCelsius((((f - 32) * 5) / 9).toFixed(2));
  };
  return (
    <div>
      <div>
        <label htmlFor="">Celsius: </label>
        <input type="text" value={celsius} onChange={handleCelChange} />
      </div>
      <div>
        <label htmlFor="">Fahrenheit: </label>
        <input type="text" value={fahrenheit} onChange={handleFehChange} />
      </div>
    </div>
  );
}

export default Th07;
