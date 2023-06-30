import React from "react";
import { Outlet } from "react-router-dom/dist";

function ContactPage() {
  return (
    <div>
      con tac page
      <Outlet></Outlet>
    </div>
  );
}

export default ContactPage;
