'use client';

import React from "react";
import { motion } from "framer-motion";
import "../styles/experience.css";

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="experience-container">
        {/* Left Side Animated */}
        <motion.div
          className="experience-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h1 className="experience-heading">
            we rock <br /> your digital <br /> experiences
          </h1>
          <button className="cta-button">Professional partner</button>
          <br />
          <button className="cta-bton">GET INTO TOUCH WITH ONESOL</button>
        </motion.div>

        {/* Right Side Animated */}
        <motion.div
          className="experience-right"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="info-box">
            <div className="info-header">
              <h2>onesol is fast</h2>
              <span className="close-btn">✕</span>
            </div>
            <p className="info-description">
              we know the pain of traditional, development, trust us. At Onesol
              we&apos;re up to 10x faster than your current agency. Period.
            </p>

            <div className="accordion">
              <div className="accordion-item">
                <div className="accordion-title">
                  Onesol will leave you breathless
                  <span className="plus-icon">+</span>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-title">
                  Onesol has got you covered.
                  <span className="plus-icon">+</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;