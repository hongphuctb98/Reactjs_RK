import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import axios from "axios";
function DemoAxios() {
  const handleAxiosGet = () => {
    axios
      .get("http://localhost:8000/users")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const handleAxiosPost = () => {
    axios
      .post("http://localhost:8000/users", {
        name: "Kaido",
        email: "Kaido@gmail.com",
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  const handleAxiosPut = () => {
    axios
      .put("http://localhost:8000/users/4", {
        name: "chihuahua",
        email: "chihuahua@gmail.com",
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const handleAxiosPatch = () => {
    axios
      .patch("http://localhost:8000/users/4", {
        name: "chihuahua",
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const handleAxiosDelete = () => {
    axios
      .delete("http://localhost:8000/users/1")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  // Post axios
  return (
    <div>
      <h2>DemoAxios</h2>

      <ButtonGroup>
        <Button variant="contained" onClick={handleAxiosGet}>
          get axios
        </Button>
        <Button variant="contained" onClick={handleAxiosPost}>
          post axios
        </Button>
        <Button variant="contained" onClick={handleAxiosPut}>
          Put axios
        </Button>
        <Button variant="contained" onClick={handleAxiosPatch}>
          Patch axios
        </Button>
        <Button variant="contained" onClick={handleAxiosDelete}>
          Delete axios
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default DemoAxios;
