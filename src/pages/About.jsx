import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Star, Users } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Sobre Mim
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Fatima Pegado - Revendedora Oficial Avon
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600"
                alt="Fatima Pegado"
              />
            </motion.div>

            <motion.div
              className="about-content"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Olá! Sou a Fatima Pegado</h2>
              <p>
                Há mais de 5 anos, dedico-me a trazer os melhores produtos Avon para Angola,
                ajudando mulheres e homens a realçarem a sua beleza natural e a sentirem-se
                confiantes todos os dias.
              </p>
              <p>
                Como revendedora oficial Avon, tenho o privilégio de oferecer uma ampla gama de
                produtos de alta qualidade, desde maquilhagem e cuidados da pele até fragrâncias
                e produtos para o lar.
              </p>
              <p>
                A minha missão é proporcionar não apenas produtos excepcionais, mas também um
                atendimento personalizado e consultoria de beleza para cada cliente. Acredito que
                a beleza é para todos, e estou aqui para ajudá-lo a descobrir o que funciona melhor
                para você.
              </p>
            </motion.div>
          </div>

          <div className="values-grid">
            {[
              {
                icon: <Heart />,
                title: 'Paixão',
                description: 'Apaixonada por beleza e por ajudar os meus clientes a sentirem-se bem.'
              },
              {
                icon: <Star />,
                title: 'Qualidade',
                description: 'Apenas os melhores produtos Avon, garantidos e autênticos.'
              },
              {
                icon: <Users />,
                title: 'Atendimento',
                description: 'Atendimento personalizado e consultoria de beleza gratuita.'
              },
              {
                icon: <Award />,
                title: 'Experiência',
                description: 'Mais de 5 anos de experiência e centenas de clientes satisfeitos.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;