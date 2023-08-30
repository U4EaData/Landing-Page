import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Col, Row } from "react-bootstrap";
import classes from "./BinauralBeats.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { Panner, Oscillator } from "tone";
import icon from "../../images/waveform.svg";
import Button from "react-bootstrap/Button";
import { Fade } from "react-awesome-reveal";
import appClasses from "../../App.module.css";
import { useNavigate } from "react-router-dom";
import CanvasWave from "../canvas-wave/CanvasWave";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Form from "react-bootstrap/Form";

function BinauralBeats(props) {
  const navigate = useNavigate();
  const [feel, setFeel] = useState("Other");
  const [boost, setBoost] = useState("Other");
  const [thingDuring, setThingDuring] = useState("Other");
  const [playing, setPlaying] = useState(false);
  const [freq1, setFreq1] = useState(0);
  const [freq2, setFreq2] = useState(0);
  const [playPauseText, setPlayPauseText] = useState("Play");
  const [icon, setIcon] = useState(faPlay);
  const [copied, setCopied] = useState(false);
  const [copyBtnText, setCopyBtnText] = useState("Copy Settings");
  const location = useLocation();
  const [visF1, setVisF1] = useState(0);
  const [visF2, setVisF2] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [cats, setCats] = useState(true);
  const [potF1, setPotF1] = useState("0");
  const [potF2, setPotF2] = useState("0");

  const audioContext = useRef(null);
  const oscillator1 = useRef(null);
  const oscillator2 = useRef(null);

  // const osc = useRef(null);
  // const osc2 = useRef(null);
  const toggleSwitch = () => {
    setCats((cats) => !cats);
  };

  const onPotF1Change = (e) => {
    const oldFeel = feel;
    const oldBoost = boost;
    const oldThingDuring = thingDuring;
    setPotF1(e.target.value);
    setCopied(false);
    setFeel("Other");
    setBoost("Other");
    setThingDuring("Other");
    if (playing) {
      stopPlaying(oldFeel, oldBoost, oldThingDuring);
    }
  };

  const onPotF2Change = (e) => {
    const oldFeel = feel;
    const oldBoost = boost;
    const oldThingDuring = thingDuring;
    setPotF2(e.target.value);
    setCopied(false);
    setFeel("Other");
    setBoost("Other");
    setThingDuring("Other");
    if (playing) {
      stopPlaying(oldFeel, oldBoost, oldThingDuring);
    }
  };

  const onFeelChange = (newFeel) => {
    const oldFeel = feel;
    setCopied(false);
    setFeel(newFeel);
    stopPlaying(oldFeel, boost, thingDuring);
  };
  const onBoostChange = (newBoost) => {
    const oldBoost = boost;
    setCopied(false);
    setBoost(newBoost);
    stopPlaying(feel, oldBoost, thingDuring);
  };
  const onThingDuringChange = (newTD) => {
    const oldTD = thingDuring;
    setCopied(false);
    setThingDuring(newTD);
    stopPlaying(feel, boost, oldTD);
  };
  const updateMap = (map, sf) => {
    // updates the values of the map with the given scale factor (used in the setFrequencies method)
    for (let [key, val] of map) {
      map[key] = val * sf;
    }
  };
  const binauralBeat = () => {
    setFrequencies();
    // Making the AudioContext if it's not already available
    audioContext.current = new (window.AudioContext ||
      window.webkitAudioContext)();
    // Making the oscillators and set their type and frequency
    oscillator1.current = audioContext.current.createOscillator();
    oscillator1.current.type = "sine";
    oscillator1.current.frequency.setValueAtTime(
      freq1,
      audioContext.current.currentTime
    );
    oscillator2.current = audioContext.current.createOscillator();
    oscillator2.current.type = "sine";
    oscillator2.current.frequency.setValueAtTime(
      freq2,
      audioContext.current.currentTime
    );
    // Making the panners and set their positions
    const panner1 = audioContext.current.createStereoPanner();
    panner1.pan.setValueAtTime(1, audioContext.current.currentTime); // Left ear (pan value from -1 to 1)
    const panner2 = audioContext.current.createStereoPanner();
    panner2.pan.setValueAtTime(-1, audioContext.current.currentTime); // Right ear (pan value from -1 to 1)
    // Connecting the nodes
    oscillator1.current.connect(panner1);
    panner1.connect(audioContext.current.destination);
    oscillator2.current.connect(panner2);
    panner2.connect(audioContext.current.destination);
    // Starting the oscillators
    oscillator1.current.start();
    oscillator2.current.start();
  };
  const binauralBeatCustomFreqs = (freq1, freq2) => { // could refactor this with the prev method pretty easily
    audioContext.current = new (window.AudioContext ||
      window.webkitAudioContext)();
    oscillator1.current = audioContext.current.createOscillator();
    oscillator1.current.type = "sine";
    oscillator1.current.frequency.setValueAtTime(
      freq1,
      audioContext.current.currentTime
    );
    oscillator2.current = audioContext.current.createOscillator();
    oscillator2.current.type = "sine";
    oscillator2.current.frequency.setValueAtTime(
      freq2,
      audioContext.current.currentTime
    );
    const panner1 = audioContext.current.createStereoPanner();
    panner1.pan.setValueAtTime(1, audioContext.current.currentTime); // Left ear (pan value from -1 to 1)
    const panner2 = audioContext.current.createStereoPanner();
    panner2.pan.setValueAtTime(-1, audioContext.current.currentTime); // Right ear (pan value from -1 to 1)
    oscillator1.current.connect(panner1);
    panner1.connect(audioContext.current.destination);
    oscillator2.current.connect(panner2);
    panner2.connect(audioContext.current.destination);
    oscillator1.current.start();
    oscillator2.current.start();
  };
  const postToDB = async (startTime, endTime, feel, boost, thingDuring) => {
    setStartTime(null);
    if (endTime.getTime() - startTime.getTime() < 1000) {
      // needs to be at least a second to get posted to DB
      return;
    }
    const storedUser = localStorage.getItem("u4ea-user");
    if (!storedUser) {
      console.log("No user so not posting")
      return;
    }
    let token = localStorage.getItem("access_token");
    if (token) {
      const decodedToken = jwt_decode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        try {
          const response = await fetch("/auth/refresh", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            credentials: "include",
          });
          if (response.ok) {
            const data = await response.json();
            const newAccessToken = data.accessToken;
            localStorage.setItem("access_token", newAccessToken);
            token = newAccessToken;
          } else {
            navigate("/");
            props.signout();
            console.log("failed the refresh token stuff", response.statusText);
            return;
          }
        } catch (error) {
          navigate("/");
          props.signout();
          return;
        }
      }
    }
    const parsedUser = JSON.parse(storedUser);
    const userID = parsedUser.id;
    try {
      const response = await axios.post(
        "/entries",
        {
          userID: userID,
          startTime: startTime,
          endTime: endTime,
          feel: feel,
          boost: boost,
          thingDuring: thingDuring,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Posted to database")
    } catch (error) {
      console.error(error);
    }
  };

  const stopPlaying = (feel, boost, thingDuring) => {
    // gets called in the update methods for the feel boost and thingDuring
    if (!playing) {
      return;
    }
    setPlaying(false);
    setVisF1(0);
    setVisF2(0);
    if (oscillator1.current && oscillator2.current) {
      oscillator1.current.stop();
      oscillator2.current.stop();
      postToDB(startTime, new Date(), feel, boost, thingDuring);
    }
  };
  const playFrequencies = () => {
    if (!cats) {
      if (!playing) {
        let intF1 = parseInt(potF1)
        let intF2 = parseInt(potF2)
        if (
          potF1 !== "0" &&
          potF2 !== "0" &&
          !isNaN(intF1) &&
          !isNaN(intF2) &&
          intF1 > 0 && 
          intF1 <= 100 &&
          intF2 <= 100 &&
          intF2 > 0
        ) {
          setPlaying(true);
          setFreq1(intF1);
          setFreq2(intF2);
          setVisF1(intF1 * 4);
          setVisF2(intF2 * 4);
          setStartTime(new Date());
          binauralBeatCustomFreqs(intF1, intF2)
        } else {
          alert("Invalid input")
        }
      } else {
        setPlaying(false);
        setVisF1(0);
        setVisF2(0);
        oscillator1.current.stop();
        oscillator2.current.stop();
        postToDB(startTime, new Date(), feel, boost, thingDuring);
        audioContext.current
          .close()
          .catch((error) =>
            console.error("Error closing AudioContext:", error)
          );
      }
      return;
    }
    if (!playing) {
      if (
        feel !== "" &&
        boost !== "" &&
        thingDuring !== "" &&
        feel !== "Other" &&
        boost !== "Other" &&
        thingDuring !== "Other"
      ) {
        setPlaying(true);
        binauralBeat();
        setVisF1(parseInt(freq1) * 4);
        setVisF2(parseInt(freq2) * 4);
        console.log(
          `FREQUENCY 1: ${freq1}, FREQUENCY 2: ${freq2}, VISF1: ${parseInt(freq1) * 4}, VISF2: ${parseInt(freq2) * 4}`
        );
        setStartTime(new Date());
      } else {
        alert("Please select from all three fields");
      }
    } else {
      setPlaying(false);
      setVisF1(0);
      setVisF2(0);
      oscillator1.current.stop();
      oscillator2.current.stop();
      postToDB(startTime, new Date(), feel, boost, thingDuring);
      audioContext.current
        .close()
        .catch((error) => console.error("Error closing AudioContext:", error));
    }
  };

  useEffect(() => {
    if (oscillator1.current && oscillator2.current && playing) {
      oscillator1.current.stop(); // doing this as a bug fix for it sometimes not stopping, so we just stop it after every press, regardless of if we were just gonna start it back up agian
      oscillator2.current.stop();
    }
    setPlaying(false);
    setFrequencies();
  }, [feel, boost, thingDuring]);

  useEffect(() => {
    if (copied) {
      setCopyBtnText("Settings Copied");
    } else {
      setCopyBtnText("Copy Settings");
    }
  }, [copied]);

  useEffect(() => {
    if (playing) {
      setPlayPauseText("Pause");
      setIcon(faPause);
    } else {
      setPlayPauseText("Play");
      setIcon(faPlay);
    }
  }, [playing]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const encodedState = params.get("settings");
    if (encodedState) {
      try {
        const decodedState = JSON.parse(decodeURIComponent(encodedState));
        setFeel(decodedState.feel);
        setBoost(decodedState.boost);
        setThingDuring(decodedState.thingDuring);
      } catch (error) {
        console.error("Error decoding state from URL:", error);
      }
      return
    }
    const encodedStateII = params.get("freqsettings");
    if (encodedStateII) {
      try {
        const decodedState = JSON.parse(decodeURIComponent(encodedStateII));
        setPotF1(decodedState.potF1);
        setPotF2(decodedState.potF2);
        toggleSwitch()
      } catch (error) {
        console.error("Error decoding state from URL:", error);
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
      case "Oneness":
        setFreq1(60.19);
        break;
      case "Intuitive":
        setFreq1(53.25);
        break;
      case "Resolved":
        setFreq1(46.31);
        break;
      case "Harmonious":
        setFreq1(39.94);
        break;
      case "Miraculous":
        setFreq1(33.0);
        break;
      case "Cleansed":
        setFreq1(52.13);
        break;
      case "Liberation":
        setFreq1(49.5);
        break;
      default:
        setFreq1(0.0);
        break;
    }
    switch (boost) {
      case "Vitality":
        updateMap(param3MinusMap, 24.75);
        break;
      case "Creativity":
        updateMap(param3MinusMap, 26.06);
        break;
      case "Will-Power":
        updateMap(param3MinusMap, 16.5);
        break;
      case "Love":
        updateMap(param3MinusMap, 19.97);
        break;
      case "Self-Expression":
        updateMap(param3MinusMap, 23.16);
        break;
      case "Focus":
        updateMap(param3MinusMap, 26.63);
        break;
      case "Consciousness":
        updateMap(param3MinusMap, 30.09);
        break;
      case "Pain Relief":
        updateMap(param3MinusMap, 21.75);
        break;
      case "Cure-All":
        updateMap(param3MinusMap, 20.0);
        break;
      case "Vigor":
        updateMap(param3MinusMap, 17.81);
        break;
      case "Rejuvenation":
        updateMap(param3MinusMap, 15.66);
        break;
      default:
        updateMap(param3MinusMap, 0.0);
        break;
    }
    const freq2Value = freq1 - param3MinusMap[thingDuring];
    if (Number.isFinite(freq2Value)) {
      setFreq2(freq2Value);
    } else {
      setFreq2(0.0); // Setting a default value in case of an invalid calculation
    }
  };

  const shareSettings = () => {
    if (cats) {
      const serializedState = JSON.stringify({ feel, boost, thingDuring });
      const encodedState = encodeURIComponent(serializedState);
      const shareableLink = `${window.location.origin}${location.pathname}?settings=${encodedState}`;
      setCopied(true);
      navigator.clipboard.writeText(shareableLink);
    } else {
      const serializedState = JSON.stringify({ potF1, potF2 });
      const encodedState = encodeURIComponent(serializedState);
      const shareableLink = `${window.location.origin}${location.pathname}?freqsettings=${encodedState}`;
      setCopied(true);
      navigator.clipboard.writeText(shareableLink);
    }
  };

  return (
    <section className={classes.sectionContainer}>
      <Container className={classes.binbeats}>
        <Row
          className={`${appClasses.mobileflex} ${classes.bbgFlexContainer} align-items-center`}
        >
          <div onClick={toggleSwitch} className={classes.switchContainer}>
            <Form.Check
              type="switch"
              id="custom-switch"
              checked={cats}
              onChange={() => {}}
              className={`${classes.switch} ${cats ? classes.active : ""}`}
            />
          </div>
          <Row className={classes.nogutters}>
            {cats ? (
              <div className={classes.stack}>
                <Col>
                  <p className={classes.centertext}>I want to feel</p>
                </Col>
                <Col>
                  <div className={classes.newdropdown}>
                    <button className={classes.link}>
                      {feel !== "Other" && feel !== "" ? feel : "Select"}
                    </button>
                    <div
                      className={classes.newdropdownmenu}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        className={classes.dropdownoption}
                        onClick={() => {
                          onFeelChange("Oneness");
                        }}
                      >
                        Oneness
                      </button>
                      <button
                        className={classes.dropdownoption}
                        onClick={() => {
                          onFeelChange("Intuitive");
                        }}
                      >
                        Intuitive
                      </button>
                      <button
                        className={classes.dropdownoption}
                        onClick={() => {
                          onFeelChange("Resolved");
                        }}
                      >
                        Resolved
                      </button>
                      <button
                        className={classes.dropdownoption}
                        onClick={() => {
                          onFeelChange("Harmonious");
                        }}
                      >
                        Harmonious
                      </button>
                      <button
                        className={classes.dropdownoption}
                        onClick={() => {
                          onFeelChange("Miraculous");
                        }}
                      >
                        Miraculous
                      </button>
                      <button
                        className={classes.dropdownoption}
                        onClick={() => {
                          onFeelChange("Cleansed");
                        }}
                      >
                        Cleansed
                      </button>
                      <button
                        className={classes.dropdownoption}
                        onClick={() => {
                          onFeelChange("Liberation");
                        }}
                      >
                        Liberation
                      </button>
                    </div>
                  </div>
                </Col>
                <Col>
                  <p className={classes.centertext}>and boost</p>
                </Col>
                <Col>
                  <div className={classes.newdropdown}>
                    <button className={classes.link}>
                      {boost !== "Other" && boost !== "" ? boost : "Select"}
                    </button>
                    <div
                      className={classes.newdropdownmenu}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        className={classes.dropdownoption}
                        onClick={() => {
                          onBoostChange("Vitality");
                        }}
                      >
                        Vitality
                      </button>
                      <button
                        className={classes.dropdownoption}
                        onClick={() => {
                          onBoostChange("Creativity");
                        }}
                      >
                        Creativity
                      </button>
                      <button
                        className={classes.dropdownoption}
                        onClick={() => {
                          onBoostChange("Will-Power");
                        }}
                      >
                        Will-Power
                      </button>
                      <button
                        className={classes.dropdownoption}
                        onClick={() => {
                          onBoostChange("Love");
                        }}
                      >
                        Love
                      </button>
                      <button
                        className={classes.dropdownoption}
                        onClick={() => {
                          onBoostChange("Self-Expression");
                        }}
                      >
                        Self-Expression
                      </button>
                      <button
                        className={classes.dropdownoption}
                        onClick={() => {
                          onBoostChange("Focus");
                        }}
                      >
                        Focus
                      </button>
                      <button
                        className={classes.dropdownoption}
                        onClick={() => {
                          onBoostChange("Consciousness");
                        }}
                      >
                        Consciousness
                      </button>
                      <button
                        className={classes.dropdownoption}
                        onClick={() => {
                          onBoostChange("Pain Relief");
                        }}
                      >
                        Pain Relief
                      </button>
                      <button
                        className={classes.dropdownoption}
                        onClick={() => {
                          onBoostChange("Cure-All");
                        }}
                      >
                        Cure-All
                      </button>
                      <button
                        className={classes.dropdownoption}
                        onClick={() => {
                          onBoostChange("Vigor");
                        }}
                      >
                        Vigor
                      </button>
                      <button
                        className={classes.dropdownoption}
                        onClick={() => {
                          onBoostChange("Rejuvenation");
                        }}
                      >
                        Rejuvenation
                      </button>
                    </div>
                  </div>
                </Col>
                <Col>
                  <p className={classes.centertext}>while I</p>
                </Col>
                <Col>
                  <div className={classes.newdropdown}>
                    <button className={classes.link}>
                      {thingDuring !== "Other" && thingDuring !== ""
                        ? thingDuring
                        : "Select"}
                    </button>
                    <div
                      className={classes.newdropdownmenu}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        className={classes.dropdownoption}
                        onClick={() => {
                          onThingDuringChange("Self-Motivate");
                        }}
                      >
                        Self Motivate
                      </button>
                      <button
                        className={classes.dropdownoption}
                        onClick={() => {
                          onThingDuringChange("Improve-Mood");
                        }}
                      >
                        Improve my Mood
                      </button>
                      <button
                        className={classes.dropdownoption}
                        onClick={() => {
                          onThingDuringChange("Meditate");
                        }}
                      >
                        Mediate
                      </button>
                      <button
                        className={classes.dropdownoption}
                        onClick={() => {
                          onThingDuringChange("Relax");
                        }}
                      >
                        Relax
                      </button>
                      <button
                        className={classes.dropdownoption}
                        onClick={() => {
                          onThingDuringChange("Sleep");
                        }}
                      >
                        Sleep
                      </button>
                    </div>
                  </div>
                </Col>
              </div>
            ) : (
              <div className={classes.stack}>
                <input
                  type="text"
                  placeholder="Left frequency (1 - 100)"
                  value={potF1 == "0" ? "" : potF1}
                  onChange={(e) => onPotF1Change(e)}
                />
                <input
                  type="text"
                  placeholder="Right frequency (1 - 100)"
                  value={potF2 == "0" ? "" : potF2}
                  onChange={(e) => onPotF2Change(e)}
                />
              </div>
            )}
          </Row>
          <Col>
            <Row className={classes.vertalign}>
              <Col className={classes.wave}>
                <CanvasWave freq={visF1} />
              </Col>
              <Col>
                <Row>
                  <div className={classes.buttonandtext}>
                    <Col className={classes.playsound}>
                      {/* <FontAwesomeIcon icon={faWaveSquare} size="10x" style={{ color: '#8034f6' }} /> */}
                      <Button
                        className={`${classes.circularbutton} ${classes.circularbutton}`}
                        onClick={playFrequencies}
                      >
                        <FontAwesomeIcon
                          icon={icon}
                          className={classes.icon}
                          size="1x"
                          style={{ color: "#8034f6" }}
                        />
                      </Button>
                    </Col>
                  </div>
                </Row>
                <Row className={classes.paddingfortext}>
                  <div className={classes.buttonandtext}>
                    <p className={classes.playfrequencies}>
                      {playPauseText} Frequencies
                    </p>
                  </div>
                </Row>
              </Col>
              <Col className={classes.wave}>
                <CanvasWave freq={visF2} />
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
  );
}

export default BinauralBeats;
