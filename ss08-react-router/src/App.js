import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";

// import ContactPage from "./Baitap/BaiTap01/ContactPage";
// import HomePage from "./Baitap/BaiTap01/HomePage";
// import AboutPage from "./Baitap/BaiTap01/AboutPage";
import { Link, NavLink } from "react-router-dom/dist";
import ContactProducts from "./components/ContactProducts";
import ContactUser from "./components/ContactUser";
import ContactIndex from "./components/ContactIndex";
import { Container, Nav, Navbar } from "react-bootstrap";
import UserPage from "./Baitap/BaiTap01/UserPage";
import UserDetail from "./Baitap/BaiTap01/UserDetail";
import ErrorPage from "./components/ErrorPage";
import DemoNavigate from "./components/DemoNavigate";
import Course from "./DynamicRoute/Course";
import CoureseDetail from "./DynamicRoute/CoureseDetail";
import CourseDetailBytypeld from "./DynamicRoute/CourseDetailBytypeld";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
import Account from "./PrivateRouter/Account";
import Person from "./PrivateRouter/Person";
import Home02 from "./BaiTh/Th02/Home02";
import { Button, Stack } from "@mui/material";

const activeBgColor = ({ isActive }) => (
  { color: isActive ? "red" : "black" },
  { backgroundColor: isActive ? "yellow" : "white" }
);

function App() {
  return (
    <div>
      {/* sử dụng link */}
      {/* <ul>
        <li>
          <Link to="/"> HomePage</Link>
        </li>
        <li>
          <Link to="/about"> AboutPage</Link>
        </li>
        <li>
          <Link to="/contact"> ContactPage</Link>

          <ul>
            <li>
              <Link to="/contact/contact-product"> ContactProducts</Link>
            </li>
            <li>
              <Link to="/contact/contact-user"> ContactUser</Link>
            </li>
          </ul>
        </li>
      </ul> */}
      {/* sử dụng nav link */}
      <ul>
        <li>
          <NavLink style={activeBgColor} to="/">
            HomePage
          </NavLink>
        </li>
        <li>
          <NavLink style={activeBgColor} to="/about">
            AboutPage
          </NavLink>
        </li>
        <li>
          <NavLink style={activeBgColor} to="/contact">
            ContactPage
          </NavLink>

          <ul>
            <li>
              <NavLink style={activeBgColor} to="/contact/contact-product">
                ContactProducts
              </NavLink>
            </li>
            <li>
              <NavLink style={activeBgColor} to="/contact/contact-user">
                ContactUser
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
      {/* demo navigate */}
      <DemoNavigate />

      <div>
        <Stack spacing={2} direction="row">
          <NavLink to="/">
            <Button variant="contained">Home</Button>
          </NavLink>
          <NavLink to=""></NavLink>

          <Button variant="contained">About</Button>
          <Button variant="contained">Contact</Button>
          <Button variant="contained">PorrtFolio</Button>
        </Stack>
      </div>
      {/*  */}
      <Routes>
        {/* */}
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/contact" element={<ContactPage />}>
          {/* Index router contact */}
          <Route index element={<ContactIndex />}></Route>
          {/* ested router */}
          <Route path="contact-user" element={<ContactUser />}>
            Contact user
          </Route>
          <Route path="contact-product" element={<ContactProducts />}>
            Contact product
          </Route>
        </Route>
        {/* Tao route loi */}
        <Route path="*" element={<ErrorPage />}></Route>

        <Route path="/course" element={<Course />}></Route>
        <Route path="/course/:id" element={<CoureseDetail />}></Route>
        <Route
          path="/course/:id/:type"
          element={<CourseDetailBytypeld />}
        ></Route>
        <Route element={<PrivateRouter />}>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/person" element={<Person />}></Route>
        </Route>

        <Route path="/" element={<Home02 />}></Route>
      </Routes>
    </div>

    // <div>
    //   <Navbar bg="primary" data-bs-theme="dark">
    //     <Container>
    //       <Nav className="me-auto">
    //         <Nav.Link>
    //           <NavLink to="/">Home</NavLink>
    //         </Nav.Link>
    //         <Nav.Link>
    //           <NavLink to="/about">About</NavLink>
    //         </Nav.Link>
    //         <Nav.Link>
    //           <NavLink to="/user">User</NavLink>
    //         </Nav.Link>
    //         <Nav.Link>
    //           <NavLink to="/contact">Contact</NavLink>
    //         </Nav.Link>
    //       </Nav>
    //     </Container>
    //   </Navbar>
    //   <Routes>
    //     <Route path="/" element={<HomePage />}></Route>
    //     <Route path="/about" element={<AboutPage />}></Route>
    //     <Route path="/user" element={<UserPage />}></Route>
    //     <Route path="/user/:item" element={<UserDetail />}></Route>
    //     <Route path="/contact" element={<ContactPage />}></Route>
    //   </Routes>
    // </div>
  );
}

export default App;
