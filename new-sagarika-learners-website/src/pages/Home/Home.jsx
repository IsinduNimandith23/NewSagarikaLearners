import React from "react";
import styles from "./Home.module.css";
import homepage from "../../assets/homepage.jpg";
import secondimg from "../../assets/secondimg.jpg";
import driver from "../../assets/driver.png";
import license from "../../assets/license.png";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.home_section}>
        <img src={homepage} className={styles.home_first_img} />
        <div className={styles.moto}>
          <p>Our students drive better</p>
          <h1>Learn To Drive With Confidence</h1>
          <button className={styles.home_learn_btn}>LEARN MORE</button>
        </div>
      </div>
      <div className={styles.first_section}>
        <div className={styles.coloumn1}>
          <h1>Schedule Your Driving Lessons with Us</h1>
          <h3>
            Driving School is family oriented, recommended by most of our
            students even though we did not advertise much.
          </h3>
          <p className={styles.paragraph}>
            All of our instructors are trained to give, you the customer,
            complete satisfaction in your driving experience so that you can
            handle driving on your own, with skill, safety, caution, and respect
            for all other drivers and pedestrians. We are patient and totally
            professional to handle your goals of earning your driver's license.
            Service, Security, and Success is what we are all about. Viva
            Driving School looks forward to serving you.
          </p>
          <button className={styles.home_about_btn}>About Us</button>
        </div>
        <div className={styles.coloumn2}>
          <img src={secondimg} className={styles.home_second_img} alt="" />
        </div>
      </div>

      <div className={styles.second_section}>
        <h1 className={styles.second_h1}>Professional Driving Lessons</h1>
        <p className={styles.second_p}>
          We are an approved driving school and we are devoted to organizing
          competent and safe driving lessons.
        </p>

        <div className={styles.second_container}>
          <div className={styles.second_coloumn1}>
            <div className={styles.content}>
              <img
                src={driver}
                alt="icon"
                className={styles.second_section_img}
              />
              <div className={styles.second_card}>
                <h2>Professional Instructors</h2>
                <p>
                  Our instructors are highly trained and certified to teach you
                  everything you need to know about driving.
                </p>
              </div>
            </div>

            <div className={styles.content}>
              <img
                src={driver}
                alt="icon"
                className={styles.second_section_img}
              />
              <div className={styles.second_card}>
                <h2>Flexible Schedule</h2>
                <p>
                  We offer flexible schedules to fit your needs. You can choose
                  the time that works best for you.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.second_coloumn2}>
            <div className={styles.content}>
              <img
                src={driver}
                alt="icon"
                className={styles.second_section_img}
              />
              <div className={styles.second_card}>
                <h2>Safe and Secure</h2>
                <p>
                  Our vehicles are equipped with the latest safety features to
                  ensure your safety during your lessons.
                </p>
              </div>
            </div>

            <div className={styles.content}>
              <img
                src={driver}
                alt="icon"
                className={styles.second_section_img}
              />
              <div className={styles.second_card}>
                <h2>Safe and Secure</h2>
                <p>
                  Our vehicles are equipped with the latest safety features to
                  ensure your safety during your lessons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.third_section}>
        <div className={styles.third_container}>
          <div className={styles.category}>
            <img src={license} alt="" className={styles.category_img}/>
            <h1>56378</h1>
            <h4>Licenses Issued</h4>
          </div>
          <div className={styles.category}>
          <img src={license} alt="" className={styles.category_img}/>
          <h1>56378</h1>
            <h4>Active Students</h4>
          </div>
          <div className={styles.category}>
          <img src={license} alt="" className={styles.category_img}/>
          <h1>56378</h1>
            <h4>People Reviews</h4>
          </div>
          <div className={styles.category}>
          <img src={license} alt="" className={styles.category_img}/>
          <h1>56378</h1>
            <h4>Training Hours</h4>
          </div>
        </div>
      </div>

      <div className={styles.fourth_section}>
        <div className={styles.fourth_container}>
        <img src={homepage} className={styles.home_first_img} />
          <div className={styles.fourth_category}>
            <h1>We Help Students to Pass Test & Get a License on the First Try
            </h1>
            <p>
              Our mission is to provide the best driving lessons to our students
              and help them become safe and confident drivers. We are committed
              to providing a safe and comfortable learning environment for our
              students.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
