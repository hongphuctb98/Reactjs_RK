import React from "react";

function Student({ student, keyStudent, handleDelete, handleUpdate }) {
  const onDelete = (index) => {
    handleDelete(index);
  };
  const onUpdate = (student) => {
    handleUpdate(student, true, "Update");
  };
  return (
    <tr key={keyStudent}>
      <td>{keyStudent + 1}</td>
      <td>{student.id}</td>
      <td>{student.name}</td>
      <td>{student.age}</td>
      <td>{student.gender ? "Nam" : "Nữ"}</td>
      <td>
        <div className="template-demo">
          <button type="button" className="btn btn-danger btn-icon-text">
            Xem
          </button>
          <button
            type="button"
            className="btn btn-warning btn-icon-text"
            onClick={() => onUpdate(student)}
          >
            Sửa
          </button>
          <button
            type="button"
            className="btn btn-success btn-icon-text"
            onClick={() => onDelete(keyStudent)}
          >
            Xóa
          </button>
        </div>
      </td>
    </tr>
  );
}

export default Student;
