import React from "react";
import styles from "./Contact.module.css";
import homepage from "../../assets/homepage.jpg";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contact_container}>
        <img src={homepage} alt="Image 1" className={styles.contact_img}/>
        <p className={styles.contact_title}>Get in Touch</p>
        <h1 className={styles.contact_heading}>Contact Us</h1>
      </div>
      <div className={styles.contact_info}>
        <div className={styles.contact_info_item}>
          <img src={homepage} alt="Location Icon" className={styles.contact_info_icon}/>
          <p className={styles.contact_info_text}>123 Street, City, Country</p>
        </div>
        <div className={styles.contact_info_item}>
          <img src={homepage} alt="Phone Icon" className={styles.contact_info_icon}/>
          <p className={styles.contact_info_text}>+1 234 567 890</p>
        </div>
        <div className={styles.contact_info_item}>
          <img src={homepage} alt="Email Icon" className={styles.contact_info_icon}/>
          <p className={styles.contact_info_text}>info@example.com</p>
        </div>
      </div>
      <div className={styles.contact_form}>
        <h2 className={styles.contact_form_heading}>Send Us a Message</h2>
        <form>
          <input type="text" placeholder="Your Name" className={styles.contact_form_input}/>
          <input type="email" placeholder="Your Email" className={styles.contact_form_input}/>
          <textarea placeholder="Your Message" rows="4" className={styles.contact_form_textarea}></textarea>
          <button type="submit" className={styles.contact_form_button}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
