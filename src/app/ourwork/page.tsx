"use client";
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { useState } from 'react';
import { motion } from 'framer-motion';
import './work.css';

export default function OurWork () {
  const [menuOpen, setMenuOpen] = useState(false);
    return(
        <div>
      {/* Hero Section */}
      <section className="hero">
        <motion.img
          src="/images/Ellipse-4.png"
          alt=""
          className="hero-img left-circle"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      
        <motion.img
          src="/images/Ellipse-3.png"
          alt=""
          className="hero-img right-circle"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      
        <motion.img
          src="/images/rec.png"
          alt=""
          className="hero-img diagonal-rect"
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      
        <motion.div
          className="hero-overlay"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="hero-title">OurWork</h1>
          <p className="hero-breadcrumb">Home / OurWork</p>
        </motion.div>
      </section>

      {/* Top Orange Stripe */}
      <div className="about-stripe"></div>
          <section className="projects-section">
              <div className="projects-header">
              <h4 className="projects-label">PROJECTS</h4>
               <h2 className="projects-title">
                Our Latest Incredible <br /> Client&apos;s Projects
               </h2>
               <p className="projects-description">
                There are many variations of passages of available but majority have suffered alteration
                in some form, by humour or randomised words which don&apos;t look even slightly believable.
               </p>
               </div>

               <div className="project-cards">
                     {[
                       { image: 'project-1.png', title: 'Aurora Suite' },
                       { image: 'project-2.png', title: 'SkyLedger' },
                       { image: 'project-3.png', title: 'NeoCart' },
                       { image: 'project-4.png', title: 'VividStream' },
                         ].map((project, i) => (
                       <div className="project-card" key={i}>
                        <img src={`/images/${project.image}`} alt={project.title} />
                       <div className="project-overlay">
                            <h5>{project.title}</h5>
                        </div>
                     </div>
                           ))}
                      </div>
             </section>
            {/* next */}
            <section className="our-work-section relative">
  <img
    src="/images/circle-bg.png"
    alt="Background Circle"
    className="circle-bg absolute"
  />

  <div className="work-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        img: "/images/work-1.png",
        text: "Transforming Ideas Into Impact",
      },
      {
        img: "/images/work-2.png",
        text: "Where Innovation Becomes Reality",
      },
      {
        img: "/images/work-3.png",
        text: "Our Digital Masterpieces",
      },
      {
        img: "/images/work-4.png",
        text: "Crafting Digital Excellence",
      },
      {
        img: "/images/work-5.png",
        text: "Connecting Vision to Results",
      },
      {
        img: "/images/work-6.png",
        text: "Milestones of Innovation",
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        className="work-card bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.03 }}
      >
        <img src={item.img} alt={item.text} className="work-img mx-auto mb-2" />
        <div className="caption text-center font-medium text-gray-700">
          {item.text}
        </div>
      </motion.div>
    ))}
  </div>
</section>
             
            {/* next */}
            <div className="brands-section">
              <h2 className="brands-heading">1k+ Brands Trust Us</h2>

        <div className="brands-bar">
          <div className="brand-logos">
            <img src="/images/image45.png" alt="brand" />
            <img src="/images/image46.png" alt="brand" />
            <img src="/images/image47.png" alt="brand" />
            <img src="/images/image48.png" alt="brand" />
            <img src="/images/image49.png" alt="brand" />
            <img src="/images/image50.png" alt="brand" />
            <img src="/images/image51.png" alt="brand" />
            <img src="/images/image52.png" alt="brand" />
            <img src="/images/image53.png" alt="brand" />
            <img src="/images/image54.png" alt="brand" />
          </div>
        </div>
      </div>

      <div className='spacer'></div>
     {/* next */}
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
     {/* next */}
    <section className="cta-section">
      <div className="cta-content">
        <div className="cta-texts">
          <p className="cta-subtitle">We&apos; re here to help to grow your business.</p>
          <h2 className="cta-title">Looking for the Best IT Business Solutions?</h2>
        </div>
        <button className="cta-btton">LEARN MORE</button>
      </div>

      {/* Decorative Circles */}
      <img src="/images/circle1.png" alt="circle1" className="circle circle1" />
      <img src="/images/circle2.png" alt="circle2" className="circle circle2" />
    </section>
    {/* next */}
    <footer className="footer">
      <div className="footer-gradient-overlay">
        <h1 className="footer-watermark">Onesol</h1>
      </div>

      <div className="footer-content">
        <div className="footer-column">
          <img src="/images/logo.png" alt="Logo" className="footer-logo" />
          {/* <h2>Onesol</h2> */}
          <p>
            With years of hands-on expertise, ONESOL transforms ambitious ideas
            into powerful digital realities. From strategic branding to advanced
            tech solutions, we help businesses conquer new heights.
          </p>
          <div className="footer-social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Links</h3>
          <ul>
            <li>About Us</li>
            <li>Meet our Team</li>
            <li>Works & Media</li>
            <li>Our Projects</li>
            <li>Contacts</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Newsletter</h3>
          <p>Signup for our latest news & articles. No spam.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter address" />
            <button>→</button>
          </div>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <p>+971 50 9611550</p>
          <p>www.onesol.ae</p>
          <p>
            Business Center, Sharjah Publishing City Free Zone, Sharjah,
            United Arab Emirates
          </p>
          <button className="appointment-button">BOOK AN APPOINTMENT</button>
        </div>
      </div>

      <div className="footer-bottom">
        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
        <span>©2025 Onesol</span>
        <span>All Rights Reserved</span>
      </div>
    </footer>
        </div>
    );
};