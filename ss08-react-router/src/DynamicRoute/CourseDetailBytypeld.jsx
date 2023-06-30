import React from "react";
import { useParams } from "react-router-dom/dist";

function CourseDetailBytypeld() {
  const param = useParams();
  console.log(param);
  return (
    <div>
      Course: {param.id} , {param.type}
    </div>
  );
}

export default CourseDetailBytypeld;
