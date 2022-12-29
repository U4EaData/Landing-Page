import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import classes from "./NavSection.module.css";

// Needed to use React Bootstrap in order to have collapsing menu

function NavSection() {
  return (
    <Container className={classes.mynavcontainer}>
      <Navbar collapseOnSelect expand="lg" className={classes.mainbackground}>
        <Navbar.Brand className={classes.navbarbrand} href="#home">
          U4Ea
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="text-center">
          <Nav className="ms-auto" id={(classes.itemfont, classes.linkspacing)}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#journey">Categories</Nav.Link>
            <Nav.Link href="#signup">Contact Us</Nav.Link>
            <Button
              id={classes.buttonspacing}
              className="mx-2 px-5"
              variant="outline-primary"
            >
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default NavSection;
