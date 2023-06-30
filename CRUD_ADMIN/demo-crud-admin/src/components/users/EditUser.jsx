import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    address: "",
  });
  const { name, phone, email, age, address } = data;
  const handleChangeInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();
  const { id } = useParams();
  const loadUser = async () => {
    let result = await axios.get(`http://localhost:5000/users/${id}`);
    setData(result.data);
  };
  useEffect(() => {
    loadUser();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/users/${id}`, data);
    navigate("/");
  };
  return (
    <div>
      <div className="mx-auto shadow p-5 w-75">
        <Button onClick={() => navigate(-1)}>back</Button>
        <h2>Edit User</h2>
        <form className="row g-3 w-50 mx-auto" onSubmit={handleSubmit}>
          <div className="col-md-12">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputPassword4"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="inputCity" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputCity"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputZip" className="form-label">
              Age
            </label>
            <input
              type="text"
              className="form-control"
              id="inputZip"
              name="age"
              value={age}
              onChange={handleChangeInput}
            />
          </div>
          <div className="col-md-8">
            <label htmlFor="inputZip" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="inputZip"
              name="phone"
              value={phone}
              onChange={handleChangeInput}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              name="address"
              value={address}
              onChange={handleChangeInput}
            />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
