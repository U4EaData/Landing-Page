import React from "react";
import classes from "./HealingPower.module.css";
import greenCircle from "../../images/green-circle-cropped.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Fade } from "react-awesome-reveal";
import appClasses from "../../App.module.css";
import { useNavigate } from "react-router-dom";

const HealingPower = () => {
  const navigate = useNavigate();
  
  return (
    <Fade duration={900} triggerOnce="true">
        <section className={appClasses.sectionContainer} id="solutions">
        <Container className={classes.container}>
            <Row className={`${appClasses.mobileflex} ${classes.flexContainer} align-items-center`}>
                <Col>
                    <div className="p-md-5 p-5 d-flex justify-content-center ">
                        <img
                            src={greenCircle}
                            alt="green journey chakra"
                            className={classes.greencricleimage}
                        />
                    </div>
                </Col>
                <Col>
                    <h3 className={appClasses.h3class}>The Healing Power of Sound</h3>
                        <p className={appClasses.pclass}><b>Sound has been used to heal for thousands of years in cultures all around the world. Here at U4EA, we bring that power to you!</b></p>
                        <p className={appClasses.pclass}>Binaural beats have been proven effective in 10 minutes or less and our 80% efficacy informs us that we are on the path to taming the leading cause of cancer, stress.</p>
                        <p className={appClasses.pclass}>Enabling everyone to live a more balanced and peaceful life, full of ever-healthier choices.</p>
                    <Button
                        variant="primary"
                        size="lg"
                        className={appClasses.buttonsize}
                        onClick={() => {navigate('/binauralbeats')}}
                    >
                    Experience
                    </Button>
                </Col>
            </Row>
        </Container>
        </section>
    </Fade>
  );
};

export default HealingPower;