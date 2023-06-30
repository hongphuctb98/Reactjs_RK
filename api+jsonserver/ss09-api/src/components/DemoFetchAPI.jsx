import React, { useEffect, useState } from "react";

function DemoFetchAPI() {
  const [dataUser, setDataUser] = useState([]);
  const handeGetFetchAPI = () => {
    fetch("http://localhost:8000/users")
      .then((res) => res.json())
      .then((data) => setDataUser(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => res.json())
      .then((data) => setDataUser(data))
      .catch((err) => console.log(err));
  }, []);
  const handePostFetchAPI = () => {
    // post data
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "zoro",
        email: "zoro@gmail.com",
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log("data==", data))
      .catch((err) => console.log(err));

    // get data
    // fetch("http://localhost:8000/users")
    //   .then((res) => res.json())
    //   .then((data) => setDataUser(data))
    //   .catch((err) => console.log(err));
  };

  const handePutFetchAPI = () => {
    fetch("http://localhost:8000/users/4", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "BigMom",
        email: "zoro@gmail.com",
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log("data==", data))
      .catch((err) => console.log(err));
  };

  const handePatchFetchAPI = () => {
    fetch("http://localhost:8000/users/4", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Tao thao",
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log("data==", data))
      .catch((err) => console.log(err));
  };

  const handeDeleteFetchAPI = (index) => {
    fetch(`http://localhost:8000/users/${index}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log("data==", data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>DemoFetchAPI</h1>
      <button onClick={handeGetFetchAPI}>Get Fetch API</button>
      <button onClick={handePostFetchAPI}>Post Fetch API</button>
      <button onClick={handePutFetchAPI}>Put Fetch API</button>
      <button onClick={handePatchFetchAPI}>Patch Fetch API</button>
      <button onClick={() => handeDeleteFetchAPI(1)}>Delete Fetch API</button>

      <p>Table data</p>
      <table border={1}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {dataUser.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DemoFetchAPI;
