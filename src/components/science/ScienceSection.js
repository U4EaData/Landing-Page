import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Col, Row } from "react-bootstrap";
import circle from "../../images/page6.png";
import soundScience from "../../images/sound-science.svg";
import girlBlue from "../../images/girl-blue.png";
//import classes from "../AboutSection.module.css";
import Button from "react-bootstrap/Button";
import Popup from "../../popup/Popup.js";
import { BsArrowReturnRight } from "react-icons/bs";
import section from "../../App.module.css";
import "../image.css";
import { Fade } from "react-awesome-reveal";

import classes from "./ScienceSection.module.css";
import appClasses from "../../App.module.css";

function Science() {
  const [modalShow, setModalShow] = React.useState(false);
  const scienceSectionTitle = "Links to Research";
  const scienceSectionText = (
    <ul className={classes.scienceLinkContainer}>
      <li>
        <a
          className={classes.sciencelink}
          href="https://www.researchgate.net/publication/327439522_Effect_of_528_Hz_Music_on_the_Endocrine_System_and_Autonomic_Nervous_System"
          rel="noopener noreferrer"
          target="_blank"
        >
          Effect of 528 Hz Music on the Endocrine System and Autonomic Nervous
          System
        </a>
      </li>
      <li>
        <a
          className={classes.sciencelink}
          href="https://www.researchgate.net/publication/258172750_The_Effect_of_Music_on_the_Production_of_Neurotransmitters_Hormones_Cytokines_and_Peptides_A_Review"
          rel="noopener noreferrer"
          target="_blank"
        >
          The Effect of Music on the Production of Neurotransmitters, Hormones,
          Cytokines, and Peptides: A Review
        </a>
      </li>
      <li>
        <a
          className={classes.sciencelink}
          href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4428073/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Auditory Beat Stimulation and its Effects on Cognition and Mood States
        </a>
      </li>
      <li>
        <a
          className={classes.sciencelink}
          href="https://www.researchgate.net/publication/227917284_The_Physiological_Foundation_of_Yoga_Chakra_Expression"
          rel="noopener noreferrer"
          target="_blank"
        >
          The Physiological Foundation of Yoga Chakra Expression
        </a>
      </li>
      <li>
        <a
          className={classes.sciencelink}
          href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5876785/"
          rel="noopener noreferrer"
          target="_blank"
        >
          The Role of Psychological Well-Being in Boosting Immune Response: An
          optimal effort for tackling infection
        </a>
      </li>

      <li>
        <a
          className={classes.sciencelink}
          href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2038162/pdf/brmedj03603-0003.pdf"
          rel="noopener noreferrer"
          target="_blank"
        >
          Stress and the Genearl Adaptation Syndrome
        </a>
      </li>
    </ul>
  );
  return (
    <Fade duration={900} triggerOnce="true">
      <section className={appClasses.sectionContainer}>
        <Container className={classes.scienceSection}>
          <Row
            className={`${appClasses.mobileflex} ${classes.scienceFlexContainer} align-items-center`}
          >
            <Col>
              <div className="p-md-5 p-5">
                <h3 className={appClasses.h3class}>Sound Science</h3>
                <p className={appClasses.pclass}>
                  Sound has been used for healing purposes dating back to the
                  earliest civilizations, from indigenous drum circles to
                  Egyptian Temples
                  <br />
                  <br />
                  The interaction between sound and biology allows us to address
                  specific issues with specific frequencies.
                  <br />
                  <br />
                  Emotions are an external reflection of our internal chemistry,
                  so addressing our moods allows us to address our health.
                </p>

                <Button
                  variant="primary"
                  size="lg"
                  className={appClasses.buttonsize}
                  onClick={() => setModalShow(true)}
                >
                  Learn more
                </Button>

                <Popup
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  text={scienceSectionText}
                  title={scienceSectionTitle}
                />
              </div>
            </Col>

            <Col className="align-content-center">
              {/* className="col-xs-8 py-5 d-flex justify-content-center" */}
              <div className="p-md-5 p-5 d-flex justify-content-center ">
                <img
                  className="imageSize"
                  src={girlBlue}
                  alt="girlwithbook"
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fade>
  );
}
export default Science;
