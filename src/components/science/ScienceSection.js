//import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Col, Row } from "react-bootstrap";
import circle from "../../images/page6.png";
import soundScience from "../../images/sound-science.svg";
import girlBlue from "../../images/girl-blue.png";
//import classes from "../AboutSection.module.css";
import Button from "react-bootstrap/Button";
import Popup from "../../popup/Popup.js";
import { BsArrowReturnRight } from "react-icons/bs";
import section from "../../App.module.css";
import "../image.css";
import React, { useEffect } from 'react';
import { Fade } from "react-awesome-reveal";
//import FlipCard from "./flipcard.js";
import classes from "./ScienceSection.module.css";
import classNames from 'classnames';
import appClasses from "../../App.module.css";
import ReactCardFlip from 'react-card-flip';
//import { ReactDOM } from "react-dom";
import './ScienceSection.module.css';





function Science() {
const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }; 


  return(
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div className="cardLayout">
      <div className="frontText">Front of card</div> 
        <button onClick={handleClick}> Learn more!</button>
      </div>

      <div className="cardLayout">
      <div className="backText">Back of card</div> 
        <button onClick={handleClick}>Click to flip</button>
      </div>
    </ReactCardFlip>
  );
};
};
ReactDOM.render(<CardFlip />, document.querySelector("#root"));


export default Science;