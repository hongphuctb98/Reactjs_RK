import React, { useEffect } from "react";

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import { useState } from "react";
import axios from "axios";
import LayoutNavbar from "../layout/LayoutNavbar";
import { Link } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";

function HomePage() {
  const [data, setData] = useState([]);

  const handleDele = async (id) => {
    await axios.delete(`http://localhost:5000/users/${id}`);
    loadUser();
    // .then(() => loadUser())
    // .catch((err) => console.log(err));
  };

  //sort
  const [searchInput, setSearchInput] = useState();
  const [sortType, setSortType] = useState("asc");
  const [text, setText] = useState("");

  const handleSort = (text) => {
    setSortType(sortType === "asc" ? "desc" : "asc");
    setText(text);
  };

  //pagination
  const [perPage, setPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const loadUser = async () => {
    let url = "http://localhost:5000/users";

    if (searchInput) {
      url += `?name_like=${searchInput}`;
    } else {
      if (sortType) {
        url += `?_sort=${text}&_order=${sortType}`;
      }
    }

    const countRepone = await axios.get(`${url}?_page=1&_limit=1&_count=true`);
    const pages = Math.ceil(countRepone.headers["x-total-count"] / perPage);

    // axios
    //   .get(url)
    //   .then((res) => setData(res.data))
    //   .catch((err) => console.log(err));
    const response = await axios.get(
      `${url}&_page=${currentPage}&_limit=${perPage}`
    );
    setData(response.data);
  };

  useEffect(() => {
    loadUser();
  }, [searchInput, sortType, currentPage]);

  const paginateList = [];
  for (let i = 1; i < totalPages; i++) {
    paginateList.push(
      <Pagination.Item
        key={i + 1}
        active={i === currentPage}
        onClick={() => setCurrentPage(i)}
      >
        {i}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <LayoutNavbar setData={setData}></LayoutNavbar>;
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>Home Page</h2>
      <div className="d-flex align-items-center justify-content-end">
        <div
          className="d-flex"
          role="search"
          // onSubmit={handleChangeInput}
          style={{ width: "300px" }}
        >
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            className="btn btn-outline-success"
            type="submit"
            onClick={loadUser}
          >
            Search
          </button>
        </div>
      </div>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                Stt <i class="fa-solid fa-sort"></i>
              </th>
              <th onClick={() => handleSort("id")}>
                ID <i class="fa-solid fa-sort"></i>
              </th>

              <th onClick={() => handleSort("name")}>
                Name <i class="fa-solid fa-sort"></i>
              </th>
              <th>Phone</th>
              <th>Email</th>
              <th onClick={() => handleSort("age")}>
                Age <i class="fa-solid fa-sort"></i>
              </th>
              <th onClick={() => handleSort("address")}>
                Address <i class="fa-solid fa-sort"></i>
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.id}</td>

                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.age}</td>
                <td>{item.address}</td>
                <td style={{ width: "100px" }}>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDele(item.id)}
                    >
                      Del
                    </button>
                    <Link to={`/user/edit/${item.id}`}>
                      <button type="button" className="btn btn-warning">
                        Edit
                      </button>
                    </Link>
                    <Link to={`/user/infor/${item.id}`}>
                      <button type="button" className="btn btn-info">
                        View
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="d-flex justify-content-center">
          <Pagination>
            <Pagination.Prev />
            {paginateList.map((item) => item)}
            {/* <Pagination.Ellipsis /> */}

            <Pagination.Next />
          </Pagination>
        </div>
      </Container>
    </div>
  );
}

export default HomePage;
