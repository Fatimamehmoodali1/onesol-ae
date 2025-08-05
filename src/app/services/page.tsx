'use client';

import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { useState } from 'react';
import { motion } from 'framer-motion';
import './service.css';

export default function Services () {
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
          <h1 className="hero-title">Projects</h1>
          <p className="hero-breadcrumb">Home / Services</p>
        </motion.div>
      </section>

      {/* Top Orange Stripe */}
      <div className="about-stripe"></div>

      <section className="services-section">
          <h4 className="tagline">ONESOL COMPANY</h4>
            <h2 className="headline">
            How Professional IT Services <br /> Can Drive <span className="highlight">Success.</span>
            </h2>

            <div className="service-cardes">
            <div className="service-cards">
             <img src="/images/service1.png" alt="IT Management" />
            <h3>IT MANAGEMENT</h3>
            <p>Marketing repurpose success tech sapien maximus design.</p>
            <span className="orange-box" />
            </div>
            <div className="service-cards">
            <img src="/images/service2.png" alt="Digital Marketing" />
            <h3>digital marketing</h3>
             <p>Marketing repurpose success tech sapien maximus design.</p>
             <span className="plus">+</span>
            </div>
             <div className="service-cards">
            <img src="/images/service3.png" alt="Web Development" />
                <h3>Web Development</h3>
            <p>Marketing repurpose success tech sapien maximus design.</p>
            <span className="orange-box" />
            </div>
         <div className="service-cards">
            <img src="/images/service4.png" alt="App Development" />
            <h3>App Development</h3>
            <p>Marketing repurpose success tech sapien maximus design.</p>
             <span className="plus">+</span>
            </div>
            </div>
       </section>

       <div className="why-choose-us">
  <div className="text-section">
    <p className="subtitle">why choose us</p>
    <h2 className="title">What&apos;s Make Us Different</h2>

    <div className="feature">
      <div className="line-arrow"></div>
      <div>
        <h3>Tailored Strategies</h3>
        <p>We customize every solution to give you unique business results, not just one-size-fits-all.</p>
      </div>
    </div>

    <div className="feature">
      <div className="line-arrow"></div>
      <div>
        <h3>Tech-Driven Innovation</h3>
        <p>We bring creativity and future-proof thinking to deliver powerful results.</p>
      </div>
    </div>

    <div className="feature">
      <div className="line-arrow"></div>
      <div>
        <h3>Transparent Partnership</h3>
        <p>We believe in clear communication and long-term client relationships built on trust.</p>
      </div>
    </div>
  </div>

  <div className="image-section">
    <img src="/images/grey-bg.png" alt="Background shape" className="bg-shape" />
    <img src="/images/women-laptop.png" alt="Woman with laptop" className="woman-img" />
  </div>
</div>
  {/* Services Grid */}
  <div className="services-grid">
    <div className="service-card">
      <img src="/images/service-1.png" alt="Web & App Development" />
      <p>Web & App Development</p>
    </div>
    <div className="service-card">
      <img src="/images/service-2.png" alt="Data Analytics & Business Intelligence" />
      <p>Data Analytics & Business Intelligence</p>
    </div>
    <div className="service-card">
      <img src="/images/service-3.png" alt="UI/UX Design" />
      <p>UI/UX Design</p>
    </div>
    <div className="service-card">
      <img src="/images/service-4.png" alt="E-commerce Development" />
      <p>E-commerce Development</p>
    </div>
    <div className="service-card">
      <img src="/images/service-5.png" alt="Cloud Solutions" />
      <p>Cloud Solutions</p>
    </div>
    <div className="service-card">
      <img src="/images/service-6.png" alt="Cybersecurity" />
      <p>Cybersecurity</p>
    </div>
  </div>
<section className="about-us">
      <img src="/images/Ellipse5.png" alt="lft-circle" className="about-circle left" />
      <img src="/images/Ellipse5.png" alt="lft-circle" className="about-circle right" />
      <div className="content">
        <h2>ABOUT US</h2>
        <p>
          With years of hands-on expertise, ONESOL transforms ambitious ideas into powerful digital realities.
          From strategic branding to advanced tech solutions, we help businesses conquer new <br />heights.
        </p>
        <p>
          At ONESOL, we believe in turning bold visions into impactful experiences. Our team of passionate creatives,
          strategists, and tech innovators work together to craft solutions that don’t just meet industry standards —
          they set new ones.
        </p>
        <br />
        <p>
          Whether it&apos;s designing a compelling brand identity, developing intuitive digital products, or implementing
          cutting-edge marketing strategies, we approach every project with a commitment to excellence and a focus on
          measurable results.< br/>
          We thrive on challenges and believe every brand has the potential to evolve beyond its limits. By combining
          creativity, technology, and data-driven insights, we empower businesses to connect deeply with their audiences
          and drive sustainable growth.< br />
          Join us on a journey where ideas break barriers, brands become unforgettable, and possibilities are truly
          infinite. Welcome to ONESOL — beyond infinity.
        </p>
      </div>
    </section>
    {/* next */}
    <section className="projects">
      <div className="projects-inner">
        <section className="project-section">
          <div className="subheading">Our Completed Projects</div>
          <h2 className="main-heading">
            Improve & Enhance Our Tech <br /> Projects
          </h2>
          <p className="description">
            There are many variations of passages of available text but majority have suffered alteration in some form, by humour or randomised words which don&apos;t look even slightly believable.
          </p>
        </section>

        {/* ── 4 thumbnail cards */}
        <div className="proj-cards">
          <figure className="proj-card">
            <img src="/images/project1.png" alt="Tech Solutions" />
            <figcaption>Tech Solutions</figcaption>
          </figure>

          <figure className="proj-card">
            <img src="/images/project2.png" alt="Smart Visions" />
            <figcaption>Smart Visions</figcaption>
          </figure>

          <figure className="proj-card">
            <img src="/images/project3.png" alt="Platform Integration" />
            <figcaption>Platform Integration</figcaption>
          </figure>

          <figure className="proj-card">
            <img src="/images/project4.png" alt="Web Development" />
            <figcaption>Web Development</figcaption>
          </figure>
        </div>
      </div>

      {/* ── brand strip */}
      <div className="brands-section">
       <h2 className="brands-heading">1k+ Brands Trust Us</h2>

       <div className="brands-bar">
         <div className="brand-logos">
           <img src="/images/image45.png" alt="Meta" />
           <img src="/images/image46.png" alt="Inc 5000" />
           <img src="/images/image47.png" alt="Amazon Partner" />
           <img src="/images/image48.png" alt="TikTok Partner" />
           <img src="/images/image49.png" alt="Google Partner" />
           <img src="/images/image50.png" alt="Snapchat" />
           <img src="/images/image51.png" alt="Facebook Partner" />
           <img src="/images/image52.png" alt="CNBC" />
           <img src="/images/image53.png" alt="CNBC" />
         </div>
       </div>
     </div>
      <div className='spacer'></div>
    </section>
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