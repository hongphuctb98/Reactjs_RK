import React, { useState, useEffect } from "react";

function DemouseState() {
  // const [nameState, setNameState] = useState("Helo world");

  //  number
  const [count, setCount] = useState(0);

  //String
  const [text, setText] = useState("Chihuahua");

  const handleChangeState = () => {
    setText("Shiba");
  };

  //boolean

  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(toggle ? false : true);
  };

  // Array
  const [arrayList, setArrayList] = useState([1, 2, 3, 4]);

  const handRandomNumber = () => {
    setArrayList([...arrayList, Math.floor(Math.random() * 10)]);
  };

  //Object +Array

  const [listUser, setListUser] = useState([
    { id: 1, name: "Usami", age: 22 },
    { id: 2, name: "Cookie", age: 30 },
  ]);

  // Object

  const [objList, setObjList] = useState({
    objCount: 10,
    objArr: [1, 2, 3, 4],
  });

  const handRandomObject = () => {
    setObjList({
      objCount: objList.objCount,
      objArr: [...objList.objArr, Math.floor(Math.random() * 10)],
    });
  };

  return (
    <div>
      <h2>Demo useState</h2>
      <h3>Number: </h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Up</button>
      <button onClick={() => setCount(count - 1)}>Down</button>

      <h3>String: </h3>
      <p>{text}</p>
      <button onClick={handleChangeState}>Change state</button>

      <h3>Boolean: </h3>

      {toggle ? <h4>True</h4> : <h4>False</h4>}

      <button onClick={handleToggle}>Change state</button>

      <h3>Array: </h3>
      <p>{arrayList.join(", ")}</p>
      <p>{arrayList.toString()}</p>
      <button onClick={handRandomNumber}>Random Number</button>

      <h3>Object + Array: </h3>
      <table border={1}>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>

        {listUser.map((user, i) => (
          <tr key={i}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
          </tr>
        ))}
      </table>

      <h3>Object: </h3>
      <p>{objList.objCount}</p>
      <button
        onClick={() =>
          setObjList({ objCount: objList.objCount + 1, objArr: objList.objArr })
        }
      >
        Up
      </button>
      <button
        onClick={() =>
          setObjList({ objCount: objList.objCount - 1, objArr: objList.objArr })
        }
      >
        Down
      </button>

      <p>{objList.objArr.join(", ")}</p>
      <button onClick={handRandomObject}>Random</button>
    </div>
  );
}

export default DemouseState;
