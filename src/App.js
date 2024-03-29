import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment, useEffect, useState, useRef } from "react";
import NavSection from "./components/navbar/NavSection";
import MainSection from "./components/main/MainSection";
import About from "./components/about/About";
import Product1 from "./components/product1/Product1Section";
import Product2 from "./components/product2/Product2Section";
import Stats from "./components/statistics/Stats";
import Science from "./components/science/ScienceSection";
import TestimonialsSection from "./components/testimonials/TestimonialsSection";
import JourneySection from "./components/journey/JourneySection";
import UserDashboard from "./components/userdashboard/UserDashboard";
import Mobile from "./components/mobile-experience/Mobile";
import Footer from "./components/footer/Footer";
import BinauralBeats from "./components/binauralbeats/BinauralBeats";
import HealingPower from "./components/healing-power/HealingPower";
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
    id: "",
    password: "",
    title: "",
    quote: "",
    gender: "",
    location: ""
  });

  useEffect(() => {
    console.log(`${process.env.REACT_APP_BACKEND_URL}`) // if you're wondering why it's named this way, environment variables in a create react app project apparently have to start with REACT_APP
  }, [])

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

  const loadUser = (updateUser) => { // this method will get called when the user successfully signs in
    console.log('UPDATE USER:')
    console.log(updateUser)
    const userObj = {
      name: updateUser.fullname,
      email: updateUser.email,
      id: updateUser._id,
      password: updateUser.password, // notice we don't go to server for this, it's alr in state
      title: updateUser.title,
      quote: updateUser.quote,
      gender: updateUser.gender,
      location: updateUser.location
    };
    setUser({
      name: updateUser.fullname,
      id: updateUser._id,
      email: updateUser.email,
      password: updateUser.password, // notice we don't go to server for this, it's alr in state
      title: updateUser.title,
      quote: updateUser.quote,
      gender: updateUser.gender,
      location: updateUser.location
    });
    setIsSignedin(true); 
    localStorage.setItem("u4ea-user", JSON.stringify(userObj));
  };

  function clearAllCookies() { // this doesn't actually do anything in production since the cookie is http only, but it was good to have during dev so I kept it in
    const cookies = document.cookie.split(';');
    cookies.forEach(cookie => {
      const cookieName = cookie.split('=')[0].trim();
      clearCookie(cookieName);
    });
  }

  const signout = async () => {
    console.log("Signed out!");
    const token = localStorage.getItem("access_token");
    setUser({
      name: "",
      email: "",
      id: "",
      password: "",
      title: "",
      quote: "",
      gender: "",
      location: ""
    });
    // localStorage.setItem("access_token", "");
    localStorage.clear()
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/logout`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });
    if (response.ok) {
      const res = await response.json();
      clearAllCookies()
    } else {
      console.log("failed the logout serverside", response.statusText);
    }
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
          <Routes>
            <Route
              path="/"
              element={
                <Fragment>
                  <MainSection />
                  <HealingPower />
                  <Product1 />
                  <Product2 />
                  <Stats />
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
                </Fragment>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Science />} />
            <Route path="/davinci" element={<DaVinci />} />
            <Route path="/binauralbeats" element={<BinauralBeats user={user} signout={signout}/>} />
            {
              (localStorage.getItem('u4ea-user') != null) && (
                <Route
                path="/userdashboard"
                element={<UserDashboard user={user} signout={signout}/>}
                />
              )
            }
          </Routes>
        </Router>
      </div>
    </div>
  );

  // Test

  // return (
  //   <div id="home" className={classes.App}>
  //     <div className={classes.backgroundimage}>
  //       <Router>
  //         <Routes>
  //           <Route
  //             path="/"
  //             element={
  //               <Fragment>
  //                 <div className={classes.stickynav}>
  //                   <NavSection
  //                     user={user}
  //                     signout={signout}
  //                     onEmailChange={onEmailChange}
  //                     onPasswordChange={onPasswordChange}
  //                     onNameChange={onNameChange}
  //                     loadUser={loadUser}
  //                     loginBtnClicked={loginBtnClicked}
  //                     closeForm={closeForm}
  //                     showForm={showForm}
  //                   />
  //                 </div>
  //                 <MainSection />
  //                 <Product1 />
  //                 <Product2 />
  //                 {/* <Science /> */}
  //                 <JourneySection />
  //                 <TestimonialsSection />
  //                 <Mobile
  //                   user={user}
  //                   signout={signout}
  //                   onEmailChange={onEmailChange}
  //                   onPasswordChange={onPasswordChange}
  //                   onNameChange={onNameChange}
  //                   loadUser={loadUser}
  //                   loginBtnClicked={loginBtnClicked}
  //                   closeForm={closeForm}
  //                   showForm={showForm}
  //                 />
  //                 <Footer />
  //                 {/* <SignUpSection /> */}
  //               </Fragment>
  //             }
  //           />
  //           <Route path="/about" element={<About />} />
  //           <Route path="/resources" element={<Science />} />
  //           <Route path="/davinci" element={<DaVinci />} />

  //           <Route
  //             path="/userdashboard"
  //             element={<UserDashboard user={user} />}
  //           />
  //         </Routes>
  //       </Router>
  //     </div>
  //   </div>
  // );
}

export default App;
