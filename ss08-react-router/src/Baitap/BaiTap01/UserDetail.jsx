import React from "react";
import { useParams } from "react-router-dom/dist";

function UserDetail() {
  const path = useParams();
  console.log(path);
  return <div>UserDetail: {path.item}</div>;
}

export default UserDetail;
