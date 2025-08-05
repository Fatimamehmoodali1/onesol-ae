'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/whychoosesection.css';

const WhyChooseSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false, // har scroll par dikhaye
      easing: 'ease-in-out',
    });
  }, []);

  const cards = [
    {
      image: '/images/choose-1.png',
      icon: '/images/icon-1.png',
      text: 'Perfect solutions that business demands',
      animation: 'fade-right', // 👈 Left se slide
    },
    {
      image: '/images/choose-2.png',
      icon: '/images/icon-2.png',
      text: 'We Provide Powerful Product Strategy',
      animation: 'fade-up', // 👈 Center se upar
    },
    {
      image: '/images/choose-3.jpeg',
      icon: '/images/icon-3.png',
      text: 'Help your business grow worldwide',
      animation: 'fade-left', // 👈 Right se slide
    },
  ];

  return (
    <section className="why-choose-section">
      <img src="/images/Ellipse 6.png" alt="Decor" className="circle-bg" />

      <div className="container">
        <p className="what-we-offer" data-aos="fade-down">What We OFFER</p>
        <h2 className="choose-heading" data-aos="fade-up">WHY YOU SHOULD CHOOSE US</h2>
        <p className="choose-description" data-aos="fade-up" data-aos-delay="200">
          At Onesol, we combine creativity, technology, and strategy to deliver impactful digital solutions
          that grow your business. We’re more than a service provider—we’re your reliable partner
          dedicated to your success.
        </p>

        <div className="why-cards">
          {cards.map((item, index) => (
            <div
              className="why-card"
              key={index}
              data-aos={item.animation}
              data-aos-delay={index * 150}
            >
              <div className="card-image">
                <img src={item.image} alt={`Service ${index + 1}`} />
              </div>
              <div className="icon-wrapper">
                <img src={item.icon} alt={`Icon ${index + 1}`} />
              </div>
              <p className="card-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;