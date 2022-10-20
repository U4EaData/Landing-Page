import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import Demo1 from '../images/Page4Demo.jpg';
import './Page4_5_6.css';
import classes from './AboutSection.module.css';

function Product1() {
  return (
    <Container className="py-5 ">
      <Row className={classes.mobileflex}>
        <Col lg={5} className="py-5 d-flex justify-content-center">
          <img className="pic" src={Demo1} alt="..."></img>
        </Col>

        <Col class="col-lg-7 py-5 align-items-center">
          <div class="p-5 p-md-5 ">
         
            <h1 className={classes.h1class}>How do you feel?</h1>
            <p className={classes.pclass}>
              Pain can be experienced physically, emotionally, and mentally,
              <br />
              <br />
              Recognizing how you feel starts the process of making the pain go
              away.
              <br />
              <br />
              Telling U4Ea how you feel helps us recommend solutions ideal for
              you!
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Product1;
