import React from 'react';
import styles from './Footer.module.scss';
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.contactSection}>
                <h2 className={styles.contactTitle}>CONTACT ME</h2>
                <div className={styles.contactIcons}>
                    <a href="mailto:your.email@example.com" className={styles.iconLink1} aria-label="Email">
                        <MdEmail className={styles.emailIcon} />
                    </a>

                    <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.iconLink2}
                        aria-label="Location"
                    >
                        <IoLocationSharp className={styles.locationIcon} />
                    </a>

                    <a
                        href="tel:+1234567890"
                        className={styles.iconLink3}
                        aria-label="Phone"
                    >
                        <FaPhoneAlt className={styles.phoneIcon} />
                    </a>


                </div>
            </div>

            <div className={styles.messageSection}>
                <h2 className={styles.messageTitle}>SHORT MESSAGE</h2>

                <p className={styles.messageText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
                </p>

            </div>
        </footer>
    );
};

export default Footer;