import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TestimonialsSection.module.css";
import "react-bootstrap/Carousel";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import img3 from "../../images/test1background.png";
import img2 from "../../images/test2background.png";
import img1 from "../../images/test3background.png";
import section from "../../App.module.css";
import cloud1 from "../../images/cloud1.svg";
import cloud2 from "../../images/cloud2.svg";
import cloud3 from "../../images/cloud3.svg";
import cloud4 from "../../images/cloud4.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Fade } from "react-awesome-reveal";

function TestimonialsSection() {
  return (
    <Fade duration={900} triggerOnce="true">
      <section className={section.sectionContainer}>
        <div className={styles.testimonialSection}>
          <h1 className={styles.title}>What Our Customers Are Saying</h1>
          <div className={styles.cloudContainer}>
            <img
              src={cloud1}
              alt="testimonial-cloud"
              className={styles.cloud}
            />
            <div className={styles.cloudTextContainer}>
              <p className={styles.cloudText}>
                &quot;If you are looking for something mood changing the most
                natural way then you definitely are in the right place!&quot;
              </p>
            </div>
          </div>
          <div className={styles.cloudContainer2}>
            <img
              src={cloud2}
              alt="testimonial-cloud"
              className={styles.cloud}
            />
            <div className={styles.cloudTextContainer2}>
              <p className={styles.cloudText}>
                &quot;They help me calm my mind while I meditate&quot;
              </p>
            </div>
          </div>
          <div className={styles.cloudContainer3}>
            <img
              src={cloud3}
              alt="testimonial-cloud"
              className={styles.cloud}
            />
            <div className={styles.cloudTextContainer3}>
              <p className={styles.cloudText}>
                &quot;It is so user friendly and easy that you don&apos;t have
                to understand frequencies and binaural beats to use it and
                benefit from it.&quot;
              </p>
            </div>
          </div>
          <div className={styles.cloudContainer4}>
            <img
              src={cloud4}
              alt="testimonial-cloud"
              className={styles.cloud}
            />
            <div className={styles.cloudTextContainer4}>
              <p className={styles.cloudText}>
                &quot;I pop in my AirPods and whether I&apos;’m at work or home
                I can choose what I want according to my mood.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}

export default TestimonialsSection;

{
  /* <Carousel variant="dark">
          <Carousel.Item>
            <div>
              <div className="col-lg-9 mx-auto">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                  <div className="col-lg-4 d-flex justify-content-center">
                    <Card style={{ width: "18rem", height: "18rem" }}>
                      <Card.Img
                        style={{ width: "18rem", height: "18rem" }}
                        variant="top"
                        src={img1}
                      />
                      <Card.Body>
                        <div className={styles.body}>
                          <div className={styles.text}>
                            <Card.Title>First Last</Card.Title>
                            <Card.Text>
                              Founder & CEO @reallygreatsite
                            </Card.Text>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-lg-4 d-flex justify-content-center">
                    <Card style={{ width: "18rem", height: "18rem" }}>
                      <Card.Img
                        style={{ width: "18rem", height: "18rem" }}
                        variant="top"
                        src={img2}
                      />
                      <Card.Body>
                        <div className={styles.body}>
                          <div className={styles.text}>
                            <Card.Title>First Last</Card.Title>
                            <Card.Text>
                              Founder & CEO @reallygreatsite
                            </Card.Text>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-lg-4 d-flex justify-content-center">
                    <Card style={{ width: "18rem", height: "18rem" }}>
                      <Card.Img
                        style={{ width: "18rem", height: "18rem" }}
                        variant="top"
                        src={img3}
                      />
                      <Card.Body>
                        <div className={styles.body}>
                          <div className={styles.text}>
                            <Card.Title>First Last</Card.Title>
                            <Card.Text>
                              Founder & CEO @reallygreatsite
                            </Card.Text>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                  <div className="col-lg-4 ">
                    <p className={styles.title}>
                      If you want real marketing software that works for your
                      business and clients - Larana, Inc. got you covered.
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <p className={styles.title}>
                      If you want real marketing software that works for your
                      business and clients - Larana, Inc. got you covered.
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <p className={styles.title}>
                      If you want real marketing software that works for your
                      business and clients - Larana, Inc. got you covered.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div>
              <div className="col-lg-9 mx-auto">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                  <div className="col-lg-4 d-flex justify-content-center">
                    <Card style={{ width: "18rem", height: "18rem" }}>
                      <Card.Img
                        style={{ width: "18rem", height: "18rem" }}
                        variant="top"
                        src={img1}
                      />
                      <Card.Body>
                        <div className={styles.body}>
                          <div className={styles.text}>
                            <Card.Title>First Last</Card.Title>
                            <Card.Text>
                              Founder & CEO @reallygreatsite
                            </Card.Text>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-lg-4 d-flex justify-content-center">
                    <Card style={{ width: "18rem", height: "18rem" }}>
                      <Card.Img
                        style={{ width: "18rem", height: "18rem" }}
                        variant="top"
                        src={img2}
                      />
                      <Card.Body>
                        <div className={styles.body}>
                          <div className={styles.text}>
                            <Card.Title>First Last</Card.Title>
                            <Card.Text>
                              Founder & CEO @reallygreatsite
                            </Card.Text>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-lg-4 d-flex justify-content-center">
                    <Card style={{ width: "18rem", height: "18rem" }}>
                      <Card.Img
                        style={{ width: "18rem", height: "18rem" }}
                        variant="top"
                        src={img3}
                      />
                      <Card.Body>
                        <div className={styles.body}>
                          <div className={styles.text}>
                            <Card.Title>First Last</Card.Title>
                            <Card.Text>
                              Founder & CEO @reallygreatsite
                            </Card.Text>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                  <div className="col-lg-4">
                    <p className={styles.title}>
                      If you want real marketing software that works for your
                      business and clients - Larana, Inc. got you covered.
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <p className={styles.title}>
                      If you want real marketing software that works for your
                      business and clients - Larana, Inc. got you covered.
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <p className={styles.title}>
                      If you want real marketing software that works for your
                      business and clients - Larana, Inc. got you covered.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div>
              <div className="col-lg-9 mx-auto">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                  <div className="col-lg-4 d-flex justify-content-center">
                    <Card style={{ width: "18rem", height: "18rem" }}>
                      <Card.Img
                        style={{ width: "18rem", height: "18rem" }}
                        variant="top"
                        src={img1}
                      />
                      <Card.Body>
                        <div className={styles.body}>
                          <div className={styles.text}>
                            <Card.Title>First Last</Card.Title>
                            <Card.Text>
                              Founder & CEO @reallygreatsite
                            </Card.Text>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-lg-4 d-flex justify-content-center">
                    <Card style={{ width: "18rem", height: "18rem" }}>
                      <Card.Img
                        style={{ width: "18rem", height: "18rem" }}
                        variant="top"
                        src={img2}
                      />
                      <Card.Body>
                        <div className={styles.body}>
                          <div className={styles.text}>
                            <Card.Title>First Last</Card.Title>
                            <Card.Text>
                              Founder & CEO @reallygreatsite
                            </Card.Text>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-lg-4 d-flex justify-content-center">
                    <Card style={{ width: "18rem", height: "18rem" }}>
                      <Card.Img
                        style={{ width: "18rem", height: "18rem" }}
                        variant="top"
                        src={img3}
                      />
                      <Card.Body>
                        <div className={styles.body}>
                          <div className={styles.text}>
                            <Card.Title>First Last</Card.Title>
                            <Card.Text>
                              Founder & CEO @reallygreatsite
                            </Card.Text>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                  <div className="col-lg-4">
                    <p className={styles.title}>
                      If you want real marketing software that works for your
                      business and clients - Larana, Inc. got you covered.
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <p className={styles.title}>
                      If you want real marketing software that works for your
                      business and clients - Larana, Inc. got you covered.
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <p className={styles.title}>
                      If you want real marketing software that works for your
                      business and clients - Larana, Inc. got you covered.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel> */
}
