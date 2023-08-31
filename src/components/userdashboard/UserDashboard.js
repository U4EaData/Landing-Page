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
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import BbgChart from "../bbg-chart/BbgChart";
import axios from "axios";
import jwt_decode from "jwt-decode"; // Import the jwt_decode library

const UserDashboard = (props) => {
  // user object is also in props, gonna just use the one in local storage
  const navigate = useNavigate();
  const getUser = localStorage.getItem("u4ea-user");
  const [user, setUser] = useState(JSON.parse(getUser) || []);
  const [userEntries, setUserEntries] = useState([]);
  const [editedTitle, setEditedTitle] = useState(user.title);
  const [editedQuote, setEditedQuote] = useState(user.quote);
  const [editedLocation, setEditedLocation] = useState(user.location);
  const [editedGender, setEditedGender] = useState(user.gender);
  const [editedEmail, setEditedEmail] = useState(user.email);
  const [currGraph, setCurrGraph] = useState("Feel");

  useEffect(() => {
    const titleTimeout = setTimeout(() => {
      updateUser();
    }, 2000);

    const quoteTimeout = setTimeout(() => {
      updateUser();
    }, 2000);

    const locationTimeout = setTimeout(() => {
      updateUser();
    }, 2000);

    const genderTimeout = setTimeout(() => {
      updateUser();
    }, 2000);

    const emailTimeout = setTimeout(() => {
      updateUser();
    }, 2000);

    return () => {
      clearTimeout(titleTimeout);
      clearTimeout(quoteTimeout);
      clearTimeout(locationTimeout);
      clearTimeout(genderTimeout);
      clearTimeout(emailTimeout);
    };
  }, [editedTitle, editedQuote, editedLocation, editedGender, editedEmail]);

  useEffect(() => {
    fetchUserEntries();
  }, []);

  const updateUser = async () => {
    let token = localStorage.getItem("access_token");
    if (token) {
      const decodedToken = jwt_decode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        try {
          const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/refresh`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            credentials: "include",
          });
          if (response.ok) {
            const data = await response.json();
            const newAccessToken = data.accessToken;
            localStorage.setItem("access_token", newAccessToken);
            token = newAccessToken;
          } else {
            navigate('/')
            props.signout()
            console.log("failed the refresh token stuff", response.statusText);
            return
          }
        } catch (error) {
          navigate('/')
          props.signout()
          return
        }
      }
    }
    
    try {
      const updatedUser = {
        id: user.id,
        name: user.name,
        email: editedEmail,
        password: user.password,
        title: editedTitle,
        quote: editedQuote,
        gender: editedGender,
        location: editedLocation,
      };
      const response = await axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}/users`,
        {
          id: updatedUser.id,
          fullname: updatedUser.name,
          email: updatedUser.email,
          password: updatedUser.password,
          title: updatedUser.title,
          quote: updatedUser.quote,
          gender: updatedUser.gender,
          location: updatedUser.location,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("updated user")
      setUser(updatedUser);
      localStorage.setItem("u4ea-user", JSON.stringify(updatedUser));
    } catch (error) {
      console.log("Error updating user:", error);
    }
  };

  const fetchUserEntries = async () => {
    let token = localStorage.getItem("access_token");
    if (token) {
      const decodedToken = jwt_decode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        try {
          const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/refresh`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            credentials: "include",
          });
          if (response.ok) {
            const data = await response.json();
            token = data.accessToken;
            localStorage.setItem("access_token", token);
          } else {
            console.log("failed the refresh token stuff", response.statusText);
          }
        } catch (error) {
          try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/logout`, {
              method: "POST",
              headers: {
                Authorization: `Bearer ${token}`,
              },
              credentials: "include",
            });
            console.log("failed logout", error);
          } catch (err) {
            console.log("Signout error", err)
          }
          navigate("/")
        }
      }
    } else {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/refresh`, {
        method: "GET",
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        token = data.accessToken;
        localStorage.setItem("access_token", token);
      } else {
        console.log("failed the refresh token stuff", response.statusText);
      }
    }

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/entries?userID=${user.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true
      });
      if (response.status === 200) {
        setUserEntries(response.data);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log("No entries found for the user"); // userEntries will just remain empty, and that case is handled in the rendering code
      } else {
        console.error("Error fetching user entries:", error);
      }
    }
  };

  const handleArrowClick = (direction) => {
    if (userEntries.length > 0) {
      if (direction === "left") {
        console.log("left");
        if (currGraph === "Feel") {
          setCurrGraph("thingDuring");
        } else if (currGraph === "Boost") {
          setCurrGraph("Feel");
        } else {
          setCurrGraph("Boost");
        }
      } else if (direction === "right") {
        console.log("right");
        if (currGraph === "Feel") {
          setCurrGraph("Boost");
        } else if (currGraph === "Boost") {
          setCurrGraph("thingDuring");
        } else {
          setCurrGraph("Feel");
        }
      }
    }
    console.log("currGraph", currGraph);
  };

  const goBBG = () => {
    navigate("/binauralbeats")
  }

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
                  <p className={userClasses.meta}>Email: </p>{" "}
                  {/* Made this un-editable, easy change if you wanna change it since its all hooked up to the backend, just gotta check that you change to a non-duplicate email*/}
                  <input
                    type="text"
                    className={userClasses.inputField}
                    value={user.email}
                    readOnly
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
          <div className={userClasses.smallContainerBig}>
            <div>
              <span className={userClasses.userName}>
                <a className={userClasses.userName} onClick={goBBG}>
                  {userEntries.length > 0 ? ((currGraph === "thingDuring") ? "Moods: Action":`Moods: ${currGraph}`) : "Moods"}
                </a>
              </span>
              {userEntries.length > 0 && (
                <div className={userClasses.arrowButtonContainer}>
                  <div
                    className={userClasses.arrowButton}
                    onClick={() => handleArrowClick("left")}
                  >
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      size="1x"
                      className={userClasses.arrowIcon}
                    />
                  </div>
                  <div
                    className={userClasses.arrowButton}
                    onClick={() => handleArrowClick("right")}
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      size="1x"
                      className={userClasses.arrowIcon}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className={userClasses.innerContainer}>
              {userEntries.length > 0 ? (
                <BbgChart flag={currGraph} data={userEntries} />
              ) : (
                <div>You have never listened to Binaural Beats!</div>
              )}
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
