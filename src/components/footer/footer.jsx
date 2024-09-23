import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className=" container-fluid foot">
      <ul className="set" style={{ listStyle: "none" }}>
        <li className="content">
          <div className="note">
            <h2 className="h2">Privacy policy</h2>
            <ul className="inner">
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

        <li className="content">
          <div className="note">
            <h2>Contact us</h2>
            <ul>
              <li>Mail: info@rhyno.in</li>
              <li>Mobile no.: +91-9023987528 </li>
              <li>
                Location: Rhyno Wheels Private limited, Near UG hostel gate #2,
                Behind PDEU, Raisan, Gandhinagar, Gujarat, India.
              </li>
            </ul>
          </div>
        </li>
        <li className="content">
          <div className="note">
            <h2> Career</h2>
            <p>
              Join us in shaping the future of electric mobility! At Rhyno EV,
              we're always looking for passionate individuals to join our
              dynamic team. As a rapidly growing company, we offer exciting
              career opportunities in various fields, including:
            </p>
            <ul>
              <li>Product Development</li>
              <li>Customer Service</li>
              <li>
                <a href="https://www.linkedin.com/company/rhyno-wheels">
                  linkedinProfile
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="content">
          <div className="note">
            <h2>Rentals</h2>
            <div>
              <p>
                Explore the Roars of Rhyno with Our Rental Options! Test the
                waters with our flexible rental model, available for a week or a
                month, allowing you to experience the Rhyno firsthand before
                committing. Simply visit our authorized dealerships to unlock
                this opportunity.
              </p>
            </div>
          </div>
        </li>
      </ul>
      <div className="icons2">
        <h2>For More INFO Visit</h2>
        <a href="https://www.instagram.com/rhyno.in/">
          <i className="fa-brands fa-instagram know_icon"></i>
        </a>
        <a href="https://www.linkedin.com/company/rhyno-wheels">
          <i className="fa-brands fa-linkedin i know_icon"> </i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
