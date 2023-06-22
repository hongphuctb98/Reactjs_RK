import React, { useState } from "react";
import ListStudent from "./ListStudent";
import Control from "./Control";
import Form from "./Form";

function ParentCom() {
  const [toggle, setToggle] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState({});
  const [actionName, setActionName] = useState("Add");
  const [listStudent, setListStudent] = useState([
    {
      id: "SV001",
      name: "Nguyễn Văn A",
      age: 20,
      gender: false,
      address: "Đà Nẵng",
      place: "huyen, phường, xã",
      birthDay: "27/02/1998",
    },
    {
      id: "SV002",
      name: "Nguyễn Văn B",
      age: 18,
      gender: false,
      address: "Đà Nẵng",
      place: "huyen, phường, xã",
      birthDay: "27/02/1998",
    },
    {
      id: "SV003",
      name: "Nguyễn Văn C",
      age: 19,
      gender: true,
      address: "Đà Nẵng",
      place: "huyen, phường, xã",
      birthDay: "27/02/1998",
    },
  ]);
  const [searchList, setSearchList] = useState([]);

  const handleToggleAction = (toggle, actionName) => {
    setActionName(actionName);
    setToggle(toggle);
  };

  const handleSubmitAdd = (newStudent, toggle) => {
    setListStudent([...listStudent, newStudent]);
    setToggle(toggle);
  };

  const handleUpdateStudent = (student, toggle, actionName) => {
    setSelectedStudent(student);
    setToggle(toggle);
    setActionName(actionName);
  };

  const handleSubmitUpdate = (student, toggle) => {
    const update = listStudent.map((std) =>
      std.id == student.id ? student : std
    );
    setListStudent(update);
    setToggle(toggle);
  };

  //delete
  const handleDeleteStudent = (index) => {
    let newList = [...listStudent];
    newList.splice(index, 1);
    setListStudent(newList);
  };

  const handleSearchStudent = (search) => {
    let newList = [...listStudent];
    newList = newList.filter((search) =>
      search.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchList(newList);
  };
  return (
    <div>
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            {/* START CONTROL */}
            <Control
              handleSearchStudent={handleSearchStudent}
              handleToggleAction={handleToggleAction}
              toggle={toggle}
            />
            {/* END CONTROL */}
            {/* START LIST STUDENT */}
            <ListStudent
              listStudent={listStudent}
              handleDeleteStudent={handleDeleteStudent}
              handleUpdateStudent={handleUpdateStudent}
            />
            {/* END LIST STUDENT */}
          </div>
        </div>
        {/* START FORM SINH VIEN */}
        {toggle && (
          <Form
            handleSubmitAdd={handleSubmitAdd}
            handleSubmitUpdate={handleSubmitUpdate}
            selectedStudent={selectedStudent}
            actionName={actionName}
          />
        )}
        {/* END FORM SINH VIÊN */}
      </div>
    </div>
  );
}

export default ParentCom;
