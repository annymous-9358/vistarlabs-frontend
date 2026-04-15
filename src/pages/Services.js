import React from 'react';

const Services = () => {
  return (
    <div style={{ paddingTop: '70px', minHeight: '80vh', padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#2c3e50' }}>Our Services</h1>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '3rem' }}>
          Comprehensive web development and AI integration solutions
        </p>
        <div style={{ background: '#f8f9fa', padding: '3rem', borderRadius: '20px', marginTop: '2rem' }}>
          <h2 style={{ color: '#667eea', marginBottom: '1rem' }}>Coming Soon</h2>
          <p style={{ color: '#666' }}>Detailed services page with comprehensive offerings</p>
        </div>
      </div>
    </div>
  );
};

export default Services;