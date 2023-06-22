import React, { useEffect, useState } from "react";

function Form({
  handleSubmitAdd,
  handleSubmitUpdate,
  selectedStudent,

  actionName,
}) {
  const [formInput, setFormInput] = useState({
    id: "",
    name: "",
    age: 0,
    gender: true,
    address: "",
    place: "",
    birthDay: "",
  });
  const handleChangeInput = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const { id, name, age, gender, address, place, birthDay } = formInput;
  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleSubmitAdd(formInput, false);
  };

  const handleUploadForm = (e) => {
    e.preventDefault();
    handleSubmitUpdate(formInput, false);
  };

  useEffect(() => {
    setFormInput(selectedStudent);
  }, [selectedStudent]);
  return (
    <div className="col-5 grid-margin">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Thông tin sinh viên</h3>
          <form className="form-sample">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Mã sinh viên</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  value={id}
                  name="id"
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  name="name"
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  value={age}
                  name="age"
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  value={gender}
                  name="gender"
                  onChange={handleChangeInput}
                >
                  <option value="true">Nam</option>
                  <option value="false">Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input
                  className="form-control"
                  value={birthDay}
                  name="birthDay"
                  placeholder="dd/mm/yyyy"
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  value={place}
                  name="place"
                  onChange={handleChangeInput}
                >
                  <option value={"HN"}>Hà Nội</option>
                  <option value={"HCM"}>TP. Hồ Chí Minh</option>
                  <option value={"DN"}>Đà Nẵng</option>
                  <option value={"QN"}>Quảng Ninh</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea
                  className="form-control"
                  defaultValue={""}
                  value={address}
                  name="address"
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            {actionName == "Add" ? (
              <button
                type="submit"
                className="btn btn-primary me-2"
                onClick={handleSubmitForm}
              >
                Submit
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-primary me-2"
                onClick={handleUploadForm}
              >
                Upload
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
