import React, { useEffect, useState } from "react";
import classes from "./LoginForm.module.css";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import appClasses from "../../App.module.css";
import { ClipLoader } from 'react-spinners';

const LoginForm = (props) => {
  const navigate = useNavigate();
  const email = useState("");
  const password = useState("");
  const [loading, setLoading] = useState(false);
  const navigateHandler = (login) => {
    console.log("login value: ", login);
    login ? navigate("/userdashboard") : null;
  };

  const onSubmitLogin = async () => {
    setLoading(true)
    const email = props.user.email.toLowerCase();
    const password = props.user.password;
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/auth`,
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      );
      const accessToken = response.data.accessToken;
      // Save access token in local storage
      localStorage.setItem("access_token", accessToken);
      console.log(document.cookie); // prints nothing
      try {
        // Load user's ID using the /users endpoint
        const idResponse = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/users`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            params: {
              email: email, // Pass the email to get the user's ID
            },
          }
        );
        const userId = idResponse.data.id;
        // Load user data using the user's ID
        const userResponse = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/users`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            params: {
              id: userId,
            },
          }
        );
        const newUser = userResponse.data;
        console.log("THIS IS THE NEW USER:");
        console.log(newUser);
        props.loadUser(newUser);
        navigate("/userdashboard");
        setLoading(false);
      } catch (error) {
        alert("Invalid credentials");
        console.log("Error loading user data:", error);
        setLoading(false);
      }
    } catch (error) {
      alert("Invalid credentials");
      setLoading(false);
      console.log(error);
    }
  };

  const LoginError = () => {
    console.log("error");
  };

  return (
    <div className={classes.loginform} id="formElement">
        {loading ? (
          <div className={classes.form}>
            {/* <h1 className={classes.login_header}>Loading...</h1> */}
            <ClipLoader color="#123abc" loading={loading} size={50} />
          </div>
        ) : (
          <div className={classes.form}>
            <div className="close">
              <AiOutlineClose
                className={classes.close}
                onClick={props.closeForm}
              />
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
        )}
    </div>
  );
};

export default LoginForm;
