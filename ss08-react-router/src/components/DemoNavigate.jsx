import React from "react";
import { useNavigate } from "react-router-dom/dist";

function DemoNavigate() {
  // useNavigate là hook được cung cấp bới react route dom. Dùng để chuyển trang
  const navigate = useNavigate();

  return (
    <div>
      {/*  sử dụng đẻ chuyển trang tự đọng  */}
      <button onClick={() => navigate("/about")}>Click go to about </button>
      <button onClick={() => navigate("/course")}>Course</button>
      {/* sử dụng navigate với history */}
      <button onClick={() => navigate(-1)}>Go to back 1</button>
      {/* sử dụng navigate với replace = true => sẽ k lưu lại lịch sư*/}
      <button onClick={() => navigate("/about", { replace: true })}>
        Go to HomePage width replace
      </button>

      {/* Sử dụng navigate để truyền dữ liệu  */}
      <button onClick={() => navigate("/about", { state: { name: "Data" } })}>
        Go to about with data
      </button>
    </div>
  );
}

export default DemoNavigate;
