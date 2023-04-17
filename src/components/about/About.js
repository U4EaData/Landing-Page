import React from "react";
import classes from "./About.module.css";
import appClasses from "../../App.module.css";
import { Container, Col, Row } from "react-bootstrap";
import "../image.css";
import aboutImg from "../../images/about.svg";

const About = () => {
  return (
    <section className={appClasses.sectionContainer}>
      <Container className={classes.aboutSection}>
        <Row
          className={`${appClasses.mobileflex} ${classes.product2FlexContainer} align-items-center`}
        >
          <Col className="align-content-center">
            <div className="p-md-5 p-5 d-flex justify-content-center ">
              <img
                className="product2Img"
                src={aboutImg}
                alt="iphone"
              ></img>
            </div>
          </Col>

          <Col>
            <div className="p-5 p-md-5 ">
              <h3 className={appClasses.h3class}>About U4Ea</h3>
              <p className={appClasses.pclass}>
                Here at U4Ea, we believe that world peace begins with inner peace.
                <br></br>
                U4Ea is a collective of individuals coming together in the pursuit of sound as a healing modality. Be it mental, emotional, or physical pain or stress, history and science continue to support that bringing these states of being into balance promotes healing and sound is an accessible medium to do so.
                <br></br>
                Binaural Beats have been proven effective in 10 minutes or less and our 80% efficacy informs us that we are on the right path to taming the leading cause of cancer, stress. Enabling everyone to live a more balanced and peaceful life, full of ever-healthier choices.
                <br></br>
                In conjunction with The Verse and BioAcoustics Lab, U4Ea is developing clinically researched sound-based healing modalities in a variety of media formats; from mobile apps and video games to digital therapeutics and companion diagnostics.
                <br></br>
                Founded in 2017, U4Ea has helped more than 37,000 people across 96 countries address physical, emotional, and mental challenges by offering binaural beats, enabling listeners to shift into healing states of mind.
              </p>
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
