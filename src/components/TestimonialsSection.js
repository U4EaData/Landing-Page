import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TestimonialsSection.module.css";
import "react-bootstrap/Carousel";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import img3 from "../images/test1background.png";
import img2 from "../images/test2background.png";
import img1 from "../images/test3background.png";

function TestimonialsSection() {
  return (
    <div className={styles.App}>
      <div className="container-fluid col-xxl-12 px-4 py-5">
        <div className="col-lg-12">
          <h1 className={styles.title}>Happy Customers</h1>
        </div>
        <Carousel variant="dark">
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
        </Carousel>
      </div>
    </div>
  );
}

export default TestimonialsSection;
