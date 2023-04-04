import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Chakra from "../chakra/Chakra";
import classes from "../navbar/NavSection.module.css";
import davinci_css from "./Davinci.module.css";
import { useNavigate } from "react-router-dom";
import colorData from "../../colorData";

const DaVinci = () => {
  const [color, setColor] = useState(colorData[0]);
  const [dropDownValue, setDropDownValue] = useState("");
  const [updateDropDown, setUpdateDropDown] = useState(false);
  const navigate = useNavigate();

  const dropDownHandler = (e) => {
    let value = e.target.id[0].toUpperCase() + e.target.id.slice(1);
    setDropDownValue(value);
    setUpdateDropDown(true);
    colorData.map((color) => {
      if (color.id === e.target.id) {
        setColor(color);
      }
    });
  };

  return (
    <div className={davinci_css.davinci}>
      <Container className={classes.mynavcontainer}>
        <Navbar collapseOnSelect expand="lg" className={classes.mainbackground}>
          <Navbar.Brand className={classes.navbarbrand} href="/">
            U4Ea
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="text-center">
            <Nav
              className="ms-auto"
              id={(classes.itemfont, classes.linkspacing)}
            >
              <Button
                id={classes.buttonspacing}
                className="mx-2 px-5"
                variant="outline-primary"
                onClick={() => navigate("/")}
              >
                Go back
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>

      <Container fluid className={davinci_css.container}>
        <div className={davinci_css.background}>
          <div className={davinci_css.davinci_container}>
            <div className={davinci_css.davinci_left_section}>
              <img
                src={color.model}
                alt=""
                className={davinci_css.davinci_img}
              />
            </div>

            <div className={davinci_css.davinci_middle_section}>
              <Chakra
                color={color}
                dropDownHandler={dropDownHandler}
                updateDropDown={updateDropDown}
                dropDownValue={dropDownValue}
              />
            </div>

            <div className={davinci_css.davinci_last_section}>
              <h4 className={davinci_css.davinci_spectrum}>
                U4Ea&apos;s Emotional Spectrum
              </h4>
              <img
                src={color.spectrumImg}
                alt=""
                className={davinci_css.davinci_spectrum_img}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DaVinci;
