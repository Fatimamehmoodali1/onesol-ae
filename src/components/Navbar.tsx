'use client';
 
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import '../styles/navbar.css';

export default function Navbar() {
   const [menuOpen, setMenuOpen] = useState(false);
   const pathname = usePathname();
   
return ( 
 <nav className="navbar-wrapper">
   <img src="/images/logo.png" alt="Logo" className="logo" />
   <div className="navbar-rounded">
      <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="/ourwork" onClick={() => setMenuOpen(false)}>Our Work</a>
        <a href="/services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="/blog" onClick={() => setMenuOpen(false)}>Blog</a>
        <button className="expert-button" onClick={() => setMenuOpen(false)}>Speak to an Expert</button>
      </div>

      <div
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
       <span className="bar"></span>
       <span className="bar"></span>
       <span className="bar"></span>
      </div>
    </div>
  </nav>

); }
