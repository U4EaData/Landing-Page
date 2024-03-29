import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import classes from "./Stats.module.css";
import appClasses from "../../App.module.css";
import { Container } from "react-bootstrap";
import WorldMap from "react-svg-worldmap";
import mapData from "./mapData";

const Stats = () => {
  const [windowWidth, setWindowWidth] = useState(
    Math.min(window.innerHeight, window.innerWidth) * 0.9
  );
  useEffect(() => {
    function handleResize() {
      console.log(window.innerWidth);
      // setWindowWidth(window.innerWidth * 0.5);
      setWindowWidth(Math.min(window.innerHeight, window.innerWidth) * 0.9);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Fade duration={900} triggerOnce="true">
      <section className={appClasses.sectionContainer}>
        <Container>
          <div className={classes.statsSection}>
            <h3 className={appClasses.h3class}>Market Penetration</h3>
            <p className={appClasses.pclasscenter}>
              Real people. Real results.
            </p>
            <ul className={classes.statsFlexContainer}>
              {/* <li className={classes.statsFlexItem}>
                <p className={classes.statsNumber}>81%</p>
                <p
                  className={`${appClasses.pclasscenter} ${classes.statsDescription}`}
                >
                  say U4Ea helped them reach their targeted state of mind
                </p>
              </li> */}
              <li className={classes.statsFlexItem}>
                <p className={classes.statsNumber}>37K+</p>
                <p
                  className={`${appClasses.pclasscenter} ${classes.statsDescription}`}
                >
                  app downloads
                </p>
              </li>
              <li className={classes.statsFlexItem}>
                <p className={classes.statsNumber}>80%</p>
                <p
                  className={`${appClasses.pclasscenter} ${classes.statsDescription}`}
                >
                  efficacy
                </p>
              </li>
              <li className={classes.statsFlexItem}>
                <p className={classes.statsNumber}>96</p>
                <p
                  className={`${appClasses.pclasscenter} ${classes.statsDescription}`}
                >
                  countries
                </p>
              </li>
            </ul>
            <div className={classes.mapContainer}>
              <WorldMap
                color="#9035ca"
                size={windowWidth}
                data={mapData}
                backgroundColor="rgba(255, 255, 255, 0)"
              />
            </div>
          </div>
        </Container>
      </section>
    </Fade>
  );
};

export default Stats;
