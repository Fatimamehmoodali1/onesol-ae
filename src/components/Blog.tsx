'use client';
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/blog.css';

const Blog = () => {
  const blogCards = [
    { img: '/images/blog1.png', title: 'Digital Pulse' },
    { img: '/images/blog2.png', title: 'Innovation Journal' },
    { img: '/images/blog3.png', title: 'ONESOL Insights' },
  ];

  return (
    <section className="blog-section">
      <div className="container">
        <motion.p
          className="blog-subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          NEWS AND ARTICLES
        </motion.p>

        <motion.h2
          className="blog-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          OUR LATEST BLOG POSTS
        </motion.h2>

        <motion.p
          className="blog-description"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Stay updated with the latest trends, insights, and success stories from the world of digital innovation.
          Explore how ONESOL is shaping the future with technology, creative strategies, and impactful solutions.
        </motion.p>

        <div className="blog-cards">
          {blogCards.map((card, index) => (
            <motion.div
              key={index}
              className="blog-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2 * index,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
            >
              <img src={card.img} alt={card.title} />
              <div className="blog-card-title">{card.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;