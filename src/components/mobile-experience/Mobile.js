import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";
import classes from "../AboutSection.module.css";
import mobileClasses from "./Mobile.module.css";
import Button from "react-bootstrap/Button";
import section from "../../App.module.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import LoginForm from "../loginform/LoginForm";
import RegisterForm from "../registerform/RegisterForm";
import { Fade } from "react-awesome-reveal";

function Mobile(props) {
  const [form, setForm] = useState("login");
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);
  const webRef = useRef(null);

  const closeUserdropdown = (e) => {
    if (webRef.current && showForm && !webRef.current.contains(e.target)) {
      setShowForm(false);
      document.removeEventListener("mousedown", closeUserdropdown);
    }
  };

  document.addEventListener("mousedown", closeUserdropdown);

  const closeForm = () => {
    setShowForm(false);
  };

  const toggleForm = (e) => {
    e.target.id === "signInLink"
      ? setForm((prev) => "login")
      : setForm((prev) => "register");
  };

  return (
    <Fade duration={900} triggerOnce="true">
      <section className={section.sectionContainer} id="download">
        <Container>
          <Row className={classes.mobileflex}>
            <Col className="col-lg-7 align-items-center">
              <div className="p-5 p-md-5 ">
                <h1 className={classes.h1class}>Try it out today</h1>
                <p className={classes.pclass}>
                  Enjoy U4Ea right here on the web or on your phone today!
                </p>
              </div>
            </Col>
            <Col lg={4} className="py-5 d-flex justify-content-center">
              <div className={mobileClasses.getStartedContainer}>
                <div className={mobileClasses.webExperience}>
                  <h1>U4Eea On The Web</h1>
                  <p className={classes.pclass}>
                    Coming Soon!
                    {/* Login to your account or create a free account to get
                    started today. */}
                  </p>
                  <BsFillArrowRightCircleFill
                    className={mobileClasses.experienceArrow}
                    onClick={() => setShowForm((prev) => !prev)}
                  />
                  {showForm && form === "login" ? (
                    <span ref={webRef}>
                      <LoginForm
                        // loginBtnClicked={props.loginBtnClicked}
                        toggleForm={toggleForm}
                        onEmailChange={props.onEmailChange}
                        onPasswordChange={props.onPasswordChange}
                        user={props.user}
                        loadUser={props.loadUser}
                        closeForm={closeForm}
                        id="mobile-login-form"
                      />
                    </span>
                  ) : showForm && form === "register" ? (
                    <span ref={webRef}>
                      <RegisterForm
                        // loginBtnClicked={props.loginBtnClicked}
                        toggleForm={toggleForm}
                        onEmailChange={props.onEmailChange}
                        onPasswordChange={props.onPasswordChange}
                        onNameChange={props.onNameChange}
                        user={props.user}
                        loadUser={props.loadUser}
                        closeForm={props.closeForm}
                        id="mobile-login-form"
                      />
                    </span>
                  ) : null}
                </div>
                <div className={mobileClasses.mobileExperience}>
                  <h1>U4Eea Mobile</h1>
                  <p className={classes.pclass}>Available on iOS devices.</p>
                  <div className="appLink">
                    <a
                      href="https://apps.apple.com/us/app/u4ea/id1276634916"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsFillArrowRightCircleFill
                        className={mobileClasses.experienceArrow}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fade>
  );
}

export default Mobile;