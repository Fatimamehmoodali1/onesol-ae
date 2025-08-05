import React from 'react';
import '../styles/techexpert.css';

const TechExpert = () => {
  return (
    <div className="hero-gradient">
      <section className="tech-section">
        {/* Grid Background */}
        <div className="tech-bg-overlay"></div>

        {/* Optional Particles */}
        <div className="tech-particles"></div>

        {/* Main Content */}
        <div className="tech-content-wrapper">
          {/* Left Side */}
          <div className="tech-left">
            <p className="tech-subtitle">Empower Your Digital Growth</p>
            <h2 className="tech-title">
              Our <span className="highlight">OneSol’s 200+ Tech Experts</span><br />
              Are Ready to Elevate Your Vision!
            </h2>
          </div>

          {/* Right Side */}
          <div className="tech-right">
            <p className="tech-description">
              <b>Client satisfaction is at the heart of everything we do at OneSol.</b>
              Our commitment to consistency, dedication to excellence, and drive for continuous innovation
              have helped us earn the trust of countless clients over the past decade.
            </p>
            <p className="tech-description">
              Partner with OneSol’s expert web designers and developers in Dubai to create highly responsive,
              scalable, and future-ready web applications — crafted with precision and finesse.
            </p>
            <a href="#start-project" className="tech-button">
              Start A Project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechExpert;
