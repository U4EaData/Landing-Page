import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
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

import classes from "./App.module.css";

function App() {
  return (
    <div id="home">
      <div className={classes.backgroundimage}>
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
      </div>
    </div>
  );
}

export default App;
