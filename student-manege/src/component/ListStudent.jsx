import React from "react";
import Student from "./Student";

function ListStudent({
  listStudent,
  handleDeleteStudent,
  handleUpdateStudent,
  actionName,
}) {
  const handleDelete = (index) => {
    handleDeleteStudent(index);
  };

  const handleUpdate = (student, toggle, actionName) => {
    handleUpdateStudent(student, toggle, actionName);
  };
  return (
    <div>
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {listStudent.map((student, index) => (
                <Student
                  student={student}
                  keyStudent={index}
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListStudent;
