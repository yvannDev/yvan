import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { FaIntercom, FaLocationCrosshairs} from 'react-icons/fa6';
import { FaMailBulk, FaPhoneAlt } from 'react-icons/fa';


const Contact=()=> {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',  
    message: ''
  });
  const formRef = useRef()

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // emailjs 
    emailjs.send( "service_o3zxb2s","template_hcm3l25",{
       from_name: formData.name,
          to_name: "regis",
          from_email: formData.email,
          to_email: "regisclaude8@gmail.com",
          object: formData.object,
          message: formData.message,

    },
      "YS6GfzBQAm4VbdQ-g"
  )
  .then(()=>{
         toast.success("Envoi réussi ! ont vous répondrai dès que possible.");

         // Simulation d'envoi de formulaire
    setFormStatus('sending');
    
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setFormStatus('');
      }, 3000);
    }, 1500);
  },
  (error)=>{
         console.log(error);
          toast.error("Envoi impossible. Veuillez réessayer plutard.");
  }
)

   
  };

  return (
  <>
            <ToastContainer position="top-right" autoClose={5000} />
          <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="page-title">Contactez-moi</h1>
          <p className="page-subtitle">
            Une idée de projet ? Une question ? N'hésitez pas à me contacter
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="info-title">Discutons de votre projet</h2>
              <p className="info-description">
                Je suis toujours ouvert à de nouvelles opportunités et collaborations.
                Que vous ayez un projet en tête ou simplement envie d'échanger, 
                je serai ravi de vous répondre.
              </p>

              <div className="contact-details">
                <div className="detail-item">
                  <div className="detail-icon">
                    <FaMailBulk/>
                  </div>
                  <div className="detail-content">
                    <h3>Email</h3>
                    <a href="mailto:bukamyvan0@gmail.com">bukamyvan0@gmail.com</a>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="detail-icon">
                    <FaPhoneAlt/>
                  </div>
                  <div className="detail-content">
                    <h3>Téléphone</h3>
                    <a href="tel:+237651847325">+237651847325</a>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="detail-icon">
                    <FaLocationCrosshairs/>
                  </div>
                  <div className="detail-content">
                    <h3>Localisation</h3>
                    <p>Douala,cameroun (pour le moment)</p>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="detail-icon">
                    <FaIntercom/>
                  </div>
                  <div className="detail-content">  
                    <h3>Réseaux sociaux</h3>
                    <div className="social-links">
                      <a href=" https://github.com/yvannDev" target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                      <a href="https://linkedin.com/in/yvan-wafo-067513304" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                      </a>
                      <a href="https://wa.me/+237651847325" target="_blank" rel="noopener noreferrer">
                        whatsapp
                      </a>
                      <a href="https://www.facebook.com/profile.php?id=61584026971537" target="_blank" rel="noopener noreferrer">
                        facebook
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="availability">
                <div className="availability-badge">
                  <span className="status-dot"></span>
                  <span>Disponible pour de nouveaux projets</span>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Décrivez votre projet ou votre demande..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>

                {formStatus === 'success' && (
                  <div className="form-message success">
                    ✓ Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-container">
          <h2 className="section-heading">Questions fréquentes</h2>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Quels sont vos tarifs ?</h3>
              <p>
                Les tarifs varient selon la complexité et la durée du projet. 
                Contactez-moi pour obtenir un devis personnalisé et gratuit.
              </p>
            </div>

            <div className="faq-item">
              <h3>Quel est le délai moyen d'un projet ?</h3>
              <p>
                Un projet simple peut prendre 2-4 semaines, tandis qu'un projet 
                complexe peut nécessiter 2-3 mois. Cela dépend de vos besoins.
              </p>
            </div>

            <div className="faq-item">
              <h3>Proposez-vous de la maintenance ?</h3>
              <p>
                Oui, je propose des contrats de maintenance et de support pour 
                assurer le bon fonctionnement de votre site sur le long terme.
              </p>
            </div>

            <div className="faq-item">
              <h3>Travaillez-vous avec des clients internationaux ?</h3>
              <p>
                Absolument ! Je travaille avec des clients du monde entier et 
                je suis flexible concernant les fuseaux horaires.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
  );
}

export default Contact;
