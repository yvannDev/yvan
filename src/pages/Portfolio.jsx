import React, { useState } from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom';

// importation de ui/ux/design

import d1 from "../components/assets/d1.png"
import d2 from "../components/assets/d2.png"
import d3 from "../components/assets/d3.png"

// importation de  quelques projet web

import s1 from "../components/assets/s1.png"
import s2 from "../components/assets/s2.png"
import s3 from "../components/assets/s3.png"
//degine graphique
import { FaArrowCircleRight } from 'react-icons/fa';

function Portfolio() {  
  const [activeTab, setActiveTab] = useState('all');
    
  const webDesignProjects = [
    {
      title: 'Application Mobile Fitness',
      category: 'Web Design',
      description: 'Interface d\'application de suivi fitness',
      image: d1,
      link: 'https://www.figma.com/design/vbMPTnKLRTL0oHglzrS29w/Sans-titre?t=fRJzjvY8inII57ll-0',
      tags: ['Mobile', 'UI/UX', 'Fitness']
    },
    {
      title: 'application web pour restaurant',
      category: 'Web Design',
      description: 'Interface de visualisation de données',
      image: d2,
      link: 'https://www.figma.com/design/Nk0rPa1lPjiCOCldpQt0eU/Sans-titre?t=fRJzjvY8inII57ll-0',
      tags: ['complet', 'Data Viz', 'rest']
    },
    {
      title: 'Site Restaurant Gastronomique',
      category: 'Web Design',
      description: 'Design premium pour restaurant étoilé',
      image: d3,
      link: 'https://www.figma.com/design/AVcB6Ixgpe21uEKrzvFj9F/Sans-titre?node-id=0-1&p=f&t=fRJzjvY8inII57ll-0',
      tags: ['Restaurant', 'Luxe', 'Booking']
    }
  ];

  const webDevProjects = [
    {
      title: 'Application de viste medicale',
      category: 'developpement web',
      description: 'Application de viste medicale avec ordonance imprimable apres une consultation par nos meilleure medecins',
      image: s1,
      link: 'https://clack-ynsn.onrender.com',
      tags: ['react/jascript', 'css', 'nodejs/express']
    },
    {
      title: 'application de devis btp',
      category: 'developpement web',
      description: 'application web pour devis btp ',
      image: s2,
      link: 'https://oro-frontend.onrender.com',
      tags: ['react/typescript', 'tailwindcss', 'nodejs/express']
    },
    {
      title: 'reservation d\'hotel en ligne avec systeme de paiement',
      category: 'Web Development',
      description: 'Plateforme de blogging avec éditeur intégré',
      image: s3,
      link: 'https://github.com/yvannDev/bigproject/tree/online_hotel',
      tags: ['html', 'css', 'javascript']
    }
  ];

  const allProjects = [...webDesignProjects, ...webDevProjects];
  const getFilteredProjects = () => {
    if (activeTab === 'all') return allProjects;
    if (activeTab === 'design') return webDesignProjects;
    if (activeTab === 'dev') return webDevProjects;
    return allProjects;
  };

  const filteredProjects = getFilteredProjects();

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <div className="portfolio-hero-content">
          <h1 className="page-title">Mon Portfolio</h1>
          <p className="page-subtitle">
            Découvrez une sélection de mes projets récents en design et développement web
          </p>
        </div>
      </section>

      <section className="portfolio-content">
        <div className="portfolio-container">
          <div className="portfolio-filters">
            <button 
              className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              Tous les projets
            </button>
            <button 
              className={`filter-btn ${activeTab === 'design' ? 'active' : ''}`}
              onClick={() => setActiveTab('design')}
            >
              Web Design
            </button>
            <button 
              className={`filter-btn ${activeTab === 'dev' ? 'active' : ''}`}
              onClick={() => setActiveTab('dev')}
            >
              Web Development
            </button>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <div 
                    className="project-placeholder" 
                  >
                    <img src={project.image} alt="" loading='lazy' />
                    <div className="project-overlay">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        Voir le projet 
                        <FaArrowCircleRight/>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="project-info">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-cta">
        <div className="cta-content">
          <h2>Intéressé par une collaboration ?</h2>
          <p>N'hésitez pas à me contacter pour discuter de votre prochain projet.</p>
          <Link  to="/contact" className="btn btn-primary">
            Contactez-moi
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
