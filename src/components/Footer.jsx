import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const isFrench = language === 'fr';

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Portfolio</h3>
            <p>
              {isFrench
                ? 'Créativité et excellence dans chaque projet.'
                : 'Creativity and excellence in every project.'}
            </p>
          </div>

          <div className="footer-section">
            <h4>{isFrench ? 'Navigation' : 'Navigation'}</h4>
            <ul>
              <li><Link to="/">{isFrench ? 'Accueil' : 'Home'}</Link></li>
              <li><Link to="/apropos">{isFrench ? 'À propos' : 'About'}</Link></li>
              <li><Link to="/services">{isFrench ? 'Services' : 'Services'}</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">{isFrench ? 'Contact' : 'Contact'}</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{isFrench ? 'Réseaux sociaux' : 'Social Media'}</h4>
            <div className="social-links">
              <a href="https://github.com/yvannDev" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/yvan-wafo-067513304" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://wa.me/+237651847325" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Yvan Wafo.{' '}
            {isFrench ? 'Tous droits réservés.' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;