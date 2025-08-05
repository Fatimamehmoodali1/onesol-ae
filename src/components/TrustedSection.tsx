'use client';
import React from 'react';
import '../styles/trustedsection.css';

export default function TrustedSection() {
  return (
    <>
      {/* Trusted by Brands Section */}
      <section className="trusted-section" data-aos="fade-up">
        <div className="background-image"></div>
        <div className="orange-overlay"></div>
        <div className="trusted-content">
          <h2>🤝 Trusted by Global <br /> & Local Brands</h2>
          <p>
            ONESOL is trusted by forward-thinking companies <br />
            across UAE, Pakistan, and beyond to create impact <br />
            at every touchpoint.
          </p>
          <div className="trusted-buttons">
            <button>Bold brands</button>
            <button>Creative agencies</button>
            <button>Enterprises</button>
          </div>
        </div>
      </section>

      {/* Services Choose Section */}
      <section className="services-choose-section" data-aos="fade-up">
        <div className="orange-bg-wrapper"></div>
        <div className="container">
          <div className="cards-container">
            <div className="service-card" data-aos="zoom-in" data-aos-delay="100">
              <img src="/images/feature-1.jpeg" alt="UI/UX Icon" />
              <p>UI/UX Design Service</p>
            </div>
            <div className="service-card" data-aos="zoom-in" data-aos-delay="200">
              <img src="/images/feature-2.png" alt="Business Icon" />
              <p>Business Consultation</p>
            </div>
            <div className="service-card" data-aos="zoom-in" data-aos-delay="300">
              <img src="/images/feature-3.png" alt="Website Icon" />
              <p>Website Development</p>
            </div>
            <div className="service-card" data-aos="zoom-in" data-aos-delay="400">
              <img src="/images/feature-4.png" alt="Support Icon" />
              <p>Support Management</p>
            </div>
            <div className="service-card" data-aos="zoom-in" data-aos-delay="500">
              <img src="/images/feature-5.png" alt="Marketing Icon" />
              <p>Market Research</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}