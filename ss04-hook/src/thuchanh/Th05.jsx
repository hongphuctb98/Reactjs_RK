import React, { useState } from "react";

function Th05() {
  const [data, setData] = useState([
    { name: "John", age: 25 },
    { name: "Mary", age: 30 },
    { name: "Peter", age: 35 },
    { name: "Jane", age: 40 },
  ]);

  const [filteredData, setFilteredData] = useState([...data]);

  const [text, setText] = useState("");

  const handleSearch = () => {
    setFilteredData(
      data.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {(filteredData ? filteredData : data).map((item) => (
          <li>
            {item.name}-{item.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Th05;
