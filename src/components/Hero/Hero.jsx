import React from 'react';
import styles from "./Hero.module.scss";
import image36 from "../../assets/image/image 36.png";
import rectangle1 from "../../assets/image/Rectangle 1.png";
import rectangle2 from "../../assets/image/Rectangle 2.png";
import rectangle3 from "../../assets/image/Rectangle 3.png";
import ellipse20 from "../../assets/svg/Ellipse 20.png";
import rectangle410 from "../../assets/image/Rectangle 410.png";


const Hero = () => {
  const certificates = [
    {
      id: 1,
      image: image36,
    },
    {
      id: 2,
      image: image36,
    },
    {
      id: 3,
      image: image36,
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Medusa',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, tincidunt sed purus phas',
      avatar: ellipse20
    },
    {
      id: 2,
      name: 'Medusa',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, tincidunt sed purus phas',
      avatar: ellipse20
    },
    {
      id: 3,
      name: 'Medusa',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, tincidunt sed purus phas',
      avatar: ellipse20
    }
  ];

  const plans = [
    {
      id: 1,
      image: rectangle1,
    },
    {
      id: 2,
      image: rectangle2,
    },
    {
      id: 3,
      image: rectangle3,
    }
  ];

  return (
    <div className={styles.hero}>
      {/* Certifications Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitleBox}>
            MY CERTIFICATIONS
          </h2>

          <button className={styles.seeAllBtn}>See all</button>
        </div>
        <div className={styles.certificatesGrid}>
          {certificates.map((cert) => (
            <div key={cert.id} className={styles.certificateCard}>
              <img
                src={cert.image}
                alt={`Certificate ${cert.id}`}
                className={styles.certificateImage}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>RECENT TESTIMONIALS</h2>
          <button className={styles.seeAllBtn}>See all</button>
        </div>

        <div className={styles.testimonialsContainer}>
          {/* Left Image */}
          <div className={styles.stethoscopeImage}>
            <img
              src={rectangle410}
              alt="Medical Equipment"
              className={styles.medicalImage}
            />
          </div>

          {/* Right Testimonials */}
          <div className={styles.testimonialsCards}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={styles.testimonialCard}>
                <div className={styles.testimonialAvatar}>
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className={styles.avatarImage}
                  />
                </div>

                <div className={styles.testimonialContent}>
                  <div className={styles.testimonialHeader}>
                    <span className={styles.testimonialName}>
                      {testimonial.name}
                    </span>
                    <div className={styles.testimonialRating}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className={styles.star}>★</span>
                      ))}
                    </div>
                  </div>
                  <p className={styles.testimonialDescription}>
                    {testimonial.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>PLANS FOR MY PATIENTS</h2>
          <button className={styles.seeAllBtn}>See all</button>
        </div>


        <div className={styles.plansGrid}>
          {plans.map((plan) => (
            <div key={plan.id} className={styles.planCard}>
              {/* Show image instead of title/description */}
              <img
                src={plan.image}
                alt={`Plan ${plan.id}`}
                className={styles.planImage}
              />
              <div className={styles.planOverlay}>
                <button className={styles.planBtn}>Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;