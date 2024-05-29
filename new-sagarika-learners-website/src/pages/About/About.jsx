import React from "react";
import styles from "./About.module.css";
import homepage from "../../assets/homepage.jpg"; 

const About = () => {
  return (
    <div className={styles.about}>
        <div className={styles.about_container}>
            <img src={homepage} alt="Image 1" className={styles.about_img}/>
            <p className={styles.about_title}>Read about our Driving School</p>
            <h1 className={styles.about_heading}>About Us</h1>
        </div>
        <div className={styles.about_first}>
            <img src={homepage} alt="Image 1" className={styles.about_first_img}/>
            <h1>We’re an Experienced Driving School</h1>
            <p>Our driving school has been providing driving lessons since 2000. We have a team of experienced instructors who are committed to providing the best driving education to our students. Our goal is to help you become a safe and confident driver.</p>
        </div>
    </div>
  );
};

export default About;
