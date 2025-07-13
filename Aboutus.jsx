import React from 'react';
import { IoCall } from "react-icons/io5";
import styles from "./About.module.css";

const Aboutus = () => {

  const handleContactClick = () => {
    alert('Contact us at +1 (234) 567-890');
  };

  return (
    <section id="about">
      <h1 className={styles.h1}>
        <span aria-hidden="true"><IoCall /></span> About Us
      </h1>

      <div className={styles.content}>
        <p>
          XUYZ is a leading Business Process Outsourcing (BPO) provider, delivering reliable, cost-effective solutions to clients worldwide.
        </p>
        <p>
          We specialize in customer service, technical support, back-office processing, and data management. Our team is trained to ensure quality, accuracy, and client satisfaction at every step.
        </p>
        <p>
          With 24/7 operations, we help businesses enhance efficiency and scalability. Founded in 2020, we combine industry expertise with the latest technology.
        </p>
        <p>
          We serve a wide range of industries, with a strong focus on e-commerce. Our approach is flexible, results-driven, and fully customized to meet client needs.
        </p>
        <p>
          We value long-term partnerships and focus on continuous improvement. Trust us to be an extension of your brand, delivering excellence consistently.
        </p>
        <p className={styles.highlight}>
          <strong>XUYZ – Your success, our commitment.</strong>
        </p>
        <button className={styles.button} onClick={handleContactClick}>
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Aboutus;


