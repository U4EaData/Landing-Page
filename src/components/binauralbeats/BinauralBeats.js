import React, { useState, useEffect, useRef } from "react";
import { useLocation } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import { Container, Col, Row } from "react-bootstrap";
import classes from "./BinauralBeats.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { Panner, Oscillator } from 'tone';
import icon from '../../images/waveform.svg'
import Button from "react-bootstrap/Button";
import { Fade } from "react-awesome-reveal";
import appClasses from "../../App.module.css";
import { useNavigate } from "react-router-dom";
import CanvasWave from '../canvas-wave/CanvasWave'
import axios from 'axios';

function BinauralBeats(props) {
  const [feel, setFeel] = useState("");
  const [boost, setBoost] = useState("");
  const [thingDuring, setThingDuring] = useState("");
  const [playing, setPlaying] = useState(false);
  const [freq1, setFreq1] = useState(0);
  const [freq2, setFreq2] = useState(0);
  const [playPauseText, setPlayPauseText] = useState("Play");
  const [icon, setIcon] = useState(faPlay)
  const [pageVisible, setPageVisible] = useState(true);
  const [copied, setCopied] = useState(false);
  const [copyBtnText, setCopyBtnText] = useState("Copy Settings")
  const location = useLocation();
  const [visF1, setVisF1] = useState(0);
  const [visF2, setVisF2] = useState(0);
  const [startTime, setStartTime] = useState(null);

  const audioContext = useRef(null);
  const oscillator1 = useRef(null);
  const oscillator2 = useRef(null);

  // const osc = useRef(null);
  // const osc2 = useRef(null);

  const onFeelChange = (newFeel) => {
    const oldFeel = feel;
    console.log(`Feel changed to ${newFeel}`);
    setCopied(false);
    setFeel(newFeel);
    stopPlaying(oldFeel, boost, thingDuring);
  }
  const onBoostChange = (newBoost) => {
    const oldBoost = boost;
    console.log(`Boost changed to ${newBoost}`);
    setCopied(false);
    setBoost(newBoost);
    stopPlaying(feel, oldBoost, thingDuring);
  }
  const onThingDuringChange = (newTD) => {
    const oldTD = thingDuring;
    console.log(`TD changed to ${newTD}`);
    setCopied(false);
    setThingDuring(newTD)
    stopPlaying(feel, boost, oldTD);
  }
  const updateMap = (map, sf) => { // updates the values of the map with the given scale factor (used in the setFrequencies method)
    for(let [key, val] of map) {
      map[key] = val * sf;
    }
  }
  const binauralBeat = () => {
    setFrequencies();
  
    // Create the AudioContext if it's not already available
    audioContext.current = new (window.AudioContext || window.webkitAudioContext)();
  
    // Create the oscillators and set their type and frequency
    oscillator1.current = audioContext.current.createOscillator();
    oscillator1.current.type = "sine";
    oscillator1.current.frequency.setValueAtTime(freq1, audioContext.current.currentTime);
  
    oscillator2.current = audioContext.current.createOscillator();
    oscillator2.current.type = "sine";
    oscillator2.current.frequency.setValueAtTime(freq2, audioContext.current.currentTime);
  
    // Create the panners and set their positions
    const panner1 = audioContext.current.createStereoPanner();
    panner1.pan.setValueAtTime(1, audioContext.current.currentTime); // Left ear (pan value from -1 to 1)
  
    const panner2 = audioContext.current.createStereoPanner();
    panner2.pan.setValueAtTime(-1, audioContext.current.currentTime); // Right ear (pan value from -1 to 1)
  
    // Connect the nodes
    oscillator1.current.connect(panner1);
    panner1.connect(audioContext.current.destination);
  
    oscillator2.current.connect(panner2);
    panner2.connect(audioContext.current.destination);
  
    // Start the oscillators
    oscillator1.current.start();
    oscillator2.current.start();
  };
  const postToDB = async (startTime, endTime, feel, boost, thingDuring) => {
    setStartTime(null)
    const storedUser = localStorage.getItem("u4ea-user");
    console.log("inside method")
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      const userID = parsedUser.id;
      try {
        console.log('in the try')
        console.log(userID, startTime, endTime, feel, boost, thingDuring)
        const response = await axios.post("http://localhost:3500/entries", {
          userID: userID,
          startTime: startTime,
          endTime: endTime, 
          feel: feel,
          boost: boost,
          thingDuring: thingDuring
        });
        console.log(response)
        console.log("successful")
      } catch (error) {
        console.log("Error posting to DB");
        console.error(error)
      }
      console.log("made it past")
    }
  }

  const stopPlaying = (feel, boost, thingDuring) => { // gets called in the update methods for the feel boost and thingDuring
    if (!playing) {
      return
    }
    setPlaying(false);
    setVisF1(0)
    setVisF2(0)

    if (oscillator1.current && oscillator2.current) {
      oscillator1.current.stop();
      oscillator2.current.stop();
      console.log('INSIDE THE STOP') // gets printed
      postToDB(startTime, new Date(), feel, boost, thingDuring);
    }
  }
  
  const playFrequencies = () => {
    if (!playing) {
      if (feel !== "" && boost !== "" && thingDuring !== "") {
        setPlaying(true);
        binauralBeat();
        setVisF1(parseInt(freq1) * 4)
        setVisF2(parseInt(freq2) * 4)
        console.log(`FREQUENCY 1: ${freq1}, FREQUENCY 2: ${freq2}, VISF1: ${visF1}, VISF2: ${visF2}`)
        setStartTime(new Date())
      } else {
        alert("Please select from all three fields");
        
      }
    } else {
      setPlaying(false);
      setVisF1(0)
      setVisF2(0)

      // Pause the oscillators when stopping the audio
      oscillator1.current.stop();
      oscillator2.current.stop();

      // Close the audio context to release resources
      audioContext.current.close().catch((error) => console.error("Error closing AudioContext:", error));
      // POST to backend
      postToDB(startTime, new Date(), feel, boost, thingDuring);
    }
  };
  useEffect(() => {
    if (oscillator1.current && oscillator2.current && playing) {
      oscillator1.current.stop(); // doing this as a bug fix for it sometimes not stopping, so we just stop it after every press, regardless of if we were just gonna start it back up agian
      oscillator2.current.stop();

    }
    setPlaying(false);
    setFrequencies()

  }, [feel, boost, thingDuring])

  useEffect(() => {
    if (copied) {
      setCopyBtnText('Settings Copied');
    } else {
      setCopyBtnText("Copy Settings");
    }
  }, [copied])
  
  useEffect(() => {
    if(playing) {
      setPlayPauseText("Pause");
      setIcon(faPause);
    } else{
      setPlayPauseText("Play");
      setIcon(faPlay);
    }
  }, [playing])

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const encodedState = params.get('settings');
  
    if (encodedState) {
      try {
        const decodedState = JSON.parse(decodeURIComponent(encodedState));
        setFeel(decodedState.feel);
        setBoost(decodedState.boost);
        setThingDuring(decodedState.thingDuring);
      } catch (error) {
        console.error('Error decoding state from URL:', error);
      }
    }
  }, []);

  const setFrequencies = () => {
    let param3MinusMap = new Map();
    param3MinusMap.set("Self-Motivate", 1.0);
    param3MinusMap.set("Improve-Mood", 0.5);
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
      case "Will-Power": updateMap(param3MinusMap, 16.5); break;
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
    const freq2Value = freq1 - param3MinusMap[thingDuring];
    if (Number.isFinite(freq2Value)) {
      setFreq2(freq2Value);
    } else {
      setFreq2(0.0); // Set a default value in case of an invalid calculation
    }  
  }

  const shareSettings = () => {
    const serializedState = JSON.stringify({ feel, boost, thingDuring });
    const encodedState = encodeURIComponent(serializedState);
    const shareableLink = `${window.location.origin}${location.pathname}?settings=${encodedState}`;
    setCopied(true);
    navigator.clipboard.writeText(shareableLink)
  };

  return (
      <section className={classes.sectionContainer}>
        <Container className={classes.binbeats}>
            <Row className={`${appClasses.mobileflex} ${classes.bbgFlexContainer} align-items-center`}>
                <Row className={classes.givepadding}/>
                <Row className={classes.nogutters}>
                  <div className={classes.stack}>
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
                          <button className={classes.dropdownoption} onClick={() => {onBoostChange("Will-Power")}}>Will-Power</button>
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
                          <button className={classes.dropdownoption} onClick={() => {onThingDuringChange("Self-Motivate")}}>Self Motivate</button>
                          <button className={classes.dropdownoption} onClick={() => {onThingDuringChange("Improve-Mood")}}>Improve my Mood</button>
                          <button className={classes.dropdownoption} onClick={() => {onThingDuringChange("Meditate")}}>Mediate</button>
                          <button className={classes.dropdownoption} onClick={() => {onThingDuringChange("Relax")}}>Relax</button>
                          <button className={classes.dropdownoption} onClick={() => {onThingDuringChange("Sleep")}}>Sleep</button>
                        </div>
                      </div>
                    </Col>
                  </div>

                </Row>
                <Col>
                  <Row className={classes.vertalign}>
                    <Col className={classes.wave}>
                      <CanvasWave freq={visF1}/>
                    </Col>

                    <Col>
                      <Row>
                        <div className={classes.buttonandtext}>
                          <Col className={classes.playsound}>
                            {/* <FontAwesomeIcon icon={faWaveSquare} size="10x" style={{ color: '#8034f6' }} /> */}
                            <Button className={`${classes.circularbutton} ${classes.circularbutton}`} onClick={playFrequencies}>
                              <FontAwesomeIcon icon={icon} className={classes.icon} size="1x" style={{ color: "#8034f6"}} />
                            </Button>
                          </Col>
                        </div>
                      </Row>
                      <Row className={classes.paddingfortext}>
                        <div className={classes.buttonandtext}>
                            <p className={classes.playfrequencies}>{playPauseText} Frequencies</p>
                        </div>
                      </Row>
                    </Col>

                    <Col className={classes.wave}>
                      <CanvasWave freq={visF2}/>
                    </Col>

                  </Row>
                </Col>
            </Row>
            <Row className={classes.buttonandtext} id={classes.slighttoppad}>
              <Button className={appClasses.buttonsize} onClick={shareSettings}>
                {copyBtnText}
              </Button>
            </Row>

        </Container>
      </section>
  )
}

export default BinauralBeats