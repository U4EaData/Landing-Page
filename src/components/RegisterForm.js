import React from "react";
import classes from "./LoginForm.module.css";
import { AiOutlineClose } from "react-icons/ai";

const RegisterForm = (props) => {
  return (
    <div className={classes.loginform}>
      <form className={classes.form}>
        <div className="close" onClick={() => props.loginBtnClicked()}>
          <AiOutlineClose className={classes.close} />
        </div>
        <h1 className={classes.login_header}>Register</h1>
        <h3 className={classes.form_signup}>Create your account for free!</h3>
        <input
          className={classes.form_input_box}
          type="text"
          placeholder="First Name"
          required
        />
        <input
          className={classes.form_input_box}
          type="text"
          placeholder="Last Name"
          required
        />
        <input
          className={classes.form_input_box}
          type="text"
          placeholder="Email"
          required
        />
        <input
          className={classes.password_input_box}
          type="password"
          placeholder="Password"
          required
        />

        <button className={classes.form_btn}>Register Now</button>
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
      </form>
    </div>
  );
};

export default RegisterForm;
