import styles from './Footer.module.css'

const Footer = () => {
    const currentYear = new Date().getFullYear().toString();
    console.log(currentYear);
return (
    <footer className={styles.footer}>
            <div className={styles.container}>
            <div className={styles.footer_content}>
                    <h1 className={styles.footer_main}>New Sagarika Driving School</h1>
                    <p className={styles.footer_p}>New Sagarika Learners has over 24 years of driver education experience and offers the best 
                            facilities, safer cars, and highly trained instructors.</p>
            </div>
            <div className={styles.footer_content}>
                    <h1 className={styles.footer_heading}>Quick Links</h1>
                    <ul className={styles.footer_list}>
                            <li><a href="/">Home</a></li>
                            <li><a href="/courses">Courses</a></li>
                            <li><a href="/gallery">Gallery</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                    </ul>
            </div>
            <div className={styles.footer_content}>
                    <h1 className={styles.footer_heading}>Service</h1>
                    <ul className={styles.footer_list}>
                            <li>Driving Lessons</li>
                            <li>Driving Test</li>
                            <li>Driving License</li>
                            <li>Driving Instructor</li>
                    </ul>
            </div>
            <div className={styles.footer_content}>
                    <h1 className={styles.footer_heading}>Contacts</h1>

                    <h4 className={styles.footer_subheading}>Phone</h4>
                    <p className={styles.footer_p}>+94 112745183</p>
                    <p className={styles.footer_sub_p}>Mon - Sun 8:00am to 6:00pm</p>

                    <h4 className={styles.footer_subheading}>Address</h4>
                    <p className={styles.footer_p}>279/1 High Level Rd, Pannipitiya 10230</p>
            </div>
    </div>
    <div>
            <p className={styles.footer_copy}>Copyright &copy; {currentYear} All Rights Reserved.</p>
    </div>
    </footer>
    
)
}


export default Footer