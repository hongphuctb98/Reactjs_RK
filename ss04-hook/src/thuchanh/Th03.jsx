import React, { useState } from "react";

function Th03() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ]);

  return (
    <div>
      <ul>
        {products.map((product, i) => (
          <li key={i}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Th03;
