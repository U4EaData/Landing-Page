import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Col, Row } from "react-bootstrap";
import classes from "./BinauralBeats.module.css"
import appClasses from "../../App.module.css";
import { Fade } from "react-awesome-reveal";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWaveSquare } from '@fortawesome/free-solid-svg-icons';


function BinauralBeats() {
  const [feel, setFeel] = useState("");
  const [boost, setBoost] = useState("");
  const [thingDuring, setThingDuring] = useState("");
  const [filename, setFilename] = useState("");
  const [playing, setPlaying] = useState(false);
  const onFeelChange = (e) => {
    setFeel(e.target.value)
  }
  const onBoostChange = (e) => {
    setBoost(e.target.value)
  }
  const onThingDuringChange = (e) => {
    setThingDuring(e.target.value)
  }
  const playFrequencies = (e) => {
    if (!playing) {
      if (feel != "" && boost != "" && thingDuring != "") {
        console.log("FULL VAR: Playing frequencies from " + filename)
        setPlaying(true)
        // figure out how to play frequencies
      } else {
        alert("Please select from all three fields")
      }
    } else {
      console.log("Stopping playing, click again to start playing again")
      setPlaying(false)
    }
  }
  useEffect(() => {
    setFilename(feel + "_" + boost + "_" + thingDuring + ".wav")
  }, [feel, boost, thingDuring])
  return (
      <section className={classes.sectionContainer}>
        <Container className={classes.scienceSection}>
            <Col>
                <Row className={classes.nogutters}>
                  <Col>
                    <p className={classes.centertext}>I want to feel</p>
                  </Col>
                  <Col>
                  <select value={feel} onChange={onFeelChange} className={classes.customdropdown}>
                    <option value="">Select</option>
                    <option value="oneness">Oneness</option>
                    <option value="intuitive">Intuitive</option>
                    <option value="resolved">Resolved</option>
                    <option value="harmonious">Harmonious</option>
                    <option value="miraculous">Miraculous</option>
                    <option value="cleansed">Cleansed</option>
                    <option value="liberation">Liberation</option>
                  </select>
                  </Col>
                  <Col>
                    <p className={classes.centertext}>and boost</p>
                  </Col>
                  <Col>
                    <select value={boost} onChange={onBoostChange} className={classes.customdropdown}>
                      <option value="">Select</option>
                      <option value="vitality">Vitality</option>
                      <option value="creativity">Creativity</option>
                      <option value="willpower">Will Power</option>
                      <option value="love">Love</option>
                      <option value="selfexpression">Self-Expression</option>
                      <option value="focus">Focus</option>
                      <option value="consciousness">Consciousness</option>
                      <option value="painrelief">Pain Relief</option>
                      <option value="cureall">Cure-All</option>
                      <option value="vigor">Vigor</option>
                      <option value="rejuvination">Rejuvination</option>
                    </select>
                  </Col>
                  <Col>
                    <p className={classes.centertext}>while I</p>
                  </Col>
                  <Col>
                    <select value={thingDuring} onChange={onThingDuringChange} className={classes.customdropdown}>
                      <option value="">Select</option>
                      <option value="selfmotivate">Self Motivate</option>
                      <option value="improvemood">Improve my Mood</option>
                      <option value="meditate">Mediate</option>
                      <option value="relax">Relax</option>
                      <option value="sleep">Sleep</option>
                    </select>
                  </Col>
                </Row>
                <Row>
                  <div onClick={playFrequencies}>
                    <Col className={classes.playsound}>
                      <FontAwesomeIcon icon={faWaveSquare} size="10x" style={{ color: 'rgb(138, 43, 226)' }} />
                      <p className={classes.playfrequencies}>Play Frequencies</p>
                    </Col>
                  </div>
                </Row>
                {/* <Button
                  variant="primary"
                  size="lg"
                  className={appClasses.buttonsize}
                  onClick={playFrequencies}
                >
                  Play Frequencies
                </Button> */}
            </Col>
        </Container>
      </section>
  )
}


export default BinauralBeats