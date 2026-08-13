import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
  
const  Footer=()=> {
  const currentYear = new Date().getFullYear();

  return (
   <>
        <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Portfolio</h3>
            <p>Créativité et excellence dans chaque projet.</p>
          </div>
          
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/apropos">À propos</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Réseaux sociaux</h4>
            <div className="social-links">
              <a href="https://github.com/yvannDev" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/yvan-wafo-067513304" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://wa.me/+237651847325" target="_blank" rel="noopener noreferrer">whatsapp</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} yvan wafo. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
   </>
  );
}

export default Footer;
