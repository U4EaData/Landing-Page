import React from "react";
import { Fade } from "react-awesome-reveal";
import classes from "./Stats.module.css";
import appClasses from "../../App.module.css";
import { Container } from "react-bootstrap";

const Stats = () => {
  return (
    <Fade duration={900} triggerOnce="true">
      <section className={appClasses.sectionContainer}>
        <Container>
          <div className={classes.statsSection}>
            <h3 className={appClasses.h3class}>Improve with U4Ea</h3>
            <p className={appClasses.pclasscenter}>
              Real people. Real results.
            </p>
            <ul className={classes.statsFlexContainer}>
              <li className={classes.statsFlexItem}>
                <p className={classes.statsNumber}>81%</p>
                <p
                  className={`${appClasses.pclasscenter} ${classes.statsDescription}`}
                >
                  say U4Ea helped them reach their targeted state of mind
                </p>
              </li>
              <li className={classes.statsFlexItem}>
                <p className={classes.statsNumber}>40K+</p>
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
                  {"rentention rate (% of customers keeping the app)"}
                </p>
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </Fade>
  );
};

export default Stats;
