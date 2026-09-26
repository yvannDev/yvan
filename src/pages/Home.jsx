import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import yvan from '../components/assets/yvan.png';
import { FaArrowCircleRight } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();
  const isFrench = language === 'fr';

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="hero-tag">Wafo Bukam Yvan Regis Claude</div>
          <h1 className="hero-title">
            {isFrench ? (
              <>
                Créer des <span className="highlight">expériences</span>
                <br />
                digitales uniques
              </>
            ) : (
              <>
                Creating unique
                <br />
                digital <span className="highlight">experiences</span>
              </>
            )}
          </h1>
          <p className="hero-description">
            {isFrench
              ? 'Je transforme vos idées en solutions web élégantes et performantes. Spécialisé en développement web moderne et en design d’interfaces.'
              : 'I turn your ideas into elegant, high-performing web solutions. Specializing in modern web development and interface design.'}
          </p>
          <div className="hero-cta">
            <Link to="/portfolio" className="btn btn-primary">
              {isFrench ? 'Voir mes projets' : 'View my work'}
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              {isFrench ? 'Me contacter' : 'Get in touch'}
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-card card-1">
            <img src={yvan} alt="Yvan Wafo" />
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <h3 className="stat-number">20+</h3>
            <p className="stat-label">{isFrench ? 'Projets réalisés' : 'Projects completed'}</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">10+</h3>
            <p className="stat-label">{isFrench ? 'Clients satisfaits' : 'Happy clients'}</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">2+</h3>
            <p className="stat-label">{isFrench ? 'Années d’expérience' : 'Years of experience'}</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">100%</h3>
            <p className="stat-label">{isFrench ? 'Engagement qualité' : 'Commitment to quality'}</p>
          </div>
        </div>
      </section>

      <section className="featured-work">
        <div className="section-header">
          <h2 className="section-title">
            {isFrench ? 'Projets en vedette' : 'Featured Projects'}
          </h2>
          <Link
            to="/portfolio"
            className="view-all"
            aria-label={isFrench ? 'Voir tous les projets' : 'View all projects'}
          >
            <FaArrowCircleRight size={50} />
          </Link>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>
            {isFrench
              ? 'Prêt à donner vie à votre projet ?'
              : 'Ready to bring your project to life?'}
          </h2>
          <p>
            {isFrench
              ? 'Discutons de vos besoins et créons quelque chose d’extraordinaire ensemble.'
              : 'Let’s discuss your needs and create something exceptional together.'}
          </p>
          <Link to="/contact" className="btn btn-primary">
            {isFrench ? 'Démarrer un projet' : 'Start a project'}
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;