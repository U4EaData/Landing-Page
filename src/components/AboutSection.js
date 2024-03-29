import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "../../images/u4eaman.svg";
import aboutImg from "../../images/about.svg";
import "../image.css";
import Popup from "../popup/Popup.js";

import classes from "../AboutSection.module.css";
import section from "../App.module.css";
import { Fade } from "react-awesome-reveal";

function AboutSection() {
  const aboutTitle = "Title from about";
  const aboutText = "Text from about";
  return (
    // <Container className={classes.background} id="about">
    //   <Row className={classes.mobileflex}>
    //     <Col className={classes.headingImage}>
    //       <img
    //         src={Image}
    //         alt="girl listening to personalized sound scape"
    //         width="100%"
    //         height="auto"
    //         className={classes.mainsectionimage}
    //       ></img>
    //     </Col>
    //     <Col xs={6} className={classes.heading}>
    //       <h1 className={classes.h1class}>About U4Ea</h1>
    //       <p className={classes.pclass}>
    //         Founded in 2017 by Brandon Howard, U4Ea has helped more than 36,000
    //         people across the world address physical, emotional, and mental
    //         challenges by offering combinations of tones known as{" "}
    //         <span className={classes.heavier}>binaural beats</span>, enabling
    //         listeners to shift into healing states of mind.
    //       </p>
    //     </Col>
    //   </Row>
    // </Container>
    <Fade duration={900} triggerOnce="true">
      <section className={section.sectionContainer} id="about">
        <Container>
          <Row className={classes.mobileflex}>
            <Col lg={5} className=" d-flex justify-content-center">
              {/* <img
              src={Image}
              alt="girl listening to personalized sound scape"
              width="100%"
              height="auto"
              className={classes.mainsectionimage}
            ></img> */}
              <img
                src={aboutImg}
                alt="man in yoga pose listening to music"
                className="imageSize"
              ></img>
            </Col>
            <Col className="col-lg-7 py-5 align-items-center">
              <div className="p-5 p-md-5 ">
                <h1 className={classes.h1class}>About U4Ea</h1>
                <p className={classes.pclass}>
                  Founded in 2017 by Brandon Howard, U4Ea has helped more than
                  36,000 people across the world address physical, emotional,
                  and mental challenges by offering combinations of tones known
                  as <span className={classes.heavier}>binaural beats</span>,
                  enabling listeners to shift into healing states of mind.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fade>
  );
}

export default AboutSection;
