import React from 'react';
import './Apropos.css';
import { FaAward, FaChartLine, FaHandshake, FaRocket } from 'react-icons/fa';
import l1 from "../components/assets/logo.png"
  
 const Apropos=()=>{
  const skills = [  
    { name: 'React.js', level: 60 },
    { name: 'React-native', level: 35 },
    { name: 'JavaScript', level: 60 },
    { name: 'html/css', level: 85 },
    { name: 'Node.js', level: 55 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'Figma', level: 70 },
    { name: 'photoshop', level: 45 }
  ];

  const experiences = [
    {
      year: '2026 - Présent',
      title: 'Développeur Full Stack',
      company: 'Agence Digital',
      description: 'Développement d\'applications web modernes avec React et Node.js'
    },
    {
      year: '2024 - 2025',
      title: 'Développeur Frontend',
      company: 'Studio Créatif',
      description: 'Création d\'interfaces utilisateur innovantes et responsives'
    },
    {
      year: '2022 - 2023',
      title: 'Designer Web',
      company: 'Freelance',
      description: 'Design et développement de sites web pour divers clients'
    }
  ];

  return (
    <>
         <div className="apropos">
      <section className="apropos-hero">
        <div className="apropos-hero-content">
          <h1 className="page-title">À propos de moi</h1>
          <p className="page-subtitle">
            Passionné par la création d'expériences digitales exceptionnelles
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="about-intro">
          <div className="intro-text">
            <h2>salut ! Je suis un développeur créatif</h2>
            <p>
              Avec plus de 2 ans et plus d'expérience dans le développement web et le design d'interfaces,
              je combine expertise technique et sensibilité artistique pour créer des solutions
              digitales qui ont un impact réel.
            </p>
            <p>
              Ma philosophie est simple : chaque projet est une opportunité de repousser les limites
              de ce qui est possible sur le web. Je m'engage à fournir des produits de qualité
              exceptionnelle qui dépassent les attentes.
            </p>
            <p>
              Lorsque je ne code pas, vous me trouverez en train d'explorer les dernières tendances
              en design, de contribuer à des projets open source, ou de partager mes connaissances
              avec la communauté des développeurs.
            </p>
          </div>
          
          <div className="intro-image">
            <div className="profile-placeholder">
              <div className="profile-icon">
                <img src={l1} alt="" loading='lazy'/>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h2 className="section-heading">Compétences</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{width: `${skill.level}%`}}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="experience-section">
          <h2 className="section-heading">Expérience professionnelle</h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{exp.year}</span>
                  <h3 className="timeline-title">{exp.title}</h3>
                  <p className="timeline-company">{exp.company}</p>
                  <p className="timeline-description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="values-section">
          <h2 className="section-heading">Mes valeurs</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <FaAward/>
              </div>
              <h3>Excellence</h3>
              <p>Je vise toujours la perfection dans chaque détail de mes projets</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <FaRocket/>
              </div>
              <h3>Innovation</h3>
              <p>J'explore constamment de nouvelles technologies et approches</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <FaHandshake/>
              </div>
              <h3>Collaboration</h3>
              <p>Je crois en la force du travail d'équipe et de la communication</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <FaChartLine/>
              </div>
              <h3>Performance</h3>
              <p>L'optimisation et la rapidité sont au cœur de mes développements</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default Apropos;
