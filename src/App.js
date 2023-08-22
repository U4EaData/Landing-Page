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

  const signout = () => {
    console.log("Signed out!");
    setUser({
      name: "",
      email: "",
      id: "",
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

  // Test

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
            <Route path="/binauralbeats" element={<BinauralBeats user={user}/>} />
            <Route
              path="/userdashboard"
              element={<UserDashboard user={user} />}
            />
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
