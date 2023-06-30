import React from "react";
import LayoutNavbar from "../layout/LayoutNavbar";
import Container from "react-bootstrap/Container";

function ContactPage() {
  return (
    <div>
      <LayoutNavbar></LayoutNavbar>
      <>
        <Container>
          <h2 style={{ textAlign: "center", margin: "20px 0" }}>
            Contact Page
          </h2>
          <div style={{ width: "400px", margin: "0 auto" }}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Example textarea
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                defaultValue={""}
              />
            </div>
          </div>
        </Container>
      </>
    </div>
  );
}

export default ContactPage;
