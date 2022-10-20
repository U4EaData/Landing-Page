import React from 'react';
import styles from './JourneySection.module.css';
import 'react-bootstrap/Carousel';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import img3 from '../images/journey1background.png';
import img2 from '../images/journey2background.png';
import img1 from '../images/journey3background.png';
import button from '../images/journeybutton.png';

function JourneySection() {
  return (
    <div className={styles.App} id="journey">
      <div class="container-fluid align-items-center col-xxl-12 px-4 py-5">
        <div class="col-lg-12">
          <h1 className={styles.title}>Support for your journey</h1>
        </div>
        <Carousel variant="dark">
          <Carousel.Item>
            <div>
              <div class="col-lg-9 mx-auto">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                  <div class="col-lg-4 d-flex justify-content-center">
                    <Card style={{ width: '18rem', height: '22rem' }}>
                      <Card.Img
                        style={{ width: '18rem', height: '22rem' }}
                        variant="top"
                        src={img1}
                      />
                      <Card.Body>
                        <div className={styles.body}>
                          <Card.Text className={styles.whitetext}>
                            Binaural Beats for Boosting Patience
                          </Card.Text>
                        </div>

                        <img className={styles.button} src={button}></img>
                      </Card.Body>
                    </Card>
                  </div>
                  <div class="col-lg-4 d-flex justify-content-center">
                    <Card style={{ width: '18rem', height: '22rem' }}>
                      <Card.Img
                        style={{ width: '18rem', height: '22rem' }}
                        variant="top"
                        src={img2}
                      />
                      <Card.Body>
                        <div className={styles.body}>
                          <Card.Text className={styles.whitetext}>
                            Binaural Beats for Boosting Confidence
                          </Card.Text>
                        </div>
                        <img className={styles.button} src={button}></img>
                      </Card.Body>
                    </Card>
                  </div>
                  <div class="col-lg-4 d-flex justify-content-center">
                    <Card style={{ width: '18rem', height: '22rem' }}>
                      <Card.Img
                        style={{ width: '18rem', height: '22rem' }}
                        variant="top"
                        src={img3}
                      />
                      <Card.Body>
                        <div className={styles.body}>
                          <Card.Text className={styles.whitetext}>
                            Binaural Beats for Boosting Communication
                          </Card.Text>
                        </div>
                        <img className={styles.button} src={button}></img>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div>
              <div class="col-lg-9 mx-auto">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                  <div class="col-lg-4 d-flex justify-content-center">
                    <Card style={{ width: '18rem', height: '22rem' }}>
                      <Card.Img
                        style={{ width: '18rem', height: '22rem' }}
                        variant="top"
                        src={img1}
                      />
                      <Card.Body>
                        <div className={styles.body}>
                          <Card.Text className={styles.whitetext}>
                            Binaural Beats for Boosting Patience
                          </Card.Text>
                        </div>

                        <img className={styles.button} src={button}></img>
                      </Card.Body>
                    </Card>
                  </div>
                  <div class="col-lg-4 d-flex justify-content-center">
                    <Card style={{ width: '18rem', height: '22rem' }}>
                      <Card.Img
                        style={{ width: '18rem', height: '22rem' }}
                        variant="top"
                        src={img2}
                      />
                      <Card.Body>
                        <div className={styles.body}>
                          <Card.Text className={styles.whitetext}>
                            Binaural Beats for Boosting Confidence
                          </Card.Text>
                        </div>
                        <img className={styles.button} src={button}></img>
                      </Card.Body>
                    </Card>
                  </div>
                  <div class="col-lg-4 d-flex justify-content-center">
                    <Card style={{ width: '18rem', height: '22rem' }}>
                      <Card.Img
                        style={{ width: '18rem', height: '22rem' }}
                        variant="top"
                        src={img3}
                      />
                      <Card.Body>
                        <div className={styles.body}>
                          <Card.Text className={styles.whitetext}>
                            Binaural Beats for Boosting Communication
                          </Card.Text>
                        </div>
                        <img className={styles.button} src={button}></img>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div>
              <div class="col-lg-9 mx-auto">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                  <div class="col-lg-4 d-flex justify-content-center">
                    <Card style={{ width: '18rem', height: '22rem' }}>
                      <Card.Img
                        style={{ width: '18rem', height: '22rem' }}
                        variant="top"
                        src={img1}
                      />
                      <Card.Body>
                        <div className={styles.body}>
                          <Card.Text className={styles.whitetext}>
                            Binaural Beats for Boosting Patience
                          </Card.Text>
                        </div>

                        <img className={styles.button} src={button}></img>
                      </Card.Body>
                    </Card>
                  </div>
                  <div class="col-lg-4 d-flex justify-content-center">
                    <Card style={{ width: '18rem', height: '22rem' }}>
                      <Card.Img
                        style={{ width: '18rem', height: '22rem' }}
                        variant="top"
                        src={img2}
                      />
                      <Card.Body>
                        <div className={styles.body}>
                          <Card.Text className={styles.whitetext}>
                            Binaural Beats for Boosting Confidence
                          </Card.Text>
                        </div>
                        <img className={styles.button} src={button}></img>
                      </Card.Body>
                    </Card>
                  </div>
                  <div class="col-lg-4 d-flex justify-content-center">
                    <Card style={{ width: '18rem', height: '22rem' }}>
                      <Card.Img
                        style={{ width: '18rem', height: '22rem' }}
                        variant="top"
                        src={img3}
                      />
                      <Card.Body>
                        <div className={styles.body}>
                          <Card.Text className={styles.whitetext}>
                            Binaural Beats for Boosting Communication
                          </Card.Text>
                        </div>
                        <img className={styles.button} src={button}></img>
                      </Card.Body>
                    </Card>
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

export default JourneySection;
