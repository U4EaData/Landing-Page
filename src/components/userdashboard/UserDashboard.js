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
import { faBarChart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const UserDashboard = (props) => {
  // user object is also in props, gonna just use the one in local storage for now
  const navigate = useNavigate();
  const getUser = localStorage.getItem("u4ea-user");
  const [user, setUser] = useState(JSON.parse(getUser) || []);
  const [userEntries, setUserEntries] = useState([]);
  const [editedTitle, setEditedTitle] = useState(user.title);
  const [editedQuote, setEditedQuote] = useState(user.quote);
  const [editedLocation, setEditedLocation] = useState(user.location);
  const [editedGender, setEditedGender] = useState(user.gender);
  const [editedEmail, setEditedEmail] = useState(user.email);


  useEffect(() => {
    const titleTimeout = setTimeout(() => {
      console.log("Edited Title:", editedTitle);
      updateUser();
    }, 5000);

    const quoteTimeout = setTimeout(() => {
      console.log("Edited Quote:", editedQuote);
      updateUser();
    }, 5000);

    const locationTimeout = setTimeout(() => {
      console.log("Edited Location:", editedLocation);
      updateUser();
    }, 5000);

    const genderTimeout = setTimeout(() => {
      console.log("Edited Gender:", editedGender);
      updateUser();
    }, 5000);

    const emailTimeout = setTimeout(() => {
      console.log("Edited Email:", editedEmail);
      updateUser();
    }, 5000);

    return () => {
      clearTimeout(titleTimeout);
      clearTimeout(quoteTimeout);
      clearTimeout(locationTimeout);
      clearTimeout(genderTimeout);
      clearTimeout(emailTimeout);
    };
  }, [editedTitle, editedQuote, editedLocation, editedGender, editedEmail]);

  useEffect(() => {
    // Make the GET request
    fetchUserEntries(); // Call the function to fetch user entries
    console.log(user);
  }, []);

  const updateUser = async () => {
    try {
      const updatedUser = { 
        id: user.id,
        name: user.name,
        email: editedEmail,
        password: user.password,
        title: editedTitle,
        quote: editedQuote,
        gender: editedGender,
        location: editedLocation
      };
      const response = await axios.patch("http://localhost:3500/users", {
        id: updatedUser.id, 
        fullname: updatedUser.name, 
        email: updatedUser.email, 
        password: updatedUser.password, 
        title: updatedUser.title, 
        quote: updatedUser.quote, 
        gender: updatedUser.gender, 
        location: updatedUser.location
      })
      setUser(updatedUser);
      localStorage.setItem("u4ea-user", JSON.stringify(updatedUser));

    } catch (error) {
      console.log("Error updating user:", error)
    }
  };

  const fetchUserEntries = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3500/entries?userID=${user.id}`
      );
      if (response.status === 200) {
        setUserEntries(response.data);
      } else {
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
            <div className={userClasses.circle}>
              <FontAwesomeIcon
                icon={faUser}
                className={userClasses.icon}
                size="1x"
                style={{ color: "#FFFFFF" }}
              />
            </div>
            <div className={userClasses.internalCol}>
              <span className={userClasses.userName}>
                <b className={userClasses.userName}>{user.name}</b>
              </span>
              <input
                type="text"
                className={userClasses.bigInputField}
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
              <input
                type="text"
                className={userClasses.bigInputField}
                value={editedQuote}
                onChange={(e) => setEditedQuote(e.target.value)}
              />
              <div className={userClasses.infoContainer}>
                <div className={userClasses.specific}>
                  <p className={userClasses.meta}>Email: </p>
                  <input
                    type="text"
                    className={userClasses.inputField}
                    defaultValue={user.email}
                    onChange={(e) => setEditedEmail(e.target.value)}
                  />
                </div>
                <div className={userClasses.specific}>
                  <p className={userClasses.meta}>Gender: </p>
                  <input
                    type="text"
                    className={userClasses.inputField}
                    defaultValue={user.gender}
                    onChange={(e) => setEditedGender(e.target.value)}
                  />
                </div>
                <div className={userClasses.specific}>
                  <p className={userClasses.meta}>Location: </p>
                  <input
                    type="text"
                    className={userClasses.inputField}
                    defaultValue={user.location}
                    onChange={(e) => setEditedLocation(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col className={userClasses.infoPanel2}>
          <div className={userClasses.smallContainer}>
            <span className={userClasses.userName}>Moods</span>
            <div className={userClasses.innerContainer}>
              <FontAwesomeIcon
                icon={faBarChart}
                className={userClasses.icon}
                size="1x"
                style={{ color: "#000000" }}
              />
            </div>
          </div>
          <div className={userClasses.smallContainer}>
            <span className={userClasses.userName}>Activities</span>
            <div className={userClasses.innerContainer}>
              <FontAwesomeIcon
                icon={faBarChart}
                className={userClasses.icon}
                size="1x"
                style={{ color: "#000000" }}
              />
            </div>
          </div>
          <div className={userClasses.smallContainer}>
            <span className={userClasses.userName}>Reccomendations</span>
            <div className={userClasses.innerContainer}>
              <FontAwesomeIcon
                icon={faBarChart}
                className={userClasses.icon}
                size="1x"
                style={{ color: "#000000" }}
              />
            </div>
          </div>
        </Col>
        <Col className={userClasses.infoPanel2}>
          <div className={userClasses.smallContainerTop}>
            <span className={userClasses.userName}>Geography</span>
            <div className={userClasses.innerContainer}>
              <FontAwesomeIcon
                icon={faBarChart}
                className={userClasses.icon}
                size="1x"
                style={{ color: "#000000" }}
              />
            </div>
          </div>
          <div className={userClasses.smallContainer}>
            <span className={userClasses.userName}>U4EA</span>
            <div className={userClasses.innerContainer}>
              <FontAwesomeIcon
                icon={faBarChart}
                className={userClasses.icon}
                size="1x"
                style={{ color: "#000000" }}
              />
            </div>
          </div>
          <div className={userClasses.smallContainer}>
            <span className={userClasses.userName}>Badges</span>
            <div className={userClasses.innerContainer}>
              <FontAwesomeIcon
                icon={faBarChart}
                className={userClasses.icon}
                size="1x"
                style={{ color: "#000000" }}
              />
            </div>
          </div>
        </Col>
      </Container>
    </section>
  );
};

export default UserDashboard;