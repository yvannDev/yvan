import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import {  FaArrowCircleRight, FaLaptop, FaMobileAlt, FaSearch, FaTools } from 'react-icons/fa';
import { FaPenClip, FaServer } from 'react-icons/fa6';
  
function Services() {
  const services = [
    {
      icon: <FaLaptop/>,
      title: 'Développement Web',    
      description: 'Création de sites web et applications web modernes, performants et responsives.',
      features: [
        'Sites vitrine',
        'E-commerce',
        'Applications web (SPA)',
        'Progressive Web Apps (PWA)'
      ]
    },
    {
      icon: <FaPenClip/>,
      title: 'UI/UX Design',
      description: 'Conception d\'interfaces utilisateur intuitives et design d\'expérience utilisateur optimisée.',
      features: [
        'Maquettes wireframes',
        'Prototypes interactifs',
        'Design system',
        'Tests utilisateurs'
      ]
    },
    {
      icon: <FaMobileAlt/>,
      title: 'Développement Mobile',
      description: 'Applications mobiles natives et hybrides pour iOS et Android.',
      features: [
        'React Native',
        'Applications hybrides',
        'Design responsive',
        'Optimisation performances'
      ]
    },
    {
      icon: <FaSearch/>,
      title: 'Optimisation & SEO',
      description: 'Amélioration des performances et du référencement naturel de votre site.',
      features: [
        'Optimisation vitesse',
        'SEO technique',
        'Core Web Vitals',
        'Analytics et suivi'
      ]
    },
    {
      icon: <FaServer/>,
      title: 'Backend & API',
      description: 'Développement de solutions backend robustes et APIs RESTful.',
      features: [
        'Node.js / Express',
        'APIs REST',
        'Bases de données',
        'Authentification'
      ]
    },
    {
      icon: <FaTools/>,
      title: 'Maintenance & Support',
      description: 'Support technique continu et maintenance de vos projets web.',
      features: [
        'Mises à jour régulières',
        'Corrections de bugs',
        'Support technique',
        'Monitoring 24/7'
      ]
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Découverte',
      description: 'Analyse de vos besoins et définition des objectifs du projet'
    },
    {
      step: '02',
      title: 'Planification',
      description: 'Élaboration de la stratégie et du plan de développement'
    },
    {
      step: '03',
      title: 'Design',
      description: 'Création des maquettes et validation du design'
    },
    {
      step: '04',
      title: 'Développement',
      description: 'Codage et implémentation des fonctionnalités'
    },
    {
      step: '05',
      title: 'Tests',
      description: 'Tests rigoureux et optimisation des performances'
    },
    {
      step: '06',
      title: 'Lancement',
      description: 'Déploiement et mise en ligne du projet'
    }
  ];

  return (
    <div className="services">
      <section className="services-hero">
        <div className="services-hero-content">
          <h1 className="page-title">Mes Services</h1>
          <p className="page-subtitle">
            Des solutions sur mesure pour transformer vos idées en réalité digitale
          </p>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="services-container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="feature-bullet">
                        <FaArrowCircleRight/>  
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="process-container">
          <h2 className="section-heading">Mon processus de travail</h2>
          <div className="process-grid">
            {process.map((item, index) => (
              <div key={index} className="process-card">
                <div className="process-step">{item.step}</div>
                <h3 className="process-title">{item.title}</h3>
                <p className="process-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="technologies-section">
        <div className="technologies-container">
          <h2 className="section-heading">Technologies & Outils</h2>
          <div className="tech-categories">
            <div className="tech-category">
              <h3>Frontend</h3>
              <div className="tech-tags">
                <span className="tech-tag">React</span>
                <span className="tech-tag">html</span>
                <span className="tech-tag">css</span>
                <span className="tech-tag">javaScript</span>
                <span className="tech-tag">typeScript</span>
                <span className="tech-tag">Tailwind CSS</span>
              </div>
            </div>
            
            <div className="tech-category">
              <h3>Backend</h3>
              <div className="tech-tags">
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Express</span>
                <span className="tech-tag">mySQL</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">REST API</span>
              </div>
            </div>
            
            <div className="tech-category">
              <h3>Outils</h3>
              <div className="tech-tags">
                <span className="tech-tag">Docker</span>
                <span className="tech-tag">Git</span>
                <span className="tech-tag">AWS S3</span>
                <span className="tech-tag">minio</span>
                <span className="tech-tag">IA(LLM)</span>
                <span className="tech-tag">render</span>
                <span className="tech-tag">linux</span>
                <span className="tech-tag">VS Code</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Prêt à démarrer votre projet ?</h2>
          <p>Contactez-moi pour discuter de vos besoins et obtenir un devis personnalisé.</p>
          <Link to="/contact" className="btn btn-primary">
            Demander un devis
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;
