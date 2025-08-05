'use client';

import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <section className="about-us">
      <img src="/images/Ellipse5.png" alt="left-circle" className="about-circle left" />
      <img src="/images/Ellipse5.png" alt="right-circle" className="about-circle right" />
      <div className="content">
        <h2>ABOUT US</h2>
        <p>
          With years of hands-on expertise, ONESOL transforms ambitious ideas into powerful digital realities.
          From strategic branding to advanced tech solutions, we help businesses conquer new heights.
        </p>
        <p>
          At ONESOL, we believe in turning bold visions into impactful experiences. Our team of passionate creatives,
          strategists, and tech innovators work together to craft solutions that don’t just meet industry standards —
          they set new ones.
        </p>
        <p>
          Whether it's designing a compelling brand identity, developing intuitive digital products, or implementing
          cutting-edge marketing strategies, we approach every project with a commitment to excellence and a focus on
          measurable results.< br />
          We thrive on challenges and believe every brand has the potential to evolve beyond its limits. By combining
          creativity, technology, and data-driven insights, we empower businesses to connect deeply with their audiences
          and drive sustainable growth.< br/>
          Join us on a journey where ideas break barriers, brands become unforgettable, and possibilities are truly
          infinite. Welcome to ONESOL — beyond infinity.
        </p>
      </div>
    </section>
  );
};

export default About;