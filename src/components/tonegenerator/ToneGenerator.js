import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import appClasses from "../../App.module.css";
import styles from "./ToneGenerator.module.css";
import freq from "../../images/frequencies.svg";
import "../image.css";
import { param } from "jquery";
import { Panner, Oscillator } from "tone";

/* Link to Colin's tone generator using Vanilla JavaScript: https://jsfiddle.net/stets43/9hdz52wr/361/ */

const ToneGenerator = () => {
  const [parameters, setParameters] = useState({
    param1: "oneness",
    param2: "vitality",
    param3: "self motivation",
  });
  const [frequencies, setFrequencies] = useState({
    freq1: 60.19,
    freq2: 24.75,
  });
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToneDropdown = (e) => {
    if (e.target.id === "toneDropdown1") {
      setParameters((prevObj) => {
        return { ...prevObj, param1: e.target.value };
      });
    } else if (e.target.id === "toneDropdown2") {
      setParameters((prevObj) => {
        return { ...prevObj, param2: e.target.value };
      });
    } else if (e.target.id === "toneDropdown3") {
      setParameters((prevObj) => {
        return { ...prevObj, param3: e.target.value };
      });
    }
  };

  const handleToneBtnClick = () => {
    console.log(
      "btn click, play w/ frequencies: ",
      frequencies,
      "isplaying",
      isPlaying
    );
    const osc = new Oscillator({
      type: "sine",
      frequency: parameters.freq1,
      volume: -12,
    });
    const osc2 = new Oscillator({
      type: "sine",
      frequency: parameters.freq2,
      volume: -12,
    });
    console.log("test", osc.frequency);
    // const osc = new Oscillator();
    // const osc2 = new Oscillator();
    // const osc3 = osc.toDestination().start();

    // set up panning and volume
    if (isPlaying == false) {
      setIsPlaying((prev) => true);
      // console.log("play, osc", osc, osc2);
      const panner1 = new Panner(1).toDestination();
      const panner2 = new Panner(-1).toDestination();
      osc.toDestination().connect(panner1).start();
      osc2.toDestination().connect(panner2).start();
      osc2.toDestination();
    } else if (isPlaying === true) {
      setIsPlaying((prev) => false);
      osc.stop();
      osc2.stop();
    }
  };

  const adjustFrequencies = () => {
    console.log(parameters, frequencies);
    switch (parameters.param1) {
      case "oneness":
        setFrequencies((prevObj) => {
          return { ...prevObj, freq1: 60.19 };
        });
        break;
      case "intuitive":
        setFrequencies((prevObj) => {
          return { ...prevObj, freq1: 53.25 };
        });
        break;
      case "resolved":
        setFrequencies((prevObj) => {
          return { ...prevObj, freq1: 46.31 };
        });
        break;
      case "harmonious":
        setFrequencies((prevObj) => {
          return { ...prevObj, freq1: 39.94 };
        });
        break;
      case "miraculous":
        setFrequencies((prevObj) => {
          return { ...prevObj, freq1: 33 };
        });
        break;
      case "cleansed":
        setFrequencies((prevObj) => {
          return { ...prevObj, freq1: 52.13 };
        });
        break;
      case "liberation":
        setFrequencies((prevObj) => {
          return { ...prevObj, freq1: 49.5 };
        });
        break;
      default:
        setFrequencies((prevObj) => {
          return { ...prevObj, freq1: 60.19 };
        });
    }

    switch (parameters.param2) {
      case "vitality":
        if (parameters.param3 == "self motivation") {
          let frequency2 = Number(frequencies.freq1 - 24.75);
          console.log("og freq", frequencies.freq1, "new freq", frequency2);
          setFrequencies((prevObj) => {
            return { ...prevObj, freq2: frequency2 };
          });
        } else if (parameters.param3 == "improve my mood") {
          let frequency2 = Number(frequencies.freq1 - 12.38);
          setFrequencies((prevObj) => {
            return { ...prevObj, freq2: frequency2 };
          });
        } else if (parameters.param3 == "meditate") {
          let frequency2 = Number(frequencies.freq1 - 6.19);
          setFrequencies((prevObj) => {
            return { ...prevObj, freq2: frequency2 };
          });
        } else if (parameters.param3 == "relax") {
          let frequency2 = Number(frequencies.freq1 - 3.09);
          setFrequencies((prevObj) => {
            return { ...prevObj, freq2: frequency2 };
          });
        } else if (parameters.param3 == "sleep") {
          let frequency2 = Number(frequencies.freq1 - 1.55);
          setFrequencies((prevObj) => {
            return { ...prevObj, freq2: frequency2 };
          });
        }
        break;

      // case "creativity":
      //   if (parameters.param3 == "self motivate") {
      //     let frequency2 = Number(frequencies.freq1 - 26.06);
      //     setFrequencies((prevObj) => {
      //       return { ...prevObj, freq2: frequency2 };
      //     });
      //     break;
      //   } else if (parameters.param3 == "improve my mood") {
      //     let frequency2 = Number(frequencies.freq1 - 13.03);
      //     setFrequencies((prevObj) => {
      //       return { ...prevObj, freq2: frequency2 };
      //     });
      //     break;
      //   } else if (parameters.param3 == "meditate") {
      //     let frequency2 = Number(frequencies.freq1 - 6.52);
      //     setFrequencies((prevObj) => {
      //       return { ...prevObj, freq2: frequency2 };
      //     });
      //     break;
      //   } else if (parameters.param3 == "relax") {
      //     let frequency2 = Number(frequencies.freq1 - 3.26);
      //     setFrequencies((prevObj) => {
      //       return { ...prevObj, freq2: frequency2 };
      //     });
      //     break;
      //   } else if (parameters.param3 == "sleep") {
      //     let frequency2 = Number(frequencies.freq1 - 1.63);
      //     setFrequencies((prevObj) => {
      //       return { ...prevObj, freq2: frequency2 };
      //     });
      //     break;
      //   }
      //   break;

      // case "will power":
      //   if (parameters.param3 == "self motivate") {
      //     let frequency2 = Number(frequencies.freq1 - 16.5);
      //     setFrequencies((prevObj) => {
      //       return { ...prevObj, freq2: frequency2 };
      //     });
      //   } else if (parameters.param3 == "improve my mood") {
      //     let frequency2 = Number(frequencies.freq1 - 8.25);
      //     setFrequencies((prevObj) => {
      //       return { ...prevObj, freq2: frequency2 };
      //     });
      //   } else if (parameters.param3 == "meditate") {
      //     let frequency2 = Number(frequencies.freq1 - 4.13);
      //     setFrequencies((prevObj) => {
      //       return { ...prevObj, freq2: frequency2 };
      //     });
      //   } else if (parameters.param3 == "relax") {
      //     let frequency2 = Number(frequencies.freq1 - 2.06);
      //     setFrequencies((prevObj) => {
      //       return { ...prevObj, freq2: frequency2 };
      //     });
      //   } else if (parameters.param3 == "sleep") {
      //     let frequency2 = Number(frequencies.freq1 - 1.03);
      //     setFrequencies((prevObj) => {
      //       return { ...prevObj, freq2: frequency2 };
      //     });
      //   }
      //   break;

      // case "love":
      //   if (parameters.param3 == "self motivate") {
      //     let frequency2 = Number(frequencies.freq1 - 19.97);
      //     setFrequencies((prevObj) => {
      //       return { ...prevObj, freq2: frequency2 };
      //     });
      //   } else if (parameters.param3 == "improve my mood") {
      //     let frequency2 = Number(frequencies.freq1 - 9.98);
      //     setFrequencies((prevObj) => {
      //       return { ...prevObj, freq2: frequency2 };
      //     });
      //   } else if (parameters.param3 == "meditate") {
      //     let frequency2 = Number(frequencies.freq1 - 4.99);
      //     setFrequencies((prevObj) => {
      //       return { ...prevObj, freq2: frequency2 };
      //     });
      //   } else if (parameters.param3 == "relax") {
      //     let frequency2 = Number(frequencies.freq1 - 2.5);
      //     setFrequencies((prevObj) => {
      //       return { ...prevObj, freq2: frequency2 };
      //     });
      //   } else if (parameters.param3 == "sleep") {
      //     let frequency2 = Number(frequencies.freq1 - 1.25);
      //     setFrequencies((prevObj) => {
      //       return { ...prevObj, freq2: frequency2 };
      //     });
      //   }
      //   break;

      // case "self-expression":
      //   if (parameters.param3 == "self motivate") {
      //     frequencies.freq2 = frequencies.freq1 - 23.16;
      //   } else if (parameters.param3 == "improve my mood") {
      //     frequencies.freq2 = frequencies.freq1 - 11.58;
      //   } else if (parameters.param3 == "meditate") {
      //     frequencies.freq2 = frequencies.freq1 - 5.79;
      //   } else if (parameters.param3 == "relax") {
      //     frequencies.freq2 = frequencies.freq1 - 2.89;
      //   } else if (parameters.param3 == "sleep") {
      //     frequencies.freq2 = frequencies.freq1 - 1.45;
      //   }
      //   break;

      // case "focus":
      //   if (parameters.param3 == "self motivate") {
      //     frequencies.freq2 = frequencies.freq1 - 26.63;
      //   } else if (parameters.param3 == "improve my mood") {
      //     frequencies.freq2 = frequencies.freq1 - 13.31;
      //   } else if (parameters.param3 == "meditate") {
      //     frequencies.freq2 = frequencies.freq1 - 6.66;
      //   } else if (parameters.param3 == "relax") {
      //     frequencies.freq2 = frequencies.freq1 - 3.33;
      //   } else if (parameters.param3 == "sleep") {
      //     frequencies.freq2 = frequencies.freq1 - 1.66;
      //   }
      //   break;

      // case "consciousness":
      //   if (parameters.param3 == "self motivate") {
      //     frequencies.freq2 = frequencies.freq1 - 30.09;
      //   } else if (parameters.param3 == "improve my mood") {
      //     frequencies.freq2 = frequencies.freq1 - 15.05;
      //   } else if (parameters.param3 == "meditate") {
      //     frequencies.freq2 = frequencies.freq1 - 7.52;
      //   } else if (parameters.param3 == "relax") {
      //     frequencies.freq2 = frequencies.freq1 - 3.76;
      //   } else if (parameters.param3 == "sleep") {
      //     frequencies.freq2 = frequencies.freq1 - 1.88;
      //   }
      //   break;

      // case "pain relief":
      //   if (parameters.param3 == "self motivate") {
      //     frequencies.freq2 = frequencies.freq1 - 21.75;
      //   } else if (parameters.param3 == "improve my mood") {
      //     frequencies.freq2 = frequencies.freq1 - 10.88;
      //   } else if (parameters.param3 == "meditate") {
      //     frequencies.freq2 = frequencies.freq1 - 5.44;
      //   } else if (parameters.param3 == "relax") {
      //     frequencies.freq2 = frequencies.freq1 - 2.72;
      //   } else if (parameters.param3 == "sleep") {
      //     frequencies.freq2 = frequencies.freq1 - 1.36;
      //   }
      //   break;

      // case "cure-all":
      //   if (parameters.param3 == "self motivate") {
      //     frequencies.freq2 = frequencies.freq1 - 20.0;
      //   } else if (parameters.param3 == "improve my mood") {
      //     frequencies.freq2 = frequencies.freq1 - 10.0;
      //   } else if (parameters.param3 == "meditate") {
      //     frequencies.freq2 = frequencies.freq1 - 5.0;
      //   } else if (parameters.param3 == "relax") {
      //     frequencies.freq2 = frequencies.freq1 - 2.5;
      //   } else if (parameters.param3 == "sleep") {
      //     frequencies.freq2 = frequencies.freq1 - 1.25;
      //   }
      //   break;

      // case "vigor":
      //   if (parameters.param3 == "self motivate") {
      //     frequencies.freq2 = frequencies.freq1 - 17.81;
      //   } else if (parameters.param3 == "improve my mood") {
      //     frequencies.freq2 = frequencies.freq1 - 8.91;
      //   } else if (parameters.param3 == "meditate") {
      //     frequencies.freq2 = frequencies.freq1 - 4.45;
      //   } else if (parameters.param3 == "relax") {
      //     frequencies.freq2 = frequencies.freq1 - 2.23;
      //   } else if (parameters.param3 == "sleep") {
      //     frequencies.freq2 = frequencies.freq1 - 1.11;
      //   }
      //   break;

      // case "rejuvenation":
      //   if (parameters.param3 == "self motivate") {
      //     frequencies.freq2 = frequencies.freq1 - 15.66;
      //   } else if (parameters.param3 == "improve my mood") {
      //     frequencies.freq2 = frequencies.freq1 - 7.83;
      //   } else if (parameters.param3 == "meditate") {
      //     frequencies.freq2 = frequencies.freq1 - 3.92;
      //   } else if (parameters.param3 == "relax") {
      //     frequencies.freq2 = frequencies.freq1 - 1.96;
      //   } else if (parameters.param3 == "sleep") {
      //     frequencies.freq2 = frequencies.freq1 - 0.98;
      //   }
      //   break;

      default:
        // setFrequencies((prevObj) => {
        //   return { ...prevObj, freq2: prevObj.freq1 - 24.75 };
        // });
        console.log("default");
        break;
    }
  };

  useEffect(() => {
    if (parameters.param1 && parameters.param2 && parameters.param3) {
      adjustFrequencies();
    }
  }, [parameters]);

  return (
    <div>
      <section className={appClasses.sectionContainer}>
        <Container>
          <div className={styles.toneSection}>
            <div className={styles.toneFlex}>
              <h3 className={appClasses.h3class}>ToneGenerator</h3>
              <div className={styles.toneDropdownContainer}>
                <p className={styles.tonePClass}>I want to feel</p>
                <div className={styles.toneDropdown}>
                  <select
                    id="toneDropdown1"
                    className={styles.dropdownContent}
                    onChange={handleToneDropdown}
                  >
                    <option value="oneness">oneness</option>
                    <option value="intuitive">intuitive</option>
                    <option value="resolved">resolved</option>
                    <option value="harmonious">harmonious</option>
                    <option value="miraculous">miraculous</option>
                    <option value="cleansed">cleansed</option>
                    <option value="liberation">liberation</option>
                  </select>
                </div>
                <p className={styles.tonePClass}>and boost my</p>
                <div className={styles.toneDropdown}>
                  <select
                    id="toneDropdown2"
                    className={styles.dropdownContent}
                    onChange={handleToneDropdown}
                  >
                    <option value="vitality">vitality</option>
                    <option value="creativity">creativity</option>
                    <option value="will power">will power</option>
                    <option value="love">love</option>
                    <option value="self-expression">self-espression</option>
                    <option value="focus">focus</option>
                    <option value="conciousness">consciousness</option>
                    <option value="pain relief">pain relief</option>
                    <option value="cure-all">cure-all</option>
                    <option value="vigor">vigor</option>
                    <option value="rejuvenation">rejuvenation</option>
                  </select>
                </div>
                <p className={styles.tonePClass}>while I</p>
                <div className={styles.toneDropdown}>
                  <select
                    id="toneDropdown3"
                    className={styles.dropdownContent}
                    onChange={handleToneDropdown}
                  >
                    <option value="self motivate">self motivate</option>
                    <option value="improve my mood">improve my mood</option>
                    <option value="mediate">meditate</option>
                    <option value="relax">relax</option>
                    <option value="sleep">sleep</option>
                  </select>
                </div>
                <p className={styles.tonePClass}>.</p>
              </div>
              <img src={freq} alt="frequencies" className="frequenciesIcon" />
              <button
                className={appClasses.buttonsize}
                onClick={handleToneBtnClick}
              >
                Play frequencies
              </button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ToneGenerator;
