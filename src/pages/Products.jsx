import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, Grid, List } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories, getProductsByCategory } from '../data/products';
import './Products.css';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const categoryParam = searchParams.get('categoria') || 'all';
    setSelectedCategory(categoryParam);
    setFilteredProducts(getProductsByCategory(categoryParam));
  }, [searchParams]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    if (categoryId === 'all') {
      searchParams.delete('categoria');
    } else {
      searchParams.set('categoria', categoryId);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="products-page">
      <section className="page-header">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Nossos Produtos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Explore nossa coleção completa de produtos Avon
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="products-filters">
            <div className="category-filters">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`category-filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  <span>{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="products-count">
            <p>Mostrando <strong>{filteredProducts.length}</strong> produtos</p>
          </div>

          <div className="grid grid-3">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="no-products">
              <p>Nenhum produto encontrado nesta categoria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;