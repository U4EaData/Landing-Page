import React from "react";
import classes from "../loginform/LoginForm.module.css";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const RegisterForm = (props) => {
  const navigate = useNavigate();

  /* Uncomment when ready to connect database */
  const onSubmitRegister = () => {
    console.log("Submit register");
    // console.log("props from register form", props.user);
    // axios
    //   .post("/register", {
    //     name: props.user.name,
    //     email: props.user.email,
    //     password: props.user.password,
    //   })
    //   .then((user) => {
    //     console.log("Successfully registered", user.data);
    //     if (user) {
    //       props.closeForm();
    //       props.loadUser(user);
    //       navigate("/userdashboard");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log("Error occured!", err);
    //   });
  };

  return (
    <div className={classes.loginform} id="register-form">
      <div className={classes.form}>
        <div className="close" onClick={props.closeForm}>
          <AiOutlineClose className={classes.close} />
        </div>
        <h1 className={classes.login_header}>Register</h1>
        <h3 className={classes.form_signup}>Create your account for free!</h3>
        <input
          className={classes.form_input_box}
          type="text"
          placeholder="First"
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
    </div>
  );
};

export default RegisterForm;
