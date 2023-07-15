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

  const onFeelChange = (newFeel) => {
    console.log(`Feel changed to ${newFeel}`);
    setFeel(newFeel);
  }
  const onBoostChange = (newBoost) => {
    console.log(`Boost changed to ${newBoost}`);
    setBoost(newBoost);
  }
  const onThingDuringChange = (newTD) => {
    console.log(`TD changed to ${newTD}`);
    setThingDuring(newTD)
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
    param3MinusMap.set("Self Motivate", 1.0);
    param3MinusMap.set("Improve my Mood", 0.5);
    param3MinusMap.set("Meditate", 0.25);
    param3MinusMap.set("Relax", 0.125);
    param3MinusMap.set("Sleep", 0.0625);
    param3MinusMap.set("", 0.0); // this case will never happen when the user presses the button, however in the useEffect, this could happen, so this is error prevention
    switch (feel) {
      case "Oneness": setFreq1(60.19); break;
      case "Intuitive": setFreq1(53.25); break;
      case "Resolved": setFreq1(46.31); break;
      case "Harmonious": setFreq1(39.94); break;
      case "Miraculous": setFreq1(33.00); break;
      case "Cleansed": setFreq1(52.13); break;
      case "Liberation": setFreq1(49.5); break;
      default: setFreq1(0.0); break;
    }
    switch (boost) {
      case "Vitality": updateMap(param3MinusMap, 24.75); break;
      case "Creativity": updateMap(param3MinusMap, 26.06); break;
      case "Will Power": updateMap(param3MinusMap, 16.5); break;
      case "Love": updateMap(param3MinusMap, 19.97); break;
      case "Self-Expression": updateMap(param3MinusMap, 23.16); break;
      case "Focus": updateMap(param3MinusMap, 26.63); break;
      case "Consciousness": updateMap(param3MinusMap, 30.09); break;
      case "Pain Relief": updateMap(param3MinusMap, 21.75); break;
      case "Cure-All": updateMap(param3MinusMap, 20.00); break;
      case "Vigor": updateMap(param3MinusMap, 17.81); break;
      case "Rejuvenation": updateMap(param3MinusMap, 15.66); break;
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
                  <div className={classes.newdropdown}>
                    <button className={classes.link}>{feel || 'Select'}</button>
                    <div className={classes.newdropdownmenu} onClick={(e) => e.stopPropagation()} >
                      <button className={classes.dropdownoption} onClick={() => {onFeelChange("Oneness")}}>Oneness</button>
                      <button className={classes.dropdownoption} onClick={() => {onFeelChange("Intuitive")}}>Intuitive</button>
                      <button className={classes.dropdownoption} onClick={() => {onFeelChange("Resolved")}}>Resolved</button>
                      <button className={classes.dropdownoption} onClick={() => {onFeelChange("Harmonious")}}>Harmonious</button>
                      <button className={classes.dropdownoption} onClick={() => {onFeelChange("Miraculous")}}>Miraculous</button>
                      <button className={classes.dropdownoption} onClick={() => {onFeelChange("Cleansed")}}>Cleansed</button>
                      <button className={classes.dropdownoption} onClick={() => {onFeelChange("Liberation")}}>Liberation</button>
                    </div>
                  </div>
                  </Col>
                  <Col>
                    <p className={classes.centertext}>and boost</p>
                  </Col>
                  <Col>
                    <div className={classes.newdropdown}>
                      <button className={classes.link}>{boost || 'Select'}</button>
                      <div className={classes.newdropdownmenu} onClick={(e) => e.stopPropagation()} >
                        <button className={classes.dropdownoption} onClick={() => {onBoostChange("Vitality")}}>Vitality</button>
                        <button className={classes.dropdownoption} onClick={() => {onBoostChange("Creativity")}}>Creativity</button>
                        <button className={classes.dropdownoption} onClick={() => {onBoostChange("Will Power")}}>Will Power</button>
                        <button className={classes.dropdownoption} onClick={() => {onBoostChange("Love")}}>Love</button>
                        <button className={classes.dropdownoption} onClick={() => {onBoostChange("Self-Expression")}}>Self-Expression</button>
                        <button className={classes.dropdownoption} onClick={() => {onBoostChange("Focus")}}>Focus</button>
                        <button className={classes.dropdownoption} onClick={() => {onBoostChange("Consciousness")}}>Consciousness</button>
                        <button className={classes.dropdownoption} onClick={() => {onBoostChange("Pain Relief")}}>Pain Relief</button>
                        <button className={classes.dropdownoption} onClick={() => {onBoostChange("Cure-All")}}>Cure-All</button>
                        <button className={classes.dropdownoption} onClick={() => {onBoostChange("Vigor")}}>Vigor</button>
                        <button className={classes.dropdownoption} onClick={() => {onBoostChange("Rejuvenation")}}>Rejuvenation</button>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <p className={classes.centertext}>while I</p>
                  </Col>
                  <Col>
                    <div className={classes.newdropdown}>
                      <button className={classes.link}>{thingDuring || 'Select'}</button>
                      <div className={classes.newdropdownmenu} onClick={(e) => e.stopPropagation()} >
                        <button className={classes.dropdownoption} onClick={() => {onThingDuringChange("Self Motivate")}}>Self Motivate</button>
                        <button className={classes.dropdownoption} onClick={() => {onThingDuringChange("Improve my Mood")}}>Improve my Mood</button>
                        <button className={classes.dropdownoption} onClick={() => {onThingDuringChange("Mediate")}}>Mediate</button>
                        <button className={classes.dropdownoption} onClick={() => {onThingDuringChange("Relax")}}>Relax</button>
                        <button className={classes.dropdownoption} onClick={() => {onThingDuringChange("Sleep")}}>Sleep</button>
                      </div>
                    </div>
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


{/* <li onClick={() => onFeelChange('')}>Select</li>
<li onClick={() => onFeelChange('oneness')}>Oneness</li>
<li onClick={() => onFeelChange('intuitive')}>Intuitive</li>
<li onClick={() => onFeelChange('resolved')}>Resolved</li>
<li onClick={() => onFeelChange('harmonious')}>Harmonious</li>
<li onClick={() => onFeelChange('miraculous')}>Miraculous</li>
<li onClick={() => onFeelChange('cleansed')}>Cleansed</li>
<li onClick={() => onFeelChange('liberation')}>Liberation</li> */}