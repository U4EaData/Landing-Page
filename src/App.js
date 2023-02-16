import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment, useEffect, useState } from "react";
import NavSection from "./components/NavSection";
import MainSection from "./components/MainSection";
import AboutSection from "./components/AboutSection";
import Product1 from "./components/Product1Section";
import Product2 from "./components/Product2Section";
import Science from "./components/ScienceSection";
import SignUpSection from "./components/SignUpSection";
import TestimonialsSection from "./components/TestimonialsSection";
import JourneySection from "./components/JourneySection";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import "./components/TestimonialsSection.module.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import classes from "./App.module.css";
import DaVinci from "./components/DaVinci";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState("register");

  const loginBtnClicked = () => {
    setShowForm((prev) => !prev);
  };

  const toggleForm = (e) => {
    console.log("toggle form:", e.target.id);
    e.target.id === "signInLink"
      ? setForm((prev) => "login")
      : setForm((prev) => "register");
  };

  return (
    <div id="home" className={classes.App}>
      <div className={classes.backgroundimage}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Fragment>
                  <div className={classes.stickynav}>
                    <NavSection loginBtnClicked={loginBtnClicked} />
                  </div>
                  <MainSection />
                  <AboutSection />
                  <Product1 />
                  <Product2 />
                  <Science />
                  <JourneySection />
                  <TestimonialsSection />
                  <SignUpSection />
                  {showForm && form === "login" ? (
                    <LoginForm
                      loginBtnClicked={loginBtnClicked}
                      toggleForm={toggleForm}
                    />
                  ) : showForm ? (
                    <RegisterForm
                      loginBtnClicked={loginBtnClicked}
                      toggleForm={toggleForm}
                    />
                  ) : null}
                </Fragment>
              }
            />
            <Route path="/davinci" element={<DaVinci />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
