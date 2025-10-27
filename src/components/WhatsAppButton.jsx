import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { whatsappNumber } from '../data/products';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent('Olá Fatima! Gostaria de saber mais sobre os produtos Avon. 🌸');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <motion.button
      className="whatsapp-button"
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Contactar via WhatsApp"
    >
      <MessageCircle size={28} />
      <motion.div
        className="whatsapp-pulse"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.7, 0, 0.7]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </motion.button>
  );
};

export default WhatsAppButton;