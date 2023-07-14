import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Col, Row } from "react-bootstrap";
import classes from "./BinauralBeats.module.css"
import appClasses from "../../App.module.css";
import { Fade } from "react-awesome-reveal";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWaveSquare } from '@fortawesome/free-solid-svg-icons';
import { Panner, Oscillator } from 'tone';

function BinauralBeats() {
  const [feel, setFeel] = useState("");
  const [boost, setBoost] = useState("");
  const [thingDuring, setThingDuring] = useState("");
  const [playing, setPlaying] = useState(false);
  const [freq1, setFreq1] = useState(0);
  const [freq2, setFreq2] = useState(0);
  const osc = useRef(null);
  const osc2 = useRef(null);
  const onFeelChange = (e) => {
    setFeel(e.target.value)
  }
  const onBoostChange = (e) => {
    setBoost(e.target.value)
  }
  const onThingDuringChange = (e) => {
    setThingDuring(e.target.value)
  }
  const updateMap = (map, sf) => { // updates the values of the map with the given scale factor (used in the setFrequencies method)
    for(let [key, val] of map) {
      map[key] = val * sf;
    }
  }
  const binauralBeat = () =>{
      setFrequencies()
      // set up panning and volume
      const panner1 = new Panner(1).toDestination();
      const panner2 = new Panner(-1).toDestination();
      // make and start a binaural beat
      osc.current = (new Oscillator({
        type: "sine",
        frequency: freq1,
        volume: -12
      })).toDestination().connect(panner1).start();
      osc2.current = (new Oscillator({
        type: "sine",
        frequency: freq2,
        volume: -12
      })).toDestination().connect(panner2).start();
  }
  const playFrequencies = () => {
    if (!playing) {
      if (feel != "" && boost != "" && thingDuring != "") { // frequencies should already be set via the useEffect 
        // console.log(`FULL VAR: Playing frequencies from feel: ${feel} boost: ${boost} thingDuring: ${thingDuring}`)
        // console.log(`Frequency 1: ${freq1}, Frequency 2: ${freq2}`)
        binauralBeat();
        setPlaying(true);
        // figure out how to play frequencies
      } else {
        alert("Please select from all three fields")
      }
    } else {
      // console.log("Stopping playing, click again to start playing again");
      osc.current.stop();
      osc2.current.stop();
      setPlaying(false);
    }
  }
  useEffect(() => {
    setFrequencies()
  }, [feel, boost, thingDuring])

  const setFrequencies = () => {
    let param3MinusMap = new Map();
    param3MinusMap.set("selfmotivate", 1.0);
    param3MinusMap.set("improvemymood", 0.5);
    param3MinusMap.set("meditate", 0.25);
    param3MinusMap.set("relax", 0.125);
    param3MinusMap.set("sleep", 0.0625);
    param3MinusMap.set("", 0.0); // this case will never happen when the user presses the button, however in the useEffect, this could happen, so this is error prevention
    switch (feel) {
      case "oneness": setFreq1(60.19); break;
      case "intuitive": setFreq1(53.25); break;
      case "resolved": setFreq1(46.31); break;
      case "harmonious": setFreq1(39.94); break;
      case "miraculous": setFreq1(33.00); break;
      case "cleansed": setFreq1(52.13); break;
      case "liberation": setFreq1(49.5); break;
      default: setFreq1(0.0); break;
    }
    switch (boost) {
      case "vitality": updateMap(param3MinusMap, 24.75); break;
      case "creativity": updateMap(param3MinusMap, 26.06); break;
      case "willpower": updateMap(param3MinusMap, 16.5); break;
      case "love": updateMap(param3MinusMap, 19.97); break;
      case "selfexpression": updateMap(param3MinusMap, 23.16); break;
      case "focus": updateMap(param3MinusMap, 26.63); break;
      case "consciousness": updateMap(param3MinusMap, 30.09); break;
      case "painrelief": updateMap(param3MinusMap, 21.75); break;
      case "cureall": updateMap(param3MinusMap, 20.00); break;
      case "vigor": updateMap(param3MinusMap, 17.81); break;
      case "rejuvenation": updateMap(param3MinusMap, 15.66); break;
      default: updateMap(param3MinusMap, 0.0); break;
    }
    setFreq2(freq1 - param3MinusMap[thingDuring]);
  }
  return (
      <section className={classes.sectionContainer}>
        <Container className={classes.scienceSection}>
            <Col>
                <Row className={classes.givepadding}/>
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
                      <option value="rejuvenation">Rejuvenation</option>
                    </select>
                  </Col>
                  <Col>
                    <p className={classes.centertext}>while I</p>
                  </Col>
                  <Col>
                    <select value={thingDuring} onChange={onThingDuringChange} className={classes.customdropdown}>
                      <option value="">Select</option>
                      <option value="selfmotivate">Self Motivate</option>
                      <option value="improvemymood">Improve my Mood</option>
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
            </Col>
        </Container>
      </section>
  )
}


export default BinauralBeats