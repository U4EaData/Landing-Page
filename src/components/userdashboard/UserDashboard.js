import React, { useEffect, useState } from "react";
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
import axios from 'axios';

const UserDashboard = (props) => {
  // user object is also in props, gonna just use the one in local storage for now
  const navigate = useNavigate();
  const getUser = localStorage.getItem("u4ea-user");
  const user = JSON.parse(getUser) || [];
  const [userEntries, setUserEntries] = useState([]);

  useEffect(() => {
    // Make the GET request
    fetchUserEntries(); // Call the function to fetch user entries
  }, []);

  const fetchUserEntries = async () => {
    try {
      const response = await axios.get(`http://localhost:3500/entries?userID=${user.id}`);
      if (response.status === 200) {
        setUserEntries(response.data); 
      } 
      else {
        console.log("Received a response, but not a success");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log("No entries found for the user");
      } else {
        console.error("Error fetching user entries:", error);
      }
    }
  };

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
