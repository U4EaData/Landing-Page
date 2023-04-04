import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";
import Demo1 from "../../images/Page4Demo.jpg";
import feel from "../../images/feel.svg";
import feel2 from "../../images/feel2.svg";
import "../image.css";
import classes from "../AboutSection.module.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import section from "../../App.module.css";
import { Fade } from "react-awesome-reveal";

function Product1() {
  const navigate = useNavigate();

  return (
    <Fade duration={900} triggerOnce="true">
      <section className={section.sectionContainer} id="solutions">
        <Container id="davinci">
          <Row className={classes.mobileflex}>
            <Col className="col-lg-7 py-5 align-items-center">
              <div className="p-5 p-md-5 ">
                <h1 className={classes.h1class}>How do you feel?</h1>
                <p className={classes.pclass}>
                  Pain can be experienced physically, emotionally, and mentally.
                  <br />
                  Recognizing how you feel starts the process of making the pain
                  go away.
                  <br />
                  Telling U4Ea how you feel helps us recommend solutions ideal
                  for you!
                  <br />
                </p>
                <Button
                  variant="primary"
                  size="lg"
                  className={classes.buttonsize}
                  onClick={() => navigate("/davinci")}
                >
                  Try it out
                </Button>
              </div>
            </Col>
            <Col lg={5} className="py-5 d-flex justify-content-center">
              <img className="imageSize" src={feel2} alt="..."></img>
            </Col>
          </Row>
        </Container>
      </section>
    </Fade>
  );
}

export default Product1;
