import React, { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import { FaIntercom, FaLocationCrosshairs } from 'react-icons/fa6';
import { FaMailBulk, FaPhoneAlt } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { language } = useLanguage();
  const isFrench = language === 'fr';
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const text = isFrench
    ? {
        title: 'Contactez-moi',
        subtitle: 'Une idée de projet ? Une question ? N’hésitez pas à me contacter.',
        infoTitle: 'Discutons de votre projet',
        infoDescription: 'Je suis toujours ouvert à de nouvelles opportunités et collaborations. Que vous ayez un projet en tête ou simplement envie d’échanger, je serai ravi de vous répondre.',
        phone: 'Téléphone',
        location: 'Localisation',
        social: 'Réseaux sociaux',
        available: 'Disponible pour de nouveaux projets',
        name: 'Nom complet',
        namePlaceholder: 'Votre nom',
        email: 'Email',
        emailPlaceholder: 'votre.email@exemple.com',
        subject: 'Sujet',
        subjectPlaceholder: 'Sujet de votre message',
        message: 'Message',
        messagePlaceholder: 'Décrivez votre projet ou votre demande...',
        sending: 'Envoi en cours...',
        send: 'Envoyer le message',
        success: 'Message envoyé avec succès ! Je vous répondrai dès que possible.',
        sendError: 'Envoi impossible. Veuillez réessayer plus tard.',
        faqTitle: 'Questions fréquentes',
        faq: [
          ['Quels sont vos tarifs ?', 'Les tarifs varient selon la complexité et la durée du projet. Contactez-moi pour obtenir un devis personnalisé et gratuit.'],
          ['Quel est le délai moyen d’un projet ?', 'Un projet simple peut prendre 2 à 4 semaines, tandis qu’un projet complexe peut nécessiter 2 à 3 mois. Tout dépend de vos besoins.'],
          ['Proposez-vous de la maintenance ?', 'Oui, je propose des contrats de maintenance et de support pour assurer le bon fonctionnement de votre site sur le long terme.'],
          ['Travaillez-vous avec des clients internationaux ?', 'Absolument ! Je travaille avec des clients du monde entier et je suis flexible concernant les fuseaux horaires.'],
        ],
      }
    : {
        title: 'Contact Me',
        subtitle: 'Have a project idea or a question? Feel free to get in touch.',
        infoTitle: 'Let’s discuss your project',
        infoDescription: 'I’m always open to new opportunities and collaborations. Whether you have a project in mind or simply want to connect, I’d be happy to hear from you.',
        phone: 'Phone',
        location: 'Location',
        social: 'Social Media',
        available: 'Available for new projects',
        name: 'Full name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your.email@example.com',
        subject: 'Subject',
        subjectPlaceholder: 'Subject of your message',
        message: 'Message',
        messagePlaceholder: 'Describe your project or request...',
        sending: 'Sending...',
        send: 'Send message',
        success: 'Message sent successfully! I’ll get back to you as soon as possible.',
        sendError: 'Unable to send your message. Please try again later.',
        faqTitle: 'Frequently Asked Questions',
        faq: [
          ['What are your rates?', 'Rates depend on the complexity and duration of the project. Contact me for a free, personalized quote.'],
          ['How long does a project usually take?', 'A simple project may take 2–4 weeks, while a complex one may take 2–3 months. It depends on your needs.'],
          ['Do you offer maintenance?', 'Yes, I offer maintenance and support plans to keep your website running smoothly over time.'],
          ['Do you work with international clients?', 'Absolutely! I work with clients worldwide and can be flexible across time zones.'],
        ],
      };

  const handleChange = (event) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setIsSent(false);

    try {
      await emailjs.send(
        'service_o3zxb2s',
        'template_hcm3l25',
        {
          from_name: formData.name,
          to_name: 'regis',
          from_email: formData.email,
          to_email: 'regisclaude8@gmail.com',
          subject: formData.subject,
          object: formData.subject,
          message: formData.message,
        },
        'YS6GfzBQAm4VbdQ-g'
      );

      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSent(true);
      toast.success(text.success);
    } catch (error) {
      console.error('EmailJS send error:', error);
      toast.error(text.sendError);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} />
      <div className="contact-page">
        <section className="contact-hero">
          <div className="contact-hero-content">
            <h1 className="page-title">{text.title}</h1>
            <p className="page-subtitle">{text.subtitle}</p>
          </div>
        </section>

        <section className="contact-content">
          <div className="contact-container">
            <div className="contact-grid">
              <div className="contact-info">
                <h2 className="info-title">{text.infoTitle}</h2>
                <p className="info-description">{text.infoDescription}</p>

                <div className="contact-details">
                  <div className="detail-item">
                    <div className="detail-icon"><FaMailBulk /></div>
                    <div className="detail-content">
                      <h3>Email</h3>
                      <a href="mailto:bukamyvan0@gmail.com">bukamyvan0@gmail.com</a>
                    </div>
                  </div>

                  <div className="detail-item">
                    <div className="detail-icon"><FaPhoneAlt /></div>
                    <div className="detail-content">
                      <h3>{text.phone}</h3>
                      <a href="tel:+237651847325">+237 651 847 325</a>
                    </div>
                  </div>

                  <div className="detail-item">
                    <div className="detail-icon"><FaLocationCrosshairs /></div>
                    <div className="detail-content">
                      <h3>{text.location}</h3>
                      <p>Douala, Cameroon</p>
                    </div>
                  </div>

                  <div className="detail-item">
                    <div className="detail-icon"><FaIntercom /></div>
                    <div className="detail-content">
                      <h3>{text.social}</h3>
                      <div className="social-links">
                        <a href="https://github.com/yvannDev" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://linkedin.com/in/yvan-wafo-067513304" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://wa.me/+237651847325" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                        <a href="https://www.facebook.com/profile.php?id=61584026971537" target="_blank" rel="noopener noreferrer">Facebook</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="availability">
                  <div className="availability-badge">
                    <span className="status-dot" />
                    <span>{text.available}</span>
                  </div>
                </div>
              </div>

              <div className="contact-form-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">{text.name}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={text.namePlaceholder}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">{text.email}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={text.emailPlaceholder}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">{text.subject}</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder={text.subjectPlaceholder}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">{text.message}</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder={text.messagePlaceholder}
                    />
                  </div>

                  <button type="submit" className="submit-btn" disabled={isSending}>
                    {isSending ? text.sending : text.send}
                  </button>

                  {isSent && (
                    <div className="form-message success" role="status">
                      ✓ {text.success}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="faq-container">
            <h2 className="section-heading">{text.faqTitle}</h2>
            <div className="faq-grid">
              {text.faq.map(([question, answer]) => (
                <div key={question} className="faq-item">
                  <h3>{question}</h3>
                  <p>{answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>  
  );
};

export default Contact;