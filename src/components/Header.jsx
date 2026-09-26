import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { FaBriefcase, FaHome, FaTools, FaUser } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa6';
import logo from '../components/assets/logo.png';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();
  const isFrench = language === 'fr';

  const labels = isFrench
    ? {
        home: 'Accueil',
        about: 'À propos',
        services: 'Services',
        portfolio: 'Portfolio',
        contact: 'Contact',
        switchLanguage: 'Passer en anglais',
        menu: 'Ouvrir le menu',
      }
    : {
        home: 'Home',
        about: 'About',
        services: 'Services',
        portfolio: 'Portfolio',
        contact: 'Contact',
        switchLanguage: 'Switch to French',
        menu: 'Open menu',
      };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMobileMenu} aria-label="Home">
          <span className="logo-text">
            <img src={logo} alt="Logo" loading="lazy" style={{ width: '40px' }} />
          </span>
        </Link>

        <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
            onClick={closeMobileMenu}
          >
            <FaHome /> {labels.home}
          </Link>

          <Link
            to="/apropos"
            className={location.pathname === '/apropos' ? 'active' : ''}
            onClick={closeMobileMenu}
          >
            <FaUser /> {labels.about}
          </Link>

          <Link
            to="/services"
            className={location.pathname === '/services' ? 'active' : ''}
            onClick={closeMobileMenu}
          >
            <FaTools /> {labels.services}
          </Link>

          <Link
            to="/portfolio"
            className={location.pathname === '/portfolio' ? 'active' : ''}
            onClick={closeMobileMenu}
          >
            <FaBriefcase /> {labels.portfolio}
          </Link>

          <Link
            to="/contact"
            className={location.pathname === '/contact' ? 'active' : ''}
            onClick={closeMobileMenu}
          >
            <FaEnvelope /> {labels.contact}
          </Link>

         <div className="language-selector">
  <label htmlFor="language-select">
  </label>
  <select
    id="language-select"
    className="language-select"
    value={language}
    onChange={(event) => {
      if (event.target.value !== language) {
        toggleLanguage();
      }
      closeMobileMenu();
    }}
    aria-label={isFrench ? 'Choisir la langue' : 'Choose language'}
  >
    <option value="en">🇬🇧 English</option>
    <option value="fr">🇫🇷 Français</option>
  </select>
</div>
        </nav>

        <button
          className="mobile-menu-btn"
          type="button"
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
          aria-label={labels.menu}
          aria-expanded={isMobileMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Header;