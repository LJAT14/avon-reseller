import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Heart, Share2 } from 'lucide-react';
import { getProductById, formatPrice, generateWhatsAppMessage, whatsappNumber } from '../data/products';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h2>Produto não encontrado</h2>
        <Link to="/produtos" className="btn btn-primary" style={{ marginTop: '2rem' }}>
          Ver Todos os Produtos
        </Link>
      </div>
    );
  }

  const handleWhatsAppOrder = () => {
    const message = generateWhatsAppMessage(product);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="product-detail-page">
      <div className="container">
        <Link to="/produtos" className="back-link">
          <ArrowLeft size={20} />
          Voltar aos Produtos
        </Link>

        <div className="product-detail-grid">
          <motion.div
            className="product-image-section"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="product-main-image">
              <img src={product.image} alt={product.name} />
            </div>
          </motion.div>

          <motion.div
            className="product-info-section"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="product-category-badge">{product.category}</div>
            <h1 className="product-title">{product.name}</h1>
            <p className="product-code">Código: {product.code}</p>

            <div className="product-price-section">
              <span className="product-price-large">{formatPrice(product.price)}</span>
              {product.volume && <span className="product-volume">{product.volume}</span>}
            </div>

            <p className="product-description-full">{product.description}</p>

            {product.features && product.features.length > 0 && (
              <div className="product-features">
                <h3>Características:</h3>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.shades && product.shades.length > 0 && (
              <div className="product-shades">
                <h3>Tons Disponíveis:</h3>
                <div className="shades-list">
                  {product.shades.map((shade, index) => (
                    <span key={index} className="shade-item">{shade}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="product-actions">
              <motion.button
                className="btn btn-whatsapp btn-large"
                onClick={handleWhatsAppOrder}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingCart size={20} />
                Encomendar via WhatsApp
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;