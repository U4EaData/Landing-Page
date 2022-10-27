import React from "react";
import styles from "./SignUpSection.module.css";
import img from "../images/U4Ea Landing Page.png";

function SignUpSection() {
  return (
    <div className={styles.App} id="signup">
      <div className="container-fluid col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center justify-content-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={img}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              loading="lazy"
            ></img>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Subscribe now</h1>
            <p className="lead">
              Sign up for Beta access to U4Ea 2.0, gain early access to new
              features, participate in customer feedback interviews, and
              contribute to the future of mental health.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-outline-primary btn-lg px-4 me-md-2"
              >
                Enter email address
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpSection;
