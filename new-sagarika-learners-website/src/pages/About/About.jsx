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


        <div className={styles.about_first_section} >
          <div className={styles.about_coloumn1}>
            <img src={homepage} alt="Image 1" className={styles.about_first_img}/>
          </div>
          <div className={styles.about_coloumn2}>
            <h1>We’re an Experienced Driving School</h1>
            <p>Our driving school has been providing driving lessons since 2000. We have a team of experienced instructors who are committed to providing the best driving education to our students. Our goal is to help you become a safe and confident driver.</p>
          </div>
        </div>

        <div className={styles.about_second_section}>
          <h1 className={styles.about_second_section_heading}>Why choose Us</h1>
          <h4 className={styles.about_second_section_subheading}>A few good reasons to why choose us! We promise to give you the following: </h4>
          <div className={styles.about_second_section_container}>
            <div className={styles.about_second_section_coloumn1}>
              <h3>Experienced Instructors</h3>
              <p>Our instructors are experienced and certified. They have years of experience in teaching driving lessons and are committed to providing the best education to our students.</p>
            </div>
            <div className={styles.about_second_section_coloumn2}>
              <h3>Flexible Scheduling</h3>
              <p>We offer flexible scheduling to accommodate your busy lifestyle. You can choose the time and date that works best for you.</p>
            </div>
            <div className={styles.about_second_section_coloumn3}>
              <h3>Competitive Prices</h3>
              <p>Our driving lessons are competitively priced. We offer affordable rates to help you save money while learning to drive.</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default About;
