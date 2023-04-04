import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment, useEffect, useState, useRef } from "react";
import NavSection from "./components/navbar/NavSection";
import MainSection from "./components/main/MainSection";
import About from "./components/about/About";
import Product1 from "./components/product1/Product1Section";
import Product2 from "./components/product2/Product2Section";
import Science from "./components/science/ScienceSection";
import TestimonialsSection from "./components/testimonials/TestimonialsSection";
import JourneySection from "./components/journey/JourneySection";
import UserDashboard from "./components/userdashboard/UserDashboard";
import Mobile from "./components/mobile-experience/Mobile";
import Footer from "./components/footer/Footer";
import "./components/testimonials/TestimonialsSection.module.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

import classes from "./App.module.css";
import DaVinci from "./components/davinci/DaVinci";

function App() {
  const [route, setRoute] = "";
  const [isSignedin, setIsSignedin] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  const [showForm, setShowForm] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  /* uncomment when ready to deploy */
  useEffect(() => {
    // axios
    //   .get("/")
    //   .then((res) => console.log("route / Success"))
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, [user]);

  /* Form Input Handlers */
  const onEmailChange = (e) => {
    setUser((prevData) => {
      return {
        ...prevData,
        email: e.target.value,
      };
    });
  };

  const onPasswordChange = (e) => {
    setUser((prevData) => {
      return {
        ...prevData,
        password: e.target.value,
      };
    });
  };

  const onNameChange = (e) => {
    setUser((prevData) => {
      return {
        ...prevData,
        name: e.target.value,
      };
    });
  };

  const loadUser = (updateUser) => {
    const userObj = {
      name: updateUser.data.name,
    };
    setUser({
      name: updateUser.data.name,
      email: updateUser.data.email,
      password: updateUser.data.password,
    });
    localStorage.setItem("u4ea-user", JSON.stringify(userObj));
  };

  const signout = () => {
    console.log("Signed out!");
    setUser({
      name: "",
      email: "",
      password: "",
    });
    localStorage.clear();
  };

  const loginBtnClicked = (e) => {
    setShowForm((prev) => !prev);
  };

  const closeForm = () => {
    setShowForm(false);
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
                    <NavSection
                      user={user}
                      signout={signout}
                      onEmailChange={onEmailChange}
                      onPasswordChange={onPasswordChange}
                      onNameChange={onNameChange}
                      loadUser={loadUser}
                      loginBtnClicked={loginBtnClicked}
                      closeForm={closeForm}
                      showForm={showForm}
                    />
                  </div>
                  <MainSection />
                  <Product1 />
                  <Product2 />
                  <Science />
                  <JourneySection />
                  <TestimonialsSection />
                  <Mobile
                    user={user}
                    signout={signout}
                    onEmailChange={onEmailChange}
                    onPasswordChange={onPasswordChange}
                    onNameChange={onNameChange}
                    loadUser={loadUser}
                    loginBtnClicked={loginBtnClicked}
                    closeForm={closeForm}
                    showForm={showForm}
                  />
                  <Footer />
                  {/* <SignUpSection /> */}
                </Fragment>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/davinci" element={<DaVinci />} />

            <Route
              path="/userdashboard"
              element={<UserDashboard user={user} />}
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
