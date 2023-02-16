import React from "react";
import classes from "./LoginForm.module.css";
import { AiOutlineClose } from "react-icons/ai";

const LoginForm = (props) => {
  return (
    <div className={classes.loginform}>
      <form className={classes.form}>
        <div className="close" onClick={() => props.loginBtnClicked()}>
          <AiOutlineClose className={classes.close} />
        </div>
        <h1 className={classes.login_header}>Login</h1>
        <input
          className={classes.form_input_box}
          type="text"
          placeholder="Email"
          required
        />
        <input
          className={classes.form_input_box}
          type="password"
          placeholder="Password"
          required
        />
        <button className={classes.form_btn}>Login</button>
        <div className={classes.form_switch}>
          <h3 className={classes.form_signup}>Not a member?</h3>
          <span
            className={classes.form_link}
            onClick={(e) => props.toggleForm(e)}
            id="registerLink"
          >
            Create account now
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
