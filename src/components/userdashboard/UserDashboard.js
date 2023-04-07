import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import classes from "../navbar/NavSection.module.css";
import userClasses from "./UserDashboard.module.css";
import { useNavigate } from "react-router-dom";
import appClasses from "../../App.module.css";

const UserDashboard = (props) => {
  const navigate = useNavigate();
  const getUser = localStorage.getItem("u4ea-user");
  const user = JSON.parse(getUser) || [];

  return (
    <>
      <div className={userClasses.dashNav}>
        <Container fluid className={classes.dashboardNav}>
          <Navbar
            collapseOnSelect
            expand="lg"
            className={classes.mainbackground}
          >
            <Navbar.Brand className={classes.navbarbrand} href="/">
              U4Ea
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="text-center">
              <Nav className="ms-auto" id={classes.linkspacing}>
                <Nav.Link href="/" id={appClasses.nlink}>
                  Home
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="dash-responsive-navbar-nav"
              className="text-center dashy"
            >
              <Nav
                className="ms-auto"
                id={(classes.itemfont, classes.linkspacing)}
              >
                <Nav.Link
                  id={appClasses.nlink}
                  className={appClasses.buttonsize}
                  onClick={() => navigate("/")}
                >
                  Go back
                </Nav.Link>
              </Nav>
            </Navbar.Collapse> */}
          </Navbar>
        </Container>
      </div>
      <section className={appClasses.sectionContainer}>
        <div className={userClasses.dashboardContainer}>
          <div className={userClasses.welcomeContainer}>
            {user && (
              <span
                className={userClasses.userName}
              >{`Welcome ${user.name}`}</span>
            )}
          </div>
          <h4 className={userClasses.comingSoon}>Coming soon...!</h4>
        </div>
      </section>
    </>
  );
};

export default UserDashboard;
