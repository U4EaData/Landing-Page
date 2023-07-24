import React from "react";
import classes from "./About.module.css";
import greenCircle from "../../images/green-circle-cropped.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const About = () => {
  return (
    <section className={classes.sectioncontainer}>
      <Container className={classes.container}>
        <Row>
          <Col>
            <img
              src={greenCircle}
              alt="green journey chakra"
              className={classes.greencricleimage}
            />
          </Col>
          <Col>
            <h1 className={classes.bigtext}>The Healing Power of Sound</h1>
            <div className={classes.textbox}>
              <p className={classes.desctext}><b>Sound has been used to heal for thousands of years in cultures all around the world. Here at U4EA, we bring that power to you!</b></p>
              <div className={classes.gap}/>
              <p className={classes.desctext}>Binaural beats have been proven effective in 10 minutes or less and our 80% efficacy informs us that we are on the path to taming the leading cause of cancer, stress.</p>
              <div className={classes.gap}/>
              <p className={classes.desctext}>Enabling everyone to live a more balanced and peaceful life, full of ever-healthier choices.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

// Old AboutSection Component
// import React from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
// import Image from "../images/u4eaman.svg";
// import aboutImg from "../images/about.svg";
// import "./image.css";
// import Popup from "../popup/Popup.js";

// import classes from "./AboutSection.module.css";
// import section from "../App.module.css";
// import { Fade } from "react-awesome-reveal";

// function AboutSection() {
//   const aboutTitle = "Title from about";
//   const aboutText = "Text from about";
//   return (
//     <Fade duration={900} triggerOnce="true">
//       <section className={section.sectionContainer} id="about">
//         <Container>
//           <Row className={classes.mobileflex}>
//             <Col lg={5} className=" d-flex justify-content-center">
//               <img
//                 src={aboutImg}
//                 alt="man in yoga pose listening to music"
//                 className="imageSize"
//               ></img>
//             </Col>
//             <Col className="col-lg-7 py-5 align-items-center">
//               <div className="p-5 p-md-5 ">
//                 <h1 className={classes.h1class}>About U4Ea</h1>
//                 <p className={classes.pclass}>
//                   Founded in 2017 by Brandon Howard, U4Ea has helped more than
//                   36,000 people across the world address physical, emotional,
//                   and mental challenges by offering combinations of tones known
//                   as <span className={classes.heavier}>binaural beats</span>,
//                   enabling listeners to shift into healing states of mind.
//                 </p>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Fade>
//   );
// }
