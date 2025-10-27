import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Fatima Pegado</h3>
            <p className="footer-description">
              Revendedora Oficial Avon em Angola. Trazendo beleza, qualidade e confiança para você.
            </p>
            <div className="social-links">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </motion.a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Links Rápidos</h4>
            <ul className="footer-links">
              <li><Link to="/">Início</Link></li>
              <li><Link to="/produtos">Produtos</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Categorias</h4>
            <ul className="footer-links">
              <li><Link to="/produtos?categoria=makeup">Maquilhagem</Link></li>
              <li><Link to="/produtos?categoria=skincare">Cuidados da Pele</Link></li>
              <li><Link to="/produtos?categoria=fragrance">Fragrâncias</Link></li>
              <li><Link to="/produtos?categoria=bodycare">Cuidados Corporais</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contacto</h4>
            <ul className="contact-info">
              <li>
                <MapPin size={16} />
                <span>Luanda, Angola</span>
              </li>
              <li>
                <Phone size={16} />
                <span>+244 923 456 789</span>
              </li>
              <li>
                <Mail size={16} />
                <span>fatima.pegado@avon.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Fatima Pegado - Avon Angola. Todos os direitos reservados.</p>
          <p className="footer-attribution">
            Desenvolvido com <span className="heart">❤️</span> por <a href="#" className="text-gradient">ClaudeDev</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;