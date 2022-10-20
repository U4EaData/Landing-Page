import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Col, Row } from 'react-bootstrap';
import circle from '../images/page6.png';
import classes from './AboutSection.module.css';
import Button from 'react-bootstrap/Button';

function Science() {
  return (
    <Container className="py-5  ">
      <Row className={classes.mobileflex}>
        <Col class="col-lg-7 py-5 align-middle">
          <div class="p-5 p-md-5 ">
          
            <h1 className={classes.h1class}>Sound Science</h1>
            <p className={classes.pclass}>
              Sound has been used for healing purposes dating back to the
              earliest civilizations, from indigenous drum circles to Egyptian
              Temples
              <br />
              <br />
              The interaction between sound and biology allows us to address
              specific issues with specific frequencies.
              <br />
              <br />
              Emotions are an external reflection of our internal chemistry, so
              addressing our moods allows us to address our health.
            </p>
            <Button variant="primary" size="lg" className={classes.buttonsize}>
            To Learn More
          </Button>
          </div>

        </Col>

        <Col lg={5} className="py-5 d-flex justify-content-center">
          <img className="pic2" src={circle} alt="..."></img>
        </Col>
      </Row>
    </Container>
  );
}
export default Science;
