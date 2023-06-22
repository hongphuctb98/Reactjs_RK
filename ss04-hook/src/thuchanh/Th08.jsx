import React, { useState } from "react";

function Th08() {
  const [weight, setWeight] = useState(0);
  const [shippingMethod, setShippingMethod] = useState("ground");
  const [shippingCost, setShippingCost] = useState(0);

  const calculateShippingCost = () => {
    shippingMethod === "ground"
      ? setShippingCost(weight * 0.5)
      : setShippingCost(weight * 2);
  };
  return (
    <div>
      <div>
        <label>Weight:</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label>Shipping Method:</label>
        <select
          value={shippingMethod}
          onChange={(e) => setShippingMethod(e.target.value)}
        >
          <option value="ground">Ground</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <button onClick={calculateShippingCost}>Calculate Shipping Cost</button>
      <div>
        <label>Shipping Cost:</label>
        <span>{`$${shippingCost.toFixed(2)}`}</span>
      </div>
    </div>
  );
}

export default Th08;
