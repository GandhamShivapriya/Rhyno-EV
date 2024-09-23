import React from "react";
import styles from "./contact.module.css";
function Contact_Us() {
  return (
    <div className={styles.body}>
      <h1 className={styles.location}>CheckOut our Location</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3668.436265237255!2d72.66315307509598!3d23.154272279081678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRhyno%20Wheels%20Private%20limited%2C%20Near%20UG%20hostel%20gate%20%232%2C%20Behind%20PDEU%2C%20Raisan%2C%20Gandhinagar%2C%C2%A0Gujarat%2C%C2%A0India.!5e0!3m2!1sen!2sin!4v1717590886294!5m2!1sen!2sin"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={styles.map}
      />
      <div className={styles.contact_info}>
        <h1 className={styles.contacthead}>Contact Details</h1>
        <h3>Contact-number</h3>
        <h4>+91-9023987528</h4>
        <h3>Location</h3>
        <h4>
          Rhyno Wheels Private limited, Near UG hostel gate #2, Behind PDEU,
          Raisan, Gandhinagar, Gujarat, India.
        </h4>
      </div>
    </div>
  );
}

export default Contact_Us;
