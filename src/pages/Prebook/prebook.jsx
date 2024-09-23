import React from "react";
import black from "../../assets/black.png";
import blue from "../../assets/blue.png";
import golden from "../../assets/golden.png";
import styles from "./prebook.module.css";
import rhyno_logo from "../../assets/rhyno_logo.png"

function Prebook() {
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={black}
              className={`d-block w-100 ${styles["effect"]}`}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={blue}
              className={`d-block w-100 ${styles["effect"]}`}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={golden}
              className={`d-block w-100 ${styles["effect"]}`}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <h1 className={styles.pre_head}>Pre-Book YOUR SLOT NOW!!! & have a WONDERFUL Experience</h1>
      <div className={`card mb-3 ${styles["pre"]}`}>
        
        <div className="row g-0">
          <div className="col-md-4">
            <img src={rhyno_logo} className={`img-fluid rounded-start ${styles["logo1"]}`} alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">PreBook-NOW</h5>
              <p className="card-text">
                We have a variety of Models Waiting for you!!!! Dont Miss it PreBook-Now
              </p>
            </div>
          </div>
        </div>
      </div>
      ;
      <div className={styles.login}>
        <h3 style={{ color: "white", textAlign: "center" }}>
          For more Info!!Login Here
        </h3>
        <input
          className="inp outline "
          type="mail number"
          placeholder="Enter Email or Phone no."
        />
        <input
          className="inp outline  "
          placeholder="enter the password"
          type="password"
        />
        <button className={styles.inp} style={{ color: "black" }}>
          Login
        </button>
        <p className={styles.inp}>
          Don't have an Account{" "}
          <span style={{ color: "white", fontWeight: "bold" }}>
            SIGN UP here
          </span>
        </p>
        <p className={styles.inp}>log in with</p>
        <div className={styles.icons3}>
          <i className="fa-brands fa-facebook border" />
          <i className="fa-brands fa-instagram border" />
          <i className="fa-brands fa-twitter border" />
          <i className="fa-brands fa-google border" />
        </div>
      </div>
      ;
    </div>
  );
}

export default Prebook;
