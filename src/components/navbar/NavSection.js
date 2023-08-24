import React, { useEffect, useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navLink from "../../App.module.css";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import LoginForm from "../loginform/LoginForm";
import RegisterForm from "../registerform/RegisterForm";
import classes from "./NavSection.module.css";
import $ from "jquery";
import jquery from "jquery";
import { click } from "@testing-library/user-event/dist/click";

function NavSection(props) {
  /* Hooks */
  const [form, setForm] = useState("login");
  const [showForm, setShowForm] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [dropdownLinkClick, setDropdownLinkClick] = useState(false);
  /* Refs */
  const loginLinkRef = useRef(null);
  const formRef = useRef(null);
  const testRef = useRef(null);
  const testRef2 = useRef(null);
  const dropdownRef = useRef(null);
  /* Storage */
  const getUser = localStorage.getItem("u4ea-user");
  const user = JSON.parse(getUser) || [];

  const userDropdownDisplay = (
    <ul className={classes.userdropdown} id="userdropdown">
      <li>
        <Nav.Link href="/userdashboard">User Dashboard</Nav.Link>
      </li>
      <li>
        <Nav.Link href="/" onClick={props.signout}>
          Sign out
        </Nav.Link>
      </li>
    </ul>
  );

  const closeUserdropdown = (e) => {
    if (
      testRef.current &&
      showDropDown &&
      !testRef.current.contains(e.target)
    ) {
      setShowDropDown(false);
      document.removeEventListener("mousedown", closeUserdropdown);
    } else if (
      testRef2.current &&
      showForm &&
      !testRef2.current.contains(e.target)
    ) {
      setShowForm(false);
      document.removeEventListener("mousedown", closeUserdropdown);
    } else if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      const menuToggle = document.getElementById("navbarSupportedContent");
      console.log(menuToggle);
      document.removeEventListener("mousedown", closeUserdropdown);
    }
  };

  document.addEventListener("mousedown", closeUserdropdown);

  const toggleDropdown = () => {
    setShowDropDown((prev) => !prev);
  };

  const toggleForm = (e) => {
    if (e === "signInLink" || e.target.id === "signInLink") {
      setForm((prev) => "login");
    } else if (e.target.id === "registerLink") {
      setForm((prev) => "register");
    }
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <Container className={classes.mynavcontainer}>
      <Navbar collapseOnSelect expand="lg" className={classes.mainbackground}>
        <Navbar.Brand className={classes.navbarbrand} href="#home">
          U4Ea
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="text-center">
          <Nav className="ms-auto" id={classes.linkspacing}>
            <Nav.Link href="/" id={navLink.nlink}>
              Home
            </Nav.Link>
            <Nav.Link href="/about" id={navLink.nlink}>
              About
            </Nav.Link>
            <Nav.Link href="/resources" id={navLink.nlink}>
              Resources
            </Nav.Link>
            {/* <Nav.Link href="#signup" id={navLink.nlink}>
              Contact Us
            </Nav.Link> */}
            {user.name ? (
              <div className={classes.usercontainer}>
                <div className={classes.dropdowncontainerMobile}>
                  <div className={classes.navHr}>
                    <hr />
                  </div>
                  <div className={classes.usernameMobile}>{user.name}</div>
                  <Nav.Link href="/userdashboard" id={navLink.nlink}>
                    User Dashboard
                  </Nav.Link>

                  <Nav.Link href="/" onClick={props.signout} id={navLink.nlink}>
                    Sign out
                  </Nav.Link>
                </div>

                <div className={classes.dropdowncontainer} ref={testRef}>
                  <div className={classes.username}>{user.name}</div>
                  <div>
                    <IoIosArrowDropdown
                      className={classes.downarrow}
                      onClick={toggleDropdown}
                      color="#FFFF"
                    />
                  </div>
                  {showDropDown ? userDropdownDisplay : null}
                </div>
              </div>
            ) : (
              <div className={classes.navlogincontainer} ref={testRef2}>
                <FaUserCircle className={classes.usericon} color="#FFFF" />
                <div
                  className={`${classes.navLogin} login-link`}
                  onClick={() => setShowForm((prev) => !prev)}
                  id="login-link"
                >
                  Login
                </div>
                {showForm && form === "login" ? (
                  <LoginForm
                    toggleForm={toggleForm}
                    onEmailChange={props.onEmailChange}
                    onPasswordChange={props.onPasswordChange}
                    user={props.user}
                    loadUser={props.loadUser}
                    closeForm={closeForm}
                  />
                ) : showForm && form === "register" ? (
                  <RegisterForm
                    toggleForm={toggleForm}
                    onEmailChange={props.onEmailChange}
                    onPasswordChange={props.onPasswordChange}
                    onNameChange={props.onNameChange}
                    user={props.user}
                    loadUser={props.loadUser}
                    closeForm={closeForm}
                  />
                ) : null}
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

$(function () {
  $(document).on("click", function (event) {
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass(
      "navbar-collapse collapse show"
    );
    if (
      _opened === true &&
      !clickover.hasClass("navbar-toggler") &&
      !clickover.hasClass("login-link")
    ) {
      $("button.navbar-toggler").click();
    }
  });
});

export default NavSection;
