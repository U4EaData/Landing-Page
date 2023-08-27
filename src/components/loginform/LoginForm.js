import React, { useEffect, useState } from "react";
import classes from "./LoginForm.module.css";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import appClasses from "../../App.module.css";

const LoginForm = (props) => {
  const navigate = useNavigate();
  const email = useState("");
  const password = useState("");
  const navigateHandler = (login) => {
    console.log("login value: ", login);
    login ? navigate("/userdashboard") : null;
  };


  const onSubmitLogin = async () => {
    const email = props.user.email.toLowerCase();
    const password = props.user.password;
    try {
      const response = await axios.post("http://localhost:3500/auth", {
        email: email,
        password: password,
      });
      const headers = response.headers;
      console.log("document.cookie")
      console.log(document.cookie) // prints nothing
      const accessToken = response.data.accessToken;
      // Save access token in local storage
      localStorage.setItem("access_token", accessToken);

      console.log(response)
      try {
        // Load user's ID using the /users endpoint
        const idResponse = await axios.get("http://localhost:3500/users", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            email: email, // Pass the email to get the user's ID
          },
        });
        const userId = idResponse.data.id; 
        // Load user data using the user's ID
        const userResponse = await axios.get(`http://localhost:3500/users`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            id: userId,
          },
        });  
        const newUser = userResponse.data;
        console.log('THIS IS THE NEW USER:')
        console.log(newUser)
        props.loadUser(newUser)
        // Navigate to the user dashboard or wherever you want
        navigate('/userdashboard');
      } catch (error) {
        console.log("Error loading user data:", error);
      }
    } catch (error) {
      console.log("Invalid login attempt");
      console.log(error);
      setError("Invalid credentials");
      alert("Invalid credentials")
    }
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
