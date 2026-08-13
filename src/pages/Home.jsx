import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import yvan from "../components/assets/yvan.png"
import { FaArrowCircleRight } from 'react-icons/fa';

function Home() {   
  const [isVisible, setIsVisible] = useState(false);
   
  useEffect(() => {  
    setIsVisible(true);  
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="hero-tag">wafo bukam yvan regis claude</div>
          <h1 className="hero-title">
            Créer des <span className="highlight">expériences</span>
            <br />
            digitales uniques
          </h1>
          <p className="hero-description">
            Je transforme vos idées en solutions web élégantes et performantes.
            Spécialisé en développement web moderne et design d'interfaces.
          </p>
          <div className="hero-cta">
            <Link to="/portfolio" className="btn btn-primary">
              Voir mes projets
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Me contacter
            </Link>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="floating-card card-1">
            <img src={yvan} alt="" srcset="" />

          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <h3 className="stat-number">20+</h3>
            <p className="stat-label">Projets réalisés</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">10+</h3>
            <p className="stat-label">Clients satisfaits</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">2+</h3>
            <p className="stat-label">Années d'expérience</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">100%</h3>
            <p className="stat-label">Engagement qualité</p>
          </div>
        </div>
      </section>

      <section className="featured-work">
        <div className="section-header">
          <h2 className="section-title">Projets en vedette voir tout</h2>
          <Link to="/portfolio" className="view-all"> 
             <FaArrowCircleRight  size={50}/>
          </Link>
        </div>
        
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Prêt à donner vie à votre projet ?</h2>
          <p>Discutons de vos besoins et créons quelque chose d'extraordinaire ensemble.</p>
          <Link to="/contact" className="btn btn-primary">
            Démarrer un projet
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
