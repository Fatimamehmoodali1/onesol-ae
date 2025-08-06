'use client';
import React, { useEffect } from 'react';
import '../styles/hero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);

  return (
    <section className="hero" data-aos="fade-down">
       {/* Decorative left triangle & circle */}
      <div className="hero-left-shapes">
        <Image src="/images/polygon-4.png" alt="Small Triangle" width={20} height={20} className="left-triangle" />
        <Image src="/images/Ellipse-9.png" alt="Small Circle" width={12} height={12} className="left-circle" />
      </div>

      {/* Main text content */}
      <div className="hero-bg-image"></div>
      <div className="hero-left">
        <h1>
          ELEVATING <br />
          <span>Your BRAND</span> <br />
          BEYOND LIMITS
        </h1>
        <p>
          We design, build, and grow digital <br />
          experiences that set you apart <br />
          in a global market.
        </p>
        <button className="hero-btn">Contact Us</button>
      </div>

      {/* Curve text */}
      <div className="curve-text">Onesol ' friend</div>

      {/* Decorative shapes */}
      <div className="hero-shapes">
        <Image src="/images/Polygon-5.png" alt="Triangle 1" className="triangle1" width={100} height={100} />
        <Image src="/images/Polygon-2.png" alt="Triangle 2" className="triangle2" width={100} height={100} />
        <Image src="/images/Ellipse-3.png" alt="Right Round" className="round-right" width={200} height={200} />
        <Image src="/images/Ellipse-2.png" alt="Left Round" className="round-left" width={120} height={120} />
        <Image src="/images/curve.png" alt="Curve Bottom" className="curve-bottom" width={2000} height={800} />
      </div>

      {/* Social Icons */}
      <div className="hero-icons">
        <a href="#"><Image src="/images/instagram.png" alt="Instagram" width={24} height={24} /></a>
        <a href="#"><Image src="/images/facebook.png" alt="Facebook" width={24} height={24} /></a>
        <a href="#"><Image src="/images/linkedin.png" alt="LinkedIn" width={24} height={24} /></a>
        <a href="#"><Image src="/images/twitter.png" alt="Twitter" width={24} height={24} /></a>
       </div>
      
      {/* Bottom right shapes */}
      <div className="hero-bottom-right-shapes">
        <Image src="/images/Ellipse-4.png" alt="Bottom Circle" width={30} height={30} className="bottom-circle" />
        <Image src="/images/rectangle-48.png" alt="Bottom rectangle" width={60} height={20} className="bottom-rect" />
      </div>

    </section>
  );
};

export default Hero;
