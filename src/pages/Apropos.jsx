import React from 'react';
import './Apropos.css';
import { FaAward, FaChartLine, FaHandshake, FaRocket } from 'react-icons/fa';
import l1 from '../components/assets/logo.png';
import { useLanguage } from '../context/LanguageContext';

const Apropos = () => {
  const { language } = useLanguage();
  const isFrench = language === 'fr';

  const experiences = isFrench
    ? [
        {
          year: '2026 - Présent',
          title: 'Développeur Full Stack',
          company: 'Agence Digital',
          description: 'Développement d’applications web modernes avec React et Node.js',
        },
        {
          year: '2024 - 2025',
          title: 'Développeur Frontend',
          company: 'Studio Créatif',
          description: 'Création d’interfaces utilisateur innovantes et responsives',
        },
        {
          year: '2022 - 2023',
          title: 'Designer Web',
          company: 'Freelance',
          description: 'Design et développement de sites web pour divers clients',
        },
      ]
    : [
        {
          year: '2026 - Present',
          title: 'Full-Stack Developer',
          company: 'Digital Agency',
          description: 'Building modern web applications with React and Node.js',
        },
        {
          year: '2024 - 2025',
          title: 'Frontend Developer',
          company: 'Creative Studio',
          description: 'Creating innovative, responsive user interfaces',
        },
        {
          year: '2022 - 2023',
          title: 'Web Designer',
          company: 'Freelance',
          description: 'Designing and developing websites for a range of clients',
        },
      ];

  const values = isFrench
    ? [
        {
          icon: <FaAward />,
          title: 'Excellence',
          description: 'Je vise toujours la qualité dans chaque détail de mes projets.',
        },
        {
          icon: <FaRocket />,
          title: 'Innovation',
          description: 'J’explore constamment de nouvelles technologies et approches.',
        },
        {
          icon: <FaHandshake />,
          title: 'Collaboration',
          description: 'Je crois en la force du travail d’équipe et de la communication.',
        },
        {
          icon: <FaChartLine />,
          title: 'Performance',
          description: 'L’optimisation et la rapidité sont au cœur de mes développements.',
        },
      ]
    : [
        {
          icon: <FaAward />,
          title: 'Excellence',
          description: 'I strive for quality in every detail of my projects.',
        },
        {
          icon: <FaRocket />,
          title: 'Innovation',
          description: 'I continually explore new technologies and approaches.',
        },
        {
          icon: <FaHandshake />,
          title: 'Collaboration',
          description: 'I believe in teamwork and clear communication.',
        },
        {
          icon: <FaChartLine />,
          title: 'Performance',
          description: 'Optimization and speed are at the heart of my development work.',
        },
      ];

  const skills = [
    { name: 'React.js', level: 60 },
    { name: 'React Native', level: 35 },
    { name: 'JavaScript / TypeScript', level: 60 },
    { name: 'HTML / CSS', level: 85 },
    { name: 'Node.js', level: 55 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'Figma', level: 70 },
    { name: 'Photoshop', level: 45 },
  ];

  return (
    <div className="apropos">
      <section className="apropos-hero">
        <div className="apropos-hero-content">
          <h1 className="page-title">
            {isFrench ? 'À propos de moi' : 'About Me'}
          </h1>
          <p className="page-subtitle">
            {isFrench
              ? 'Passionné par la création d’expériences digitales exceptionnelles'
              : 'Passionate about creating exceptional digital experiences'}
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="about-intro">
          <div className="intro-text">
            <h2>
              {isFrench
                ? 'Salut ! Je suis un développeur créatif'
                : "Hi! I'm a creative developer"}
            </h2>
            <p>
              {isFrench
                ? 'Avec plus de 2 ans d’expérience dans le développement web et le design d’interfaces, je combine expertise technique et sensibilité artistique pour créer des solutions digitales qui ont un impact réel.'
                : 'With over 2 years of experience in web development and interface design, I combine technical expertise with an artistic eye to create digital solutions that make a real impact.'}
            </p>
            <p>
              {isFrench
                ? 'Ma philosophie est simple : chaque projet est une occasion de repousser les limites du web. Je m’engage à créer des produits de qualité qui dépassent les attentes.'
                : 'My philosophy is simple: every project is an opportunity to push the boundaries of the web. I am committed to building high-quality products that exceed expectations.'}
            </p>
            <p>
              {isFrench
                ? 'Quand je ne code pas, j’explore les dernières tendances du design, contribue à des projets open source ou partage mes connaissances avec la communauté des développeurs.'
                : 'When I’m not coding, I explore the latest design trends, contribute to open-source projects, or share my knowledge with the developer community.'}
            </p>
          </div>

          <div className="intro-image">
            <div className="profile-placeholder">
              <div className="profile-icon">
                <img
                  src={l1}
                  alt={isFrench ? 'Logo personnel' : 'Personal logo'}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h2 className="section-heading">
            {isFrench ? 'Compétences' : 'Skills'}
          </h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="experience-section">
          <h2 className="section-heading">
            {isFrench ? 'Expérience professionnelle' : 'Work Experience'}
          </h2>
          <div className="timeline">
            {experiences.map((experience) => (
              <div key={experience.year} className="timeline-item">
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <span className="timeline-year">{experience.year}</span>
                  <h3 className="timeline-title">{experience.title}</h3>
                  <p className="timeline-company">{experience.company}</p>
                  <p className="timeline-description">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="values-section">
          <h2 className="section-heading">
            {isFrench ? 'Mes valeurs' : 'My Values'}
          </h2>
          <div className="values-grid">
            {values.map((value) => (
              <div key={value.title} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apropos;