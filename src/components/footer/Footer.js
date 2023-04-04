import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IoIosMail } from "react-icons/io";
import classes from "./Footer.module.css";
import Nav from "react-bootstrap/Nav";
import navLink from "../../App.module.css";

const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <Container fluid className="py-4 footerLinks" id="signup">
        <Row className="pb-5">
          <Col>
            <div className={classes.columnContainer}>
              <h4 className={classes.footerColumnTitle}>U4Ea</h4>
            </div>
          </Col>
          <Col>
            <div className={classes.columnContainer}>
              <h4 className={classes.footerColumnTitle}>Company</h4>
              <Row>
                <Nav.Link className={classes.footerLink}>About</Nav.Link>
              </Row>
            </div>
          </Col>
          <Col>
            <div className={classes.columnContainer}>
              <h4 className={classes.footerColumnTitle}>Product</h4>

              <Row>
                <Nav.Link className={classes.footerLink}>How it works</Nav.Link>
              </Row>
            </div>
          </Col>
          <Col>
            <div className={classes.columnContainer}>
              <h4 className={classes.footerColumnTitle}>Resources</h4>
              <Row>
                <Nav.Link className={classes.footerLink}>
                  Sound Science
                </Nav.Link>
              </Row>
            </div>
          </Col>
          <Col>
            <Row>
              <div className={classes.columnContainer}>
                <h4 className={classes.footerColumnTitle}>Connect</h4>
                <div className={classes.emailContainer}>
                  <IoIosMail className={`${classes.emailIcon}`} />
                  <a
                    href="mailto:U4Ea@amgineink.com"
                    className={`${classes.emailLink} ${classes.footerLink}`}
                  >
                    Email
                  </a>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
        <hr />
        <Row className="py-3">
          <h4 className={classes.copyright}>© 2023 U4Ea</h4>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
