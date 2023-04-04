import React from "react";
import classes from "./Chakra.module.css";
import "react-tooltip/dist/react-tooltip.css";
import red from "../../images/journey-red.png";
import {
  AiFillPlusSquare,
  AiFillMinusSquare,
  AiFillFolder,
} from "react-icons/ai";
import { FaHeadphonesAlt, FaImage } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Chakra = (props) => {
  return (
    <div className={classes.chakra}>
      <div className={classes.chakra_header_container}>
        <h1>{props.color.title}</h1>
        <div className={classes.chakra_dropdown}>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ width: "150px", backgroundColor: "#57708c" }}
            >
              {props.updateDropDown ? props.dropDownValue : "Select Chakra"}
            </button>
            <ul
              className={`dropdown-menu ${classes.dropdown}`}
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <p
                  className={`dropdown-item ${classes.dropdownItem}`}
                  style={{ margin: "0px" }}
                  id="violet"
                  onClick={props.dropDownHandler}
                >
                  Violet
                </p>
              </li>
              <li>
                <p
                  className={`dropdown-item ${classes.dropdownItem}`}
                  style={{ margin: "0px " }}
                  id="indigo"
                  onClick={props.dropDownHandler}
                >
                  Indigo
                </p>
              </li>
              <li>
                <p
                  className={`dropdown-item ${classes.dropdownItem}`}
                  style={{ margin: "0px " }}
                  id="blue"
                  onClick={props.dropDownHandler}
                >
                  Blue
                </p>
              </li>
              <li>
                <p
                  className={`dropdown-item ${classes.dropdownItem}`}
                  style={{ margin: "0px " }}
                  id="green"
                  onClick={props.dropDownHandler}
                >
                  Green
                </p>
              </li>
              <li>
                <p
                  className={`dropdown-item ${classes.dropdownItem}`}
                  style={{ margin: "0px " }}
                  id="yellow"
                  value="Yellow"
                  onClick={props.dropDownHandler}
                >
                  Yellow
                </p>
              </li>
              <li>
                <p
                  className={`dropdown-item ${classes.dropdownItem}`}
                  style={{ margin: "0px " }}
                  id="orange"
                  onClick={props.dropDownHandler}
                >
                  Orange
                </p>
              </li>
              <li>
                <p
                  className={`dropdown-item ${classes.dropdownItem}`}
                  style={{ margin: "0px " }}
                  id="red"
                  onClick={props.dropDownHandler}
                >
                  Red
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sections"></div>
      <div className={classes.chakra_section1}>
        <div className={classes.chakra_section1_left}>
          <img src={props.color.img} alt="" className={classes.chakra_img} />
        </div>
        <div className={classes.chakra_section1_right}>
          <h3 className={classes.chakra_h3}>{props.color.energy.energy}</h3>
          <p className={classes.chakra_desc}>{props.color.energy.energyDesc}</p>
          <div className={classes.moods}>
            <AiFillPlusSquare style={{ color: "#57708c", fontSize: "2em" }} />
            <p className={classes.moods_text}>{props.color.positives}</p>
          </div>
          <div className={classes.moods}>
            <AiFillMinusSquare style={{ color: "#57708c", fontSize: "2em" }} />
            <p className={classes.moods_text}>{props.color.negatives}</p>
          </div>
        </div>
      </div>
      <div className={classes.chakra_section2}>
        <h3 className={classes.chakra_h3}>Chronic Symptoms</h3>
        <p className={classes.chakra_desc}>{props.color.symptomsDesc}</p>
        <div className={classes.chakra_impact}>
          <AiFillFolder
            style={{
              color: "#57708c",
              fontSize: "2em",
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              padding: "5px",
            }}
          />
          <h3 className={classes.chakra_h3}>Organs & Glands Impacted</h3>
          <BsThreeDotsVertical
            style={{
              color: "#57708c",
              marginLeft: "auto",
              fontSize: "1.5em",
              cursor: "pointer",
            }}
          />
        </div>

        <div className={classes.glands_and_organs}>
          {props.color.tooltip.map((item) => (
            <div key={item.id}>
              <span id={item.id}>
                <div className={classes.glands_and_organs_item}>
                  {item.img && (
                    <img
                      src={item.img}
                      alt=""
                      style={{ width: "45px", height: "50px" }}
                    />
                  )}
                </div>
              </span>
              <ReactTooltip
                anchorId={item.id}
                place="top"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
                content={item.content}
              />
            </div>
          ))}
        </div>
        <div className={classes.chakra_impact}>
          <FaHeadphonesAlt
            style={{
              color: "#57708c",
              fontSize: "2em",
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              padding: "5px",
            }}
          />
          <h3 className={classes.chakra_h3}>U4Ea Sound Healing</h3>

          <BsThreeDotsVertical
            style={{
              color: "#57708c",
              marginLeft: "auto",
              fontSize: "1.5em",
              cursor: "pointer",
            }}
          />
        </div>
        <div className={classes.sound_healing}>
          {props.color.soundHealing &&
            props.color.soundHealing.map((sound, index) => (
              <img
                // style={{ height: 100, width: 100 }}
                src={sound}
                alt=""
                key={index}
                className={classes.qrImg}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Chakra;
