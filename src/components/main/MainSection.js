import React, { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "../../images/musicgirl.svg";
import FinalGirlImage from "../../images/girl-music.png";
import girlImg from "../../images/girl-profile.png";
import { init } from "ityped";
import { Nav } from "react-bootstrap";

import classes from "./MainSection.module.css";
import appClasses from "../../App.module.css";

function MainSection() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      typeSpeed: 50,
      backSpeed: 60,
      backDelay: 1500,
      strings: [
        "Stress",
        "Anxiety",
        "Depression",
        "Sleep",
        "Motivation",
        "Better Moods",
        "Relation",
      ],
    });
  }, []);
  return (
    <section className={appClasses.mainSectionContainer}>
      <Container>
        <Row className={classes.mobileflex}>
          <Col xs={7} className={classes.heading}>
            <h1 className={appClasses.h1class}>The Healing Power of Sound</h1>

            <div className={classes.movingtextcontainer}>
              <p className={classes.subtext}>
                Personalized audio solutions for
              </p>

              <span className={classes.movingtext} ref={textRef}></span>
            </div>

            <Button
              href="#download"
              variant="primary"
              size="lg"
              className={classes.buttonsize}
            >
              Start Now
            </Button>
          </Col>
          <Col className={classes.headingImage}>
            <img
              src={FinalGirlImage}
              alt="girl listening to personalized sound scape"
              className={classes.mainsectionimage}
            ></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default MainSection;
