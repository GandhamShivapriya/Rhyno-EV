import React from "react";
import styles from "./about.module.css";
import rhyno_logo from "../../assets/rhyno_logo.png";
import team2 from "../../assets/team2.jpg";
import "../../components/footer/footer.css"
function About() {
  return (
    <>
      <div className={styles.img_bgm}>
        <h2 className={styles.h2}>
          Want to Know More About US!! Checkout below
        </h2>
      </div>
      <div
        className={`card mb-3 ${styles["card1"]}`}
        // style={{ maxWidth: 640 }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={rhyno_logo}
              className={`img-fluid rounded-start  ${styles["card_img1"]}`}
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title" style={{ color: "#F9ED32" }}>
                Company's Emergence
              </h5>
              <p className="card-text">
                Established in 2019 by an automotive engineer with a vision for
                sustainable and robust mobility solutions, Rhyno EV is not just
                a company; it's a collective effort of a dynamic team of young
                individuals passionately driving innovation in the electric
                vehicle industry. We believe in engineering solutions that solve
                problems.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={`card mb-3 ${styles["card2"]}`}>
          <img src={team2} className={`card-img-top ${styles["img2"]}`} alt="..." />
          <div className="card-body" >
            <h5 className="card-title" style={{color:"#F9ED32"}}>
              Our Motive,Priorities and Dedication towards Customers Safety
            </h5>
            <p className="card-text">
              With our first product which is a unique experience of
              elegance, comfort and style, addressing the pitfalls of
              conventional electric scooters. Our design prioritizes safety,
              eliminating concerns of fires and ensuring a longer battery
              lifespan with our battery technology.  Join us as we pioneer a new era in
              sustainable and dependable electric transportation.
            </p>
          </div>
        </div>
      </div>
      <footer className={`container-fluid  ${styles["footy"]}`}>
      <ul className={styles.sett} style={{ listStyle: "none" }}>
        <li className="content">
          <div className="note">
            <h2>Privacy policy</h2>
            <ul>
              <li>To provide and maintain our website</li>
              <li>To notify you about changes to our website</li>
              <li>
                To allow you to participate in interactive features of our
                website
              </li>
            </ul>
          </div>
        </li>
        <li className="content">
          <div className="note">
            <h2>Refund policy</h2>
            <ul>
              <li>
                The product must be in the same condition that you received it
              </li>
              <li>The product must be unused and in its original packaging</li>
              <li>You must provide proof of purchase</li>
            </ul>
          </div>
        </li>
        <li className="content">
          <div className="note">
            <h2>Website Policy</h2>
            <p>
              This website is operated by Rhyno EV. Throughout the site, the
              terms “we”, “us” and “our” refer to Rhyno EV. Rhyno EV offers this
              website, including all information, tools, and services available
              from this site to you, the user, conditioned upon your acceptance
              of all terms, conditions, policies, and notices stated here.
            </p>
          </div>
        </li>
      </ul>
      </footer>
    </>
  );
}
//
export default About;
