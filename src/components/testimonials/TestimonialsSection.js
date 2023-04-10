import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TestimonialsSection.module.css";
import "react-bootstrap/Carousel";
import appClasses from "../../App.module.css";
import Container from "react-bootstrap/Container";
import { Fade } from "react-awesome-reveal";

function TestimonialsSection() {
  return (
    <Fade duration={900} triggerOnce="true">
      <section className={appClasses.sectionContainer}>
        <Container>
          <div className={styles.testimonialSection}>
            <h3 className={appClasses.h3class}>
              What Our Customers Are Saying
            </h3>
            <div className={styles.testimonialFlexContainer}>
              <div className={styles.testimonialFlexItem1}>
                <p className={styles.testimonialPClass}></p>
              </div>
              <div className={styles.testimonialFlexItem2}>
                <p className={styles.testimonialPClass}></p>
              </div>
              <div className={styles.testimonialFlexItem3}>
                <p className={styles.testimonialPClass}></p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Fade>
  );
}

export default TestimonialsSection;
