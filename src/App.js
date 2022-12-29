import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment } from "react";
import NavSection from "./components/NavSection";
import MainSection from "./components/MainSection";
import AboutSection from "./components/AboutSection";
import Product1 from "./components/Product1Section";
import Product2 from "./components/Product2Section";
import Science from "./components/ScienceSection";
import SignUpSection from "./components/SignUpSection";
import TestimonialsSection from "./components/TestimonialsSection";
import JourneySection from "./components/JourneySection";
import "./components/TestimonialsSection.module.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import classes from "./App.module.css";
import DaVinci from "./components/DaVinci";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div id="home" className={classes.App}>
      <div className={classes.backgroundimage}>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <Fragment>
                  <div className={classes.stickynav}>
                    <NavSection />
                  </div>
                  <MainSection />
                  <AboutSection />
                  <Product1 />
                  <Product2 />
                  <Science />
                  <JourneySection />
                  <TestimonialsSection />
                  <SignUpSection />
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
