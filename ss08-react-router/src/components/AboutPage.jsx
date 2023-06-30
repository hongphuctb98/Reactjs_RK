import React from "react";
import { useLocation } from "react-router-dom/dist";

function AboutPage() {
  const data = useLocation();
  console.log(data);
  return <div>AboutPage</div>;
}

export default AboutPage;
