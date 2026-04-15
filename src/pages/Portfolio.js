import React from 'react';

const Portfolio = () => {
  return (
    <div style={{ paddingTop: '70px', minHeight: '80vh', padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#2c3e50' }}>Our Portfolio</h1>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '3rem' }}>
          Showcasing our best work and successful projects
        </p>
        <div style={{ background: '#f8f9fa', padding: '3rem', borderRadius: '20px', marginTop: '2rem' }}>
          <h2 style={{ color: '#667eea', marginBottom: '1rem' }}>Portfolio Gallery</h2>
          <p style={{ color: '#666' }}>Dynamic portfolio showcase coming soon</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;