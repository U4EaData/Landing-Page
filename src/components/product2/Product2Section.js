import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Col, Row } from "react-bootstrap";
import Demo2 from "../../images/Page5Demo.jpg";
import section from "../../App.module.css";
import { Fade } from "react-awesome-reveal";
import appClasses from "../../App.module.css";
import "../image.css";
import iphoneScore from "../../images/iphonescore.png";
import classes from "./Product2.module.css";

function Product2() {
  return (
    <Fade duration={900} triggerOnce="true">
      <section className={appClasses.sectionContainer}>
        <Container>
          <Row
            className={`${appClasses.mobileflex} ${classes.product2FlexContainer} align-items-center`}
          >
            <Col className="align-content-center">
              <div className="p-md-5 p-5 d-flex justify-content-center ">
                <img
                  className="product2Img"
                  src={iphoneScore}
                  alt="iphone"
                ></img>
              </div>
            </Col>

            <Col>
              <div className="p-5 p-md-5 ">
                <h3 className={appClasses.h3class}>Sentiment Analysis</h3>
                <p className={appClasses.pclass}>
                  Track your mood and what impacts your mood, from media you
                  consume to the places you go.
                  <br />
                  <br />
                  Get customized, science-based, mood-shifting tone
                  recommendations proven to work in 10 minutes or less.
                  <br />
                  <br />
                  Listen with headphones to blend binaural beats behind your
                  favorite music, videos and apps, or enjoy them alone to
                  enhance any experience.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fade>
  );
}

export default Product2;
