import React from "react";
import classes from "./About.module.css";
import image from "../../images/chakras-image.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Fade } from "react-awesome-reveal";
import appClasses from "../../App.module.css";
import { useNavigate } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.css";

const About = () => {
  return (
    <Fade duration={900} triggerOnce="true">
      <section className={classes.sectioncontainer}>
        <Container className={classes.container}>
          <Row className={`${appClasses.mobileflex} ${classes.aboutFlexContainer} align-items-center`}>
            <Col className="align-content-center">
              <div className="d-flex justify-content-center ">
                <img
                  className="chakrasImg"
                  src={image}
                  alt="chakra image"
                ></img>
              </div>
            </Col>
            <Col>
              <h1 className={classes.bigtext}>About Us</h1>
              <div className={classes.textbox}>
                <p className={classes.desctext}><b>At U4EA, we belive that WORLD PEACE begins with INNER PEACE.</b></p>
                <div className={classes.gap}/>
                <p className={classes.desctext}>We use the science of music to make it healthier in supporting your journey to mental, emotional and physical balance.</p>
                <div className={classes.gap}/>
                <p className={classes.desctext}>We design our innovations to empower individuals with healing vibrations everywhere they go.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fade>
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
