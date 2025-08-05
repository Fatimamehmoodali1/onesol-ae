'use client';
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/testimonial.css';

const Testimonials = () => {
  return (
    <section className="testimonial-wrapper">
      <div className="testimonial-container">
        <h2 className="section-title">Client’s <br /> Testimonials</h2>

        <div className="testimonial-grid">
          {/* Testimonial Card 1 - Animate from left */}
          <motion.div
            className="testimonial-card"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false }}
          >
            <div className="avatar-container">
              <img src="/images/men.png" alt="Client 1" />
            </div>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>
              ⭐“Working with ONESOL was a game changer for us.<br /> Their team understood our vision
              perfectly and delivered <br />a stunning digital solution that boosted our <br /> online presence
              significantly.”
            </p>
            <p className="client-name">– <strong>Sarah A., Marketing Director</strong></p>
          </motion.div>

          {/* Testimonial Card 2 - Animate from right */}
          <motion.div
            className="testimonial-card"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="avatar-container">
              <img src="/images/women.png" alt="Client 2" />
            </div>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>
              ⭐“From strategy to execution, ONESOL exceeded our <br /> expectations. Their creativity,
              professionalism, and <br /> support helped us reach new heights.”
            </p>
            <p className="client-name">– <strong>Ahmed K., CEO</strong></p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;