import React, { useState } from "react";
import classes from "../loginform/LoginForm.module.css";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from 'react-spinners';

const RegisterForm = (props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const onConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const onSubmitRegister = async () => {
    setLoading(true);
    if (
      props.user.email === "" ||
      props.user.name === "" ||
      props.user.password === ""
    ) {
      alert("All fields required");
      setLoading(false);
      return;
    }
    if (confirmPassword != props.user.password) {
      alert("Passwords do not match");
      setLoading(false);
      return;
    }
    // if (!validateEmail(props.user.email)) { // commenting this because this got triggered when brandon tried to make an acct, maybe the regex is bad
    //   alert("Invalid email");
    //   setLoading(false);
    //   return;
    // }

    console.log("Submit register");
    console.log("props from register form", props.user);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/users`,
        {
          fullname: props.user.name,
          email: props.user.email.toLowerCase(),
          password: props.user.password,
          title: "",
          quote: "",
          gender: "",
          location: "",
        }
      );
      console.log(response);
      props.toggleForm("signInLink");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      alert("Duplicate email address");
    }
    setLoading(false);
  };

  return (
    <div className={classes.loginform} id="register-form">
      {loading ? (
        <div className={classes.form}>
          {/* <h1 className={classes.login_header}>Loading...</h1> */}
          <ClipLoader color="#123abc" loading={loading} size={50} />
        </div>
      ) : (
        <div className={classes.form}>
          <div className="close" onClick={props.closeForm}>
            <AiOutlineClose className={classes.close} />
          </div>
          <h1 className={classes.login_header}>Register</h1>
          <h3 className={classes.form_signup}>Create your account for free!</h3>
          <input
            className={classes.form_input_box}
            type="text"
            placeholder="Full Name"
            name="firstname"
            id="register-form-name"
            onChange={props.onNameChange}
            required
          />
          <input
            className={classes.form_input_box}
            type="email"
            placeholder="Email"
            name="email"
            id="register-form-email"
            onChange={props.onEmailChange}
            required
          />
          <input
            className={classes.password_input_box}
            type="password"
            placeholder="Password"
            name="password"
            id="register-form-password"
            onChange={props.onPasswordChange}
            required
          />
          <input
            className={classes.password_input_box}
            type="password"
            placeholder="Confirm Password"
            name="confirm-password"
            id="register-form-password"
            onChange={onConfirmPasswordChange}
            required
          />

          <button className={classes.form_btn} onClick={onSubmitRegister}>
            Register Now
          </button>
          <div className={classes.form_switch}>
            <h3 className={classes.form_signup}>Already a member?</h3>
            <span
              className={classes.form_link}
              onClick={(e) => props.toggleForm(e)}
              id="signInLink"
            >
              Sign in
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
