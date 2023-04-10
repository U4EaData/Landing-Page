import React, { useEffect } from "react";
import classes from "./LoginForm.module.css";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import appClasses from "../../App.module.css";

const LoginForm = (props) => {
  const navigate = useNavigate();

  const navigateHandler = (login) => {
    console.log("login value: ", login);
    login ? navigate("/userdashboard") : null;
  };

  /* Uncomment when ready to connect database */
  const onSubmitLogin = (props) => {
    console.log("submit login");
    // console.log("on submit login ", props);
    // axios
    //   .post("/signin", {
    //     email: props.user.email,
    //     password: props.user.password,
    //   })
    //   .then((user) => {
    //     if (user.data.id) {
    //       props.closeForm();
    //       props.loadUser(user);
    //     }
    //     navigate("/userdashboard");
    //   })
    //   .catch((err) => {
    //     console.log("Error occured!", err);
    //     LoginError();
    //   });
  };

  const LoginError = () => {
    console.log("error");
  };

  return (
    <div className={classes.loginform} id="formElement">
      <div className={classes.form}>
        <div className="close">
          <AiOutlineClose className={classes.close} onClick={props.closeForm} />
        </div>
        <h1 className={classes.login_header}>Login</h1>
        <input
          className={classes.form_input_box}
          type="text"
          placeholder="Email"
          onChange={props.onEmailChange}
          required
        />
        <input
          className={classes.form_input_box}
          type="password"
          placeholder="Password"
          onChange={props.onPasswordChange}
          required
        />
        <button
          onClick={() => onSubmitLogin(props)}
          className={classes.form_btn}
        >
          Login
        </button>
        <div className={classes.form_switch}>
          <h3 className={classes.form_signup}>Not a member?</h3>
          <span
            className={classes.form_link}
            id="registerLink"
            onClick={(e) => props.toggleForm(e)}
          >
            Create account now
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
