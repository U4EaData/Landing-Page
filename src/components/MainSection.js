import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from '../images/musicgirl.svg';

import classes from './MainSection.module.css';

function MainSection() {
  return (
    <Container className={classes.background}>
      <Row className={classes.mobileflex}>
        <Col xs={6} className={classes.heading}>
          <h1 className={classes.h1class}>The Healing Power of Sound</h1>
          <p className={classes.pclass}>
            Treating Mental, Emotional, and Physical Pain with{' '}
            <span className={classes.heavier}>Personalized Sound Scapes</span>
          </p>
          <Button variant="primary" size="lg" className={classes.buttonsize}>
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
  );
}

export default MainSection;
