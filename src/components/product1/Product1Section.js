import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";
import Demo1 from "../../images/Page4Demo.jpg";
import feel from "../../images/feel.svg";
import feel2 from "../../images/feel2.svg";
import emotions from "../../images/emotions.svg";
import davinciImg from "../../images/how-do-you-feel.png";
import "../image.css";

import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

import { Fade } from "react-awesome-reveal";
import appClasses from "../../App.module.css";
import classes from "./Product1.module.css";

function Product1() {
  const navigate = useNavigate();

  return (
    <Fade duration={900} triggerOnce="true">
      <section className={appClasses.sectionContainer} id="solutions">
        <Container id="davinci">
          <Row className={`${appClasses.mobileflex} ${classes.flexContainer}`}>
            <Col className="col-lg-7 py-5 align-items-center">
              <div className="p-5 p-md-5 ">
                <h3 className={appClasses.h3class}>How do you feel?</h3>
                <p className={appClasses.pclass}>
                  Pain can be experienced physically, emotionally, and mentally.
                  Recognizing how you feel starts the process of making the pain
                  go away. Telling U4Ea how you feel helps us recommend
                  solutions ideal for you!
                </p>
                <Button
                  variant="primary"
                  size="lg"
                  className={appClasses.buttonsize}
                  onClick={() => navigate("/davinci")}
                >
                  Try it out
                </Button>
              </div>
            </Col>
            <Col lg={5} className=" d-flex justify-content-center">
              <img className="davinciImg" src={emotions} alt="..."></img>
            </Col>
          </Row>
        </Container>
      </section>
    </Fade>
  );
}

export default Product1;
