import React, { useEffect, useState } from 'react';
import { api, handleApiError } from '../services/api';
import './Portfolio.css';

const Portfolio = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadPortfolio = async () => {
      try {
        const response = await api.get('/api/portfolio');
        setItems(response.data);
      } catch (err) {
        setError(handleApiError(err, 'Unable to load portfolio items right now.'));
      } finally {
        setLoading(false);
      }
    };

    loadPortfolio();
  }, []);

  return (
    <section className="portfolio-page">
      <div className="portfolio-shell">
        <header className="portfolio-header">
          <h1>Our Portfolio</h1>
          <p>Real projects delivered by Vistaar Labs across web, AI and product engineering.</p>
        </header>

        {loading && <div className="portfolio-state">Loading portfolio items...</div>}
        {error && <div className="portfolio-state error">{error}</div>}
        {!loading && !error && items.length === 0 && (
          <div className="portfolio-state empty">No portfolio items yet. Add one from the backend to see it here.</div>
        )}

        <div className="portfolio-grid">
          {items.map((item) => (
            <article className="portfolio-card" key={item._id}>
              <div className="portfolio-meta">
                <span className="portfolio-badge">{item.category}</span>
                {item.featured && <span className="portfolio-badge featured">Featured</span>}
              </div>

              <h2>{item.title}</h2>
              <p className="description">{item.shortDescription || item.description}</p>

              <div className="tech-list">
                {(item.technologies || []).slice(0, 6).map((tech) => (
                  <span className="tech-item" key={`${item._id}-${tech}`}>{tech}</span>
                ))}
              </div>

              <div className="card-links">
                {item.liveUrl && (
                  <a className="card-link" href={item.liveUrl} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                )}
                {item.githubUrl && (
                  <a className="card-link" href={item.githubUrl} target="_blank" rel="noreferrer">
                    Source Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;