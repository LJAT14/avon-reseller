import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Heart, ShoppingBag, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import { getFeaturedProducts, getNewProducts, categories } from '../data/products';
import './Home.css';

const Home = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuredRef, featuredInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [categoriesRef, categoriesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [newRef, newInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const featuredProducts = getFeaturedProducts().slice(0, 6);
  const newProducts = getNewProducts().slice(0, 4);
  const mainCategories = categories.filter(c => c.id !== 'all').slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>
        
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="hero-badge">
                <Sparkles size={16} />
                Revendedora Oficial Avon
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Beleza que
              <span className="text-gradient"> Transforma</span>
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Descubra os melhores produtos Avon em Angola com Fatima Pegado.
              <br />
              Qualidade, beleza e confiança em cada produto.
            </motion.p>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Link to="/produtos" className="btn btn-primary">
                <ShoppingBag size={20} />
                Ver Produtos
              </Link>
              <Link to="/sobre" className="btn btn-secondary">
                Sobre Mim
              </Link>
            </motion.div>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="stat">
                <div className="stat-icon">
                  <Heart />
                </div>
                <div className="stat-content">
                  <h3>500+</h3>
                  <p>Clientes Satisfeitos</p>
                </div>
              </div>
              <div className="stat">
                <div className="stat-icon">
                  <Star />
                </div>
                <div className="stat-content">
                  <h3>100+</h3>
                  <p>Produtos Disponíveis</p>
                </div>
              </div>
              <div className="stat">
                <div className="stat-icon">
                  <Sparkles />
                </div>
                <div className="stat-content">
                  <h3>5 Anos</h3>
                  <p>De Experiência</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="hero-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800"
                alt="Avon Beauty Products"
              />
              <div className="hero-image-badge">
                <Sparkles size={24} />
                <span>Novidades</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section categories-section" ref={categoriesRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2>Explore por Categoria</h2>
            <p>Encontre exatamente o que procura</p>
          </motion.div>

          <motion.div
            className="grid grid-3"
            variants={containerVariants}
            initial="hidden"
            animate={categoriesInView ? "visible" : "hidden"}
          >
            {mainCategories.map((category, index) => (
              <motion.div key={category.id} variants={itemVariants}>
                <CategoryCard category={category} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section featured-section" ref={featuredRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={featuredInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2>Produtos em Destaque</h2>
            <p>Os nossos produtos mais populares</p>
          </motion.div>

          <motion.div
            className="grid grid-3"
            variants={containerVariants}
            initial="hidden"
            animate={featuredInView ? "visible" : "hidden"}
          >
            {featuredProducts.map((product, index) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} index={index} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="section-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={featuredInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link to="/produtos" className="btn btn-primary">
              Ver Todos os Produtos
            </Link>
          </motion.div>
        </div>
      </section>

      {/* New Products Section */}
      {newProducts.length > 0 && (
        <section className="section new-section" ref={newRef}>
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              animate={newInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="section-badge">Novidade</span>
              <h2>Acabados de Chegar</h2>
              <p>Descubra os produtos mais recentes</p>
            </motion.div>

            <motion.div
              className="grid grid-4"
              variants={containerVariants}
              initial="hidden"
              animate={newInView ? "visible" : "hidden"}
            >
              {newProducts.map((product, index) => (
                <motion.div key={product.id} variants={itemVariants}>
                  <ProductCard product={product} index={index} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Pronta para Realçar a Sua Beleza?</h2>
            <p>
              Entre em contacto comigo para encomendar os seus produtos favoritos Avon
            </p>
            <Link to="/contacto" className="btn btn-primary">
              Contactar Agora
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;