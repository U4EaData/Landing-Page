import { React, useState, useRef, useEffect } from "react";
import styles from "./JourneySection.module.css";
import "react-bootstrap/Carousel";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import imgGreen from "../../images/journey-green.png";
import imgYellow from "../../images/journey-yellow.png";
import imgRed from "../../images/journey-red.png";
import imgOrange from "../../images/journey-orange.jpg";
import imgBlue from "../../images/journey-blue.jpg";
import imgPurple from "../../images/journey-purple.jpg";
import imgIndigo from "../../images/journey-indigo.jpg";
import {
  BsPlayCircleFill,
  BsFillPauseCircleFill,
  BsPause,
} from "react-icons/bs";
import beautiful from "../../audio/beautiful.mp3";
import dreaming from "../../audio/dreaming.mp3";
import cartoon from "../../audio/cartoon.mp3";
import useSound from "use-sound";
import blue from "../../audio/art_sel_med-blu.mp3";
import purple from "../../audio/Awa_con_med-pur.mp3";
import yellow from "../../audio/bal_wil_med-yel.mp3";
import green from "../../audio/Com_lov_med-gre.mp3";
import red from "../../audio/gro_vit_med-re.mp3";
import orange from "../../audio/jo_cre_med-ora.mp3";
import indigo from "../../audio/tra_foc_med-ind.mp3";

import { Fade } from "react-awesome-reveal";

function JourneySection() {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [song, setSong] = useState(red);
  const [play, { stop }] = useSound(song);

  const playAudio = (e) => {
    play();
  };

  const stopAudio = () => {
    setAudioPlaying(false);
    stop();
  };

  const onLeave = () => {
    setHover(false);
  };

  return (
    <Fade duration={900} triggerOnce="true">
      <div className={styles.App} id="journey">
        <div className="container-fluid align-items-center col-xxl-12 px-4 py-5">
          <div className="col-lg-12">
            <h1 className={styles.title}>Support for your journey</h1>
            <div className={styles.descriptioncontainer}>
              <p className={styles.journeydescription}>
                Click on a card to preview a binaural beat. We recommend using
                earphones or headphones for the best experience!
              </p>
            </div>
          </div>
          <Carousel variant="dark">
            <Carousel.Item>
              <div>
                <div className="col-lg-9 mx-auto">
                  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-lg-4 d-flex justify-content-center">
                      <Card
                        className={styles.journeyimg}
                        style={{ width: "18rem", height: "22rem" }}
                      >
                        <Card.Img
                          style={{ width: "18rem", height: "22rem" }}
                          variant="top"
                          src={imgYellow}
                          id={1}
                          onMouseEnter={() => {
                            setSong(yellow);
                          }}
                          onClick={() => playAudio()}
                          onMouseLeave={() => {
                            stop();
                          }}
                        />
                        <Card.Body>
                          <div className={styles.body}>
                            <Card.Text className={styles.whitetext}>
                              Binaural Beat for Boosting Will Power
                            </Card.Text>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-center">
                      <Card
                        className={styles.journeyimg}
                        style={{ width: "18rem", height: "22rem" }}
                      >
                        <Card.Img
                          style={{ width: "18rem", height: "22rem" }}
                          variant="top"
                          src={imgOrange}
                          id={2}
                          onMouseEnter={() => setSong(orange)}
                          onClick={() => playAudio()}
                          onMouseLeave={() => stop()}
                        />
                        <Card.Body>
                          <div className={styles.body}>
                            <Card.Text className={styles.whitetext}>
                              Binaural Beat for Boosting Creativity
                            </Card.Text>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-center">
                      <Card
                        className={styles.journeyimg}
                        style={{ width: "18rem", height: "22rem" }}
                      >
                        <Card.Img
                          style={{ width: "18rem", height: "22rem" }}
                          variant="top"
                          src={imgRed}
                          onMouseEnter={() => setSong(red)}
                          onClick={() => playAudio()}
                          onMouseLeave={() => stop()}
                        />
                        <Card.Body>
                          <div className={styles.body}>
                            <Card.Text className={styles.whitetext}>
                              Binaural Beat for Boosting Patience
                            </Card.Text>
                          </div>
                        </Card.Body>
                      </Card>
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
                      <Card
                        className={styles.journeyimg}
                        style={{ width: "18rem", height: "22rem" }}
                      >
                        <Card.Img
                          style={{ width: "18rem", height: "22rem" }}
                          variant="top"
                          src={imgIndigo}
                          onMouseEnter={() => setSong(indigo)}
                          onClick={() => playAudio()}
                          onMouseLeave={() => stop()}
                        />
                        <Card.Body>
                          <div className={styles.body}>
                            <Card.Text className={styles.whitetext}>
                              Binaural Beat for Boosting Intuition
                            </Card.Text>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-center">
                      <Card
                        className={styles.journeyimg}
                        style={{ width: "18rem", height: "22rem" }}
                      >
                        <Card.Img
                          style={{ width: "18rem", height: "22rem" }}
                          variant="top"
                          src={imgBlue}
                          onMouseEnter={() => setSong(blue)}
                          onClick={() => playAudio()}
                          onMouseLeave={() => stop()}
                        />
                        <Card.Body>
                          <div className={styles.body}>
                            <Card.Text className={styles.whitetext}>
                              Binaural Beat for Boosting Self-Expression
                            </Card.Text>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-center">
                      <Card
                        className={styles.journeyimg}
                        style={{ width: "18rem", height: "22rem" }}
                      >
                        <Card.Img
                          style={{ width: "18rem", height: "22rem" }}
                          variant="top"
                          src={imgGreen}
                          onMouseEnter={() => setSong(green)}
                          onClick={() => playAudio()}
                          onMouseLeave={() => stop()}
                        />
                        <Card.Body>
                          <div className={styles.body}>
                            <Card.Text className={styles.whitetext}>
                              Binaural Beat for Boosting Compassion
                            </Card.Text>
                          </div>
                        </Card.Body>
                      </Card>
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
                      <Card
                        className={styles.journeyimg}
                        style={{ width: "18rem", height: "22rem" }}
                      >
                        <Card.Img
                          style={{ width: "18rem", height: "22rem" }}
                          variant="top"
                          src={imgPurple}
                          onMouseEnter={() => setSong(purple)}
                          onClick={() => playAudio()}
                          onMouseLeave={() => stop()}
                        />
                        <Card.Body>
                          <div className={styles.body}>
                            <Card.Text className={styles.whitetext}>
                              Binaural Beat for Boosting Awareness
                            </Card.Text>
                          </div>
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
    </Fade>
  );
}

export default JourneySection;
