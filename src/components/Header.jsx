import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../CartContext';
import './Header.jsx';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Início' },
    { path: '/produtos', label: 'Produtos' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/contacto', label: 'Contacto' }
  ];

  return (
    <motion.header
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg viewBox="0 0 200 60" className="logo-svg">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--avon-pink)" />
                    <stop offset="100%" stopColor="var(--avon-purple)" />
                  </linearGradient>
                </defs>
                <text
                  x="10"
                  y="40"
                  fontFamily="var(--font-secondary)"
                  fontSize="32"
                  fontWeight="700"
                  fill="url(#logoGradient)"
                >
                  AVON
                </text>
                <text
                  x="10"
                  y="55"
                  fontFamily="var(--font-primary)"
                  fontSize="10"
                  fontWeight="400"
                  fill="var(--dark-gray)"
                  letterSpacing="2"
                >
                  FATIMA PEGADO
                </text>
              </svg>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={location.pathname === link.path ? 'active' : ''}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Header Actions */}
          <div className="header-actions">
            <motion.button
              className="icon-btn"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Pesquisar"
            >
              <Search size={22} />
            </motion.button>

            {/* Cart Button - NEW */}
            <Link to="/carrinho" className="icon-btn cart-btn">
              <motion.div
                className="cart-icon-wrapper"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ShoppingCart size={22} />
                {cartCount > 0 && (
                  <motion.span
                    className="cart-badge"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  >
                    {cartCount}
                  </motion.span>
                )}
              </motion.div>
            </Link>

            {/* Mobile Menu Button */}
            <motion.button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              className="search-bar"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="search-input-wrapper">
                <Search size={20} />
                <input
                  type="text"
                  placeholder="Pesquisar produtos, código..."
                  autoFocus
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="mobile-nav"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <ul>
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={location.pathname === link.path ? 'active' : ''}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
                
                {/* Cart Link in Mobile Menu - NEW */}
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <Link
                    to="/carrinho"
                    className={location.pathname === '/carrinho' ? 'active cart-mobile-link' : 'cart-mobile-link'}
                  >
                    <ShoppingCart size={20} />
                    <span>Carrinho</span>
                    {cartCount > 0 && (
                      <span className="cart-count-mobile">({cartCount})</span>
                    )}
                  </Link>
                </motion.li>
              </ul>

              <div className="mobile-nav-footer">
                <p>Revendedora Oficial Avon</p>
                <p className="text-gradient">Fatima Pegado</p>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;