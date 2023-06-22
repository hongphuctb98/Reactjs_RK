import React from "react";

function Control({ toggle, handleToggleAction, handleSearchStudent }) {
  const handleToggleAdd = () => {
    handleToggleAction(!toggle, "Add");
  };

  const handleSearch = (e) => {
    handleSearchStudent(e.target.value);
  };
  return (
    <div>
      <div className="card-header">
        <div className="row">
          <div className="col-3">
            <button
              type="button"
              className="btn btn-primary btn-icon-text"
              onClick={handleToggleAdd}
            >
              Thêm mới sinh viên
            </button>
          </div>
          <div className="col-6">
            <form className="search-form" action="#">
              <i className="icon-search" />
              <input
                type="search"
                className="form-control"
                placeholder="Search Here"
                title="Search here"
                onChange={handleSearch}
              />
              <button className="btn btn-primary btn-icon-text">
                Tìm kiếm
              </button>
            </form>
          </div>
          <div className="col-3 d-flex align-items-center">
            <select className="form-control">
              <option value="">Sắp xếp</option>
              <option value="">ABC def</option>
              <option value="">ABC def</option>
              <option value="">ABC def</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Control;
