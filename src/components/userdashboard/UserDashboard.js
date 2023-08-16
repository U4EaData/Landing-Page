import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import classes from "../navbar/NavSection.module.css";
import userClasses from "./UserDashboard.module.css";
import { useNavigate } from "react-router-dom";
import appClasses from "../../App.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const UserDashboard = (props) => {
  // user object is also in props, gonna just use the one in local storage for now
  const navigate = useNavigate();
  const getUser = localStorage.getItem("u4ea-user");
  const user = JSON.parse(getUser) || [];

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <section className={appClasses.sectionContainer}>
      <Container className={userClasses.dashboardContainer}>
        <Col className={userClasses.infoPanel}>
          <div className={userClasses.welcomeContainer}>
            <Row className={classes.iconContainer}>
              <div className={classes.iconWrapper}>
                <FontAwesomeIcon
                  icon={faUser}
                  className={classes.icon}
                  style={{ color: "#00000" }}
                />
              </div>
            </Row>
            <Col>
              <span className={userClasses.userName}>
                <b className={userClasses.userName}>{user.name}</b>
              </span>
            </Col>
            <Col>
              <span className={userClasses.email}>{user.email}</span>
            </Col>
          </div>
        </Col>
        <Col className={userClasses.infoPanel}>
          <div className={userClasses.welcomeContainer}>
            <span
              className={userClasses.userName}
            >{`Welcome ${user.name}`}</span>
          </div>
        </Col>
        <Col className={userClasses.infoPanel}>
          <div className={userClasses.welcomeContainer}>
            <span
              className={userClasses.userName}
            >{`Welcome ${user.name}`}</span>
          </div>
        </Col>
      </Container>
    </section>
  );
};

export default UserDashboard;
