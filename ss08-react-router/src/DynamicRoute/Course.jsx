import React from "react";
import { useParams, useSearchParams } from "react-router-dom/dist";

function Course() {
  const [searchParam, setSearchParam] = useSearchParams();
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>Stt</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Reactjs</td>
            <td>200</td>
            <td>
              <button
                onClick={() =>
                  setSearchParam({ Course: "Racejs", Price: "200" })
                }
              >
                Detail
              </button>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>Nodejs</td>
            <td>180</td>
            <td>
              <button
                onClick={() =>
                  setSearchParam({ Course: "Nodejs", Price: "180" })
                }
              >
                Detail
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <h3> Chi tiết khoa học</h3>
      <p>
        Name: {searchParam.get("Course")} - price {searchParam.get("Price")}
      </p>
    </div>
  );
}

export default Course;
