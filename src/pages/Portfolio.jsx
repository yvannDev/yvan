import React, { useState } from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

import d1 from '../components/assets/d1.png';
import d2 from '../components/assets/d2.png';
import d3 from '../components/assets/d3.png';
import s1 from '../components/assets/s1.png';
import s2 from '../components/assets/s2.png';
import s3 from '../components/assets/s3.png';

function Portfolio() {
  const [activeTab, setActiveTab] = useState('all');
  const { language } = useLanguage();
  const isFrench = language === 'fr';

  const designProjects = [
    {
      title: isFrench ? 'Application mobile de fitness' : 'Fitness Mobile App',
      category: 'Web Design',
      description: isFrench ? 'Interface d’application de suivi fitness' : 'Fitness tracking app interface',
      image: d1,
      link: 'https://www.figma.com/design/vbMPTnKLRTL0oHglzrS29w/Sans-titre?t=fRJzjvY8inII57ll-0',
      tags: ['Mobile', 'UI/UX', 'Fitness'],
    },
    {
      title: isFrench ? 'Application web pour restaurant' : 'Restaurant Web App',
      category: 'Web Design',
      description: isFrench ? 'Interface de visualisation de données' : 'Data visualization interface',
      image: d2,
      link: 'https://www.figma.com/design/Nk0rPa1lPjiCOCldpQt0eU/Sans-titre?t=fRJzjvY8inII57ll-0',
      tags: isFrench ? ['Complet', 'Data Viz', 'Restaurant'] : ['Full service', 'Data Viz', 'Restaurant'],
    },
    {
      title: isFrench ? 'Site de restaurant gastronomique' : 'Fine Dining Restaurant Website',
      category: 'Web Design',
      description: isFrench ? 'Design premium pour restaurant gastronomique' : 'Premium design for a fine dining restaurant',
      image: d3,
      link: 'https://www.figma.com/design/AVcB6Ixgpe21uEKrzvFj9F/Sans-titre?node-id=0-1&p=f&t=fRJzjvY8inII57ll-0',
      tags: isFrench ? ['Restaurant', 'Luxe', 'Réservation'] : ['Restaurant', 'Luxury', 'Booking'],
    },
  ];

  const developmentProjects = [
    {
      title: isFrench ? 'Application de visite médicale' : 'Medical Visit App',
      category: isFrench ? 'Développement web' : 'Web Development',
      description: isFrench
        ? 'Application de visite médicale avec ordonnance imprimable après une consultation.'
        : 'Medical visit application with printable prescriptions after a consultation.',
      image: s1,
      link: 'https://clack-ynsn.onrender.com',
      tags: ['React/JavaScript', 'CSS', 'Node.js/Express'],
    },
    {
      title: isFrench ? 'Application de devis BTP' : 'Construction Quote App',
      category: isFrench ? 'Développement web' : 'Web Development',
      description: isFrench
        ? 'Application web de création de devis pour le secteur du bâtiment.'
        : 'Web application for creating construction quotes.',
      image: s2,
      link: 'https://oro-frontend.onrender.com',
      tags: ['React/TypeScript', 'Tailwind CSS', 'Node.js/Express'],
    },
    {
      title: isFrench ? 'Réservation d’hôtel avec paiement en ligne' : 'Hotel Booking with Online Payments',
      category: isFrench ? 'Développement web' : 'Web Development',
      description: isFrench
        ? 'Plateforme de réservation d’hôtel avec système de paiement.'
        : 'Hotel booking platform with an online payment system.',
      image: s3,
      link: 'https://github.com/yvannDev/bigproject/tree/online_hotel',
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
  ];

  const projects =
    activeTab === 'design'
      ? designProjects
      : activeTab === 'dev'
        ? developmentProjects
        : [...designProjects, ...developmentProjects];

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <div className="portfolio-hero-content">
          <h1 className="page-title">{isFrench ? 'Mon Portfolio' : 'My Portfolio'}</h1>
          <p className="page-subtitle">
            {isFrench
              ? 'Découvrez une sélection de mes projets récents en design et développement web'
              : 'Explore a selection of my recent web design and development projects'}
          </p>
        </div>
      </section>

      <section className="portfolio-content">
        <div className="portfolio-container">
          <div className="portfolio-filters">
            {[
              { id: 'all', label: isFrench ? 'Tous les projets' : 'All Projects' },
              { id: 'design', label: 'Web Design' },
              { id: 'dev', label: isFrench ? 'Développement web' : 'Web Development' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`filter-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-image">
                  <div className="project-placeholder">
                    <img src={project.image} alt={project.title} loading="lazy" />
                    <div className="project-overlay">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        {isFrench ? 'Voir le projet' : 'View project'} <FaArrowCircleRight />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-info">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-cta">
        <div className="cta-content">
          <h2>
            {isFrench ? 'Intéressé par une collaboration ?' : 'Interested in working together?'}
          </h2>
          <p>
            {isFrench
              ? 'Contactez-moi pour discuter de votre prochain projet.'
              : 'Get in touch to discuss your next project.'}
          </p>
          <Link to="/contact" className="btn btn-primary">
            {isFrench ? 'Contactez-moi' : 'Contact me'}
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;