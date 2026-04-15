import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Brain, Smartphone, Globe, Database, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const services = [
    {
      icon: <Globe size={40} />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, Node.js, and MongoDB."
    },
    {
      icon: <Brain size={40} />,
      title: "AI Integration",
      description: "Intelligent features powered by machine learning and artificial intelligence."
    },
    {
      icon: <Smartphone size={40} />,
      title: "Mobile Apps",
      description: "Cross-platform mobile applications for iOS and Android using React Native."
    },
    {
      icon: <Database size={40} />,
      title: "Database Solutions",
      description: "Scalable database design and optimization for high-performance applications."
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "3+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Transform Your Business with 
              <span className="gradient-text"> Vistaar Labs</span>
            </h1>
            <p className="hero-subtitle">
              We create cutting-edge web applications and integrate AI solutions 
              to expand your digital presence. From concept to deployment, 
              we deliver excellence in every project.
            </p>
            <div className="hero-cta">
              <Link to="/contact" className="cta-primary">
                Start Your Project <ArrowRight size={20} />
              </Link>
              <Link to="/portfolio" className="cta-secondary">
                View Our Work
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="floating-elements">
              <div className="element element-1"><Code size={24} /></div>
              <div className="element element-2"><Brain size={24} /></div>
              <div className="element element-3"><Zap size={24} /></div>
              <div className="element element-4"><Database size={24} /></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-preview">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Our Expertise</h2>
            <p>We specialize in building modern, scalable solutions that drive business growth</p>
          </motion.div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-item"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss how we can help transform your business with cutting-edge technology</p>
            <Link to="/contact" className="cta-button">
              Get Free Consultation <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;