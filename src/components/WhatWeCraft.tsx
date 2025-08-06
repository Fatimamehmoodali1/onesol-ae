import React from 'react';
import '../styles/whatwecraft.css';

const WhatWeCraft: React.FC = () => {
  return (
    <section className="what-we-craft">
      {/* Section Header */}
      <div className="container section-header">
        <h2 className="section-title">
          <span className="primary-orange">WHAT WE</span>
          <br />
          <span className="text-white">CRAFT</span>
        </h2>
        <p className="section-subtitle">
          We don't just build websites. We create digital experiences that make your competitors question their existence.
        </p>
      </div>

      {/* Services Grid */}
      <div className="container service-grid">
        {/* Service Card 1 */}
        <div className="servic-card purple">
          <div className="servic-icon purple">
            <svg className="icon1-svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="service-title purple">Brand Identity</h3>
          <p className="service-description">
            Logos that haunt your dreams and color palettes that make you fall in love.
          </p>
          <div className="service-reveal">
            <ul className="servic-points purple">
              <li>• Logo Design & Brand Guidelines</li>
              <li>• Visual Identity Systems</li>
              <li>• Brand Strategy & Positioning</li>
            </ul>
          </div>
        </div>

        {/* Service Card 2 */}
        <div className="servic-card blue">
          <div className="servic-icon blue">
            <svg className="icon2-svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
          </div>
          <h3 className="service-title blue">Web Experiences</h3>
          <p className="service-description">
            Websites so smooth, your users will think they're on silk sheets.
          </p>
          <div className="service-reveal">
            <ul className="servic-points blue">
              <li>• Custom Web Development</li>
              <li>• Interactive Animations</li>
              <li>• Mobile-First Design</li>
            </ul>
          </div>
        </div>

        {/* Service Card 3 */}
        <div className="servic-card pink">
          <div className="servic-icon pink">
            <svg className="icon3-svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
          </div>
          <h3 className="service-title pink">Digital Growth</h3>
          <p className="service-description">
            Marketing strategies that turn scrollers into customers.
          </p>
          <div className="service-reveal">
            <ul className="servic-points pink">
              <li>• Social Media Strategy</li>
              <li>• SEO and Content Marketing</li>
              <li>• Performance Analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeCraft;
