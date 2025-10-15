// src/components/Header/Header.jsx
import React from 'react';
import styles from './Header.module.scss';
import doctorImage from '../../assets/image/Rectangle 405.png';
import operationIcon from '../../assets/image/Group 672.png';
import fluentIcon from "../../assets/svg/fluent.png";
import vectorIcon from "../../assets/svg/Vector.png"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerBg}></div>

      <div className={styles.headerContent}>
        {/* Doctor Name */}
        <div className={styles.doctorName}>
          <h1>MICHEL</h1>
          <h1>JORDAN</h1>
        </div>

        {/* Main Content Grid */}
        <div className={styles.mainGrid}>
          {/* Left Stats */}
          <div className={styles.leftStats}>
            <button className={styles.ctaBtn}>BOOK NOW</button>

            <div className={styles.statCard}>
              <img src={operationIcon} alt="Operations Icon" className={styles.iconImage} />
            </div>

            <div className={styles.statCard}>
              <div className={styles.statNumber}>4.5</div>
              <div className={styles.stars}>
                <span className={styles.starFilled}>★</span>
                <span className={styles.starFilled}>★</span>
                <span className={styles.starFilled}>★</span>
                <span className={styles.starFilled}>★</span>
                <span className={styles.starHalf}>★</span>
              </div>
              <div className={styles.statLabel}>RATINGS</div>
            </div>


          </div>

          {/* Center Image */}
          <div className={styles.centerImage}>
            <div className={styles.heroImageContainer}>
              <img
                src="/src/assets/image/Rectangle 405.png"
                alt="Dr. Michel Jordan"
                className={styles.heroImage}
              />
            </div>
          </div>

          {/* Right Stats */}
          <div className={styles.rightStats}>
            <button className={styles.ctaBtn}>MESSAGE</button>

            <div className={styles.statCard}>
              <div className={styles.statTop}>
                <div className={styles.statNumber1}>12</div>
                <img
                  src={fluentIcon}
                  alt="Certificate Icon"
                  className={styles.certificateIcon}
                />
              </div>
              <div className={styles.statLabel1}>CERTIFICATES</div>
            </div>


            <div className={styles.statCard}>
              <div className={styles.statTop1}>
                <div className={styles.statNumber2}>900+</div>
                <img src={vectorIcon} alt="Heart Icon" className={styles.heartIcon} />
              </div>
              <div className={styles.statLabel2}>PATIENTS</div>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <div className={styles.introSection}>
          <h2 className={styles.introTitle}>MY INTRO</h2>
          <p className={styles.introText}>
            With over 15 years of experience in cardiovascular medicine,
            Dr. Michel Jordan specializes in advanced cardiac procedures and
            patient-centered care. Committed to excellence and innovation in
            modern healthcare delivery.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;