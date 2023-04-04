import React, { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "../../images/musicgirl.svg";
import music from "../../images/music.svg";
import { init } from "ityped";
import { Nav } from "react-bootstrap";

import classes from "./MainSection.module.css";
import section from "../../App.module.css";

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
    <section className={section.mainSectionContainer}>
      <Container className={classes.background}>
        <Row className={classes.mobileflex}>
          <Col xs={6} className={classes.heading}>
            <h1 className={classes.h1class}>The Healing Power of Sound</h1>

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
              src={Image}
              alt="girl listening to personalized sound scape"
              width="100%"
              height="auto"
              className={classes.mainsectionimage}
            ></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default MainSection;
