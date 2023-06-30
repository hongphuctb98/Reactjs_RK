import React from "react";
import { useParams } from "react-router-dom/dist";

function CoureseDetail() {
  // UseParams
  const paramId = useParams();
  console.log(paramId);
  return <div>Course: {paramId.id}</div>;
}

export default CoureseDetail;
