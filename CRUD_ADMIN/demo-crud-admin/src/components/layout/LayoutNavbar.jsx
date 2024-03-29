import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

function LayoutNavbar({ setData }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <Link className="mx-5" to={"/user/add"}>
            <Button variant="outline-success">ADD</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default LayoutNavbar;
