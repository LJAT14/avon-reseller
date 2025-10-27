import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { whatsappNumber } from '../data/products';
import './Contact.css';

const Contact = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá Fatima! Gostaria de saber mais sobre os produtos Avon. 🌸');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Entre em Contacto
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Estou aqui para ajudá-lo a encontrar os produtos perfeitos
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Vamos Conversar!</h2>
              <p className="contact-intro">
                Tem alguma dúvida sobre produtos, preços ou disponibilidade? Entre em contacto
                comigo! Estou sempre disponível para ajudar e fornecer consultoria personalizada.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-method-icon">
                    <MapPin />
                  </div>
                  <div className="contact-method-content">
                    <h4>Localização</h4>
                    <p>Luanda, Angola</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-method-icon">
                    <Phone />
                  </div>
                  <div className="contact-method-content">
                    <h4>Telefone</h4>
                    <p>+244 923 456 789</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-method-icon">
                    <Mail />
                  </div>
                  <div className="contact-method-content">
                    <h4>Email</h4>
                    <p>fatima.pegado@avon.com</p>
                  </div>
                </div>
              </div>

              <div className="social-section">
                <h4>Siga-me nas Redes Sociais</h4>
                <div className="social-links-large">
                  <motion.a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Instagram size={24} />
                    <span>Instagram</span>
                  </motion.a>
                  <motion.a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Facebook size={24} />
                    <span>Facebook</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="contact-cta"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="whatsapp-cta-card">
                <div className="whatsapp-icon-large">
                  <MessageCircle size={48} />
                </div>
                <h3>A Forma Mais Rápida de Contactar</h3>
                <p>
                  Envie-me uma mensagem no WhatsApp e receba resposta imediata!
                  Estou disponível para tirar dúvidas, fazer encomendas e fornecer consultoria.
                </p>
                <motion.button
                  className="btn btn-whatsapp btn-large"
                  onClick={handleWhatsAppClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle size={24} />
                  Contactar via WhatsApp
                </motion.button>
              </div>

              <div className="working-hours">
                <h4>Horário de Atendimento</h4>
                <ul>
                  <li>
                    <span>Segunda - Sexta:</span>
                    <strong>09:00 - 18:00</strong>
                  </li>
                  <li>
                    <span>Sábado:</span>
                    <strong>10:00 - 14:00</strong>
                  </li>
                  <li>
                    <span>Domingo:</span>
                    <strong>Fechado</strong>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;