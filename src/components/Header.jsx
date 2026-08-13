import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';   
import { FaBriefcase, FaHome, FaTools, FaUser } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa6';
import logo from "../components/assets/logo.png"

const Header=() =>{
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
       <>
             <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-text">
              <img src={logo} alt="" loading='lazy' style={{width:"40px"}}/>
          </span>
        </Link>

        <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaHome/>
                Accueil
          </Link>
          <Link 
            to="/apropos" 
            className={location.pathname === '/apropos' ? 'active' : ''}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaUser/>
            À propos
          </Link>
          <Link 
            to="/services" 
            className={location.pathname === '/services' ? 'active' : ''}
            onClick={() => setIsMobileMenuOpen(false)}
          >
           <FaTools/> Services
          </Link>
          <Link 
            to="/portfolio" 
            className={location.pathname === '/portfolio' ? 'active' : ''}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaBriefcase/>
            Portfolio
          </Link>
          <Link 
            to="/contact" 
            className={location.pathname === '/contact' ? 'active' : ''}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaEnvelope/>
            Contact
          </Link>
        </nav>

        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
       </>
  );
}

export default Header;
