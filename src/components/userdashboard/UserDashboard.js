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
