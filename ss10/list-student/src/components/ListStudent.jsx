import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function ListStudent() {
  const listStudent = useSelector((state) => state.render);
  console.log(listStudent);
  return (
    <div>
      <h2>List Student</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {listStudent.map((student, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.gender ? "Nam" : "Nu"}</td>
              <td>{student.class}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListStudent;
