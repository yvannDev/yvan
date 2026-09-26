import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import {
  FaArrowCircleRight,
  FaLaptop,
  FaMobileAlt,
  FaSearch,
  FaTools,
} from 'react-icons/fa';
import { FaPenClip, FaServer } from 'react-icons/fa6';
import { useLanguage } from '../context/LanguageContext';

function Services() {
  const { language } = useLanguage();
  const isFrench = language === 'fr';

  const services = isFrench
    ? [
        {
          icon: <FaLaptop />,
          title: 'Développement Web',
          description: 'Création de sites et d’applications web modernes, performants et responsifs.',
          features: ['Sites vitrine', 'E-commerce', 'Applications web (SPA)', 'Progressive Web Apps (PWA)'],
        },
        {
          icon: <FaPenClip />,
          title: 'Design UI/UX',
          description: 'Conception d’interfaces intuitives et d’expériences utilisateur optimisées.',
          features: ['Maquettes et wireframes', 'Prototypes interactifs', 'Design system', 'Tests utilisateurs'],
        },
        {
          icon: <FaMobileAlt />,
          title: 'Développement Mobile',
          description: 'Applications mobiles natives et hybrides pour iOS et Android.',
          features: ['React Native', 'Applications hybrides', 'Design responsive', 'Optimisation des performances'],
        },
        {
          icon: <FaSearch />,
          title: 'Optimisation et SEO',
          description: 'Amélioration des performances et du référencement naturel de votre site.',
          features: ['Optimisation de la vitesse', 'SEO technique', 'Core Web Vitals', 'Analytics et suivi'],
        },
        {
          icon: <FaServer />,
          title: 'Backend et API',
          description: 'Développement de solutions backend robustes et d’API RESTful.',
          features: ['Node.js / Express', 'API REST', 'Bases de données', 'Authentification'],
        },
        {
          icon: <FaTools />,
          title: 'Maintenance et Support',
          description: 'Support technique continu et maintenance de vos projets web.',
          features: ['Mises à jour régulières', 'Corrections de bugs', 'Support technique', 'Monitoring 24/7'],
        },
      ]
    : [
        {
          icon: <FaLaptop />,
          title: 'Web Development',
          description: 'Modern, high-performing and responsive websites and web applications.',
          features: ['Business websites', 'E-commerce', 'Web applications (SPA)', 'Progressive Web Apps (PWA)'],
        },
        {
          icon: <FaPenClip />,
          title: 'UI/UX Design',
          description: 'Intuitive interface design and optimized user experiences.',
          features: ['Wireframes and mockups', 'Interactive prototypes', 'Design systems', 'User testing'],
        },
        {
          icon: <FaMobileAlt />,
          title: 'Mobile Development',
          description: 'Native and hybrid mobile applications for iOS and Android.',
          features: ['React Native', 'Hybrid applications', 'Responsive design', 'Performance optimization'],
        },
        {
          icon: <FaSearch />,
          title: 'Optimization and SEO',
          description: 'Improving your website’s performance and organic search rankings.',
          features: ['Speed optimization', 'Technical SEO', 'Core Web Vitals', 'Analytics and tracking'],
        },
        {
          icon: <FaServer />,
          title: 'Backend and APIs',
          description: 'Robust backend solutions and RESTful API development.',
          features: ['Node.js / Express', 'REST APIs', 'Databases', 'Authentication'],
        },
        {
          icon: <FaTools />,
          title: 'Maintenance and Support',
          description: 'Ongoing technical support and maintenance for your web projects.',
          features: ['Regular updates', 'Bug fixes', 'Technical support', '24/7 monitoring'],
        },
      ];

  const process = isFrench
    ? [
        { step: '01', title: 'Découverte', description: 'Analyse de vos besoins et définition des objectifs du projet.' },
        { step: '02', title: 'Planification', description: 'Élaboration de la stratégie et du plan de développement.' },
        { step: '03', title: 'Design', description: 'Création des maquettes et validation du design.' },
        { step: '04', title: 'Développement', description: 'Codage et implémentation des fonctionnalités.' },
        { step: '05', title: 'Tests', description: 'Tests rigoureux et optimisation des performances.' },
        { step: '06', title: 'Lancement', description: 'Déploiement et mise en ligne du projet.' },
      ]
    : [
        { step: '01', title: 'Discovery', description: 'Understanding your needs and defining project goals.' },
        { step: '02', title: 'Planning', description: 'Developing the project strategy and development plan.' },
        { step: '03', title: 'Design', description: 'Creating mockups and reviewing the design.' },
        { step: '04', title: 'Development', description: 'Coding and implementing the required features.' },
        { step: '05', title: 'Testing', description: 'Thorough testing and performance optimization.' },
        { step: '06', title: 'Launch', description: 'Deploying and publishing the project.' },
      ];

  return (
    <div className="services">
      <section className="services-hero">
        <div className="services-hero-content">
          <h1 className="page-title">{isFrench ? 'Mes Services' : 'My Services'}</h1>
          <p className="page-subtitle">
            {isFrench
              ? 'Des solutions sur mesure pour transformer vos idées en réalité digitale'
              : 'Tailored solutions to turn your ideas into digital reality'}
          </p>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="services-container">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.title} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <span className="feature-bullet"><FaArrowCircleRight /></span>
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
          <h2 className="section-heading">
            {isFrench ? 'Mon processus de travail' : 'My Work Process'}
          </h2>
          <div className="process-grid">
            {process.map((item) => (
              <div key={item.step} className="process-card">
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
          <h2 className="section-heading">
            {isFrench ? 'Technologies et outils' : 'Technologies and Tools'}
          </h2>
          <div className="tech-categories">
            <div className="tech-category">
              <h3>Frontend</h3>
              <div className="tech-tags">
                {['React', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind CSS'].map((item) => (
                  <span key={item} className="tech-tag">{item}</span>
                ))}
              </div>
            </div>

            <div className="tech-category">
              <h3>Backend</h3>
              <div className="tech-tags">
                {['Node.js', 'Express', 'MySQL', 'PostgreSQL', 'REST API'].map((item) => (
                  <span key={item} className="tech-tag">{item}</span>
                ))}
              </div>
            </div>

            <div className="tech-category">
              <h3>{isFrench ? 'Outils' : 'Tools'}</h3>
              <div className="tech-tags">
                {['Docker', 'Git', 'AWS S3', 'MinIO', 'AI (LLM)', 'Render', 'Linux', 'VS Code'].map((item) => (
                  <span key={item} className="tech-tag">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>
            {isFrench ? 'Prêt à démarrer votre projet ?' : 'Ready to start your project?'}
          </h2>
          <p>
            {isFrench
              ? 'Contactez-moi pour discuter de vos besoins et obtenir un devis personnalisé.'
              : 'Get in touch to discuss your needs and receive a personalized quote.'}
          </p>
          <Link to="/contact" className="btn btn-primary">
            {isFrench ? 'Demander un devis' : 'Request a quote'}
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;