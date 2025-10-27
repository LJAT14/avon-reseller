import { Link } from 'react-router-dom';
import { ShoppingBag, Check } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-AO', {
      style: 'currency',
      currency: 'AOA',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <Link to={`/produtos/${product.id}`} className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
        />
        {product.isNew && <span className="product-badge">Novo</span>}
        {product.discount && (
          <span className="product-badge discount-badge">-{product.discount}%</span>
        )}
      </div>
      
      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-code">{product.code}</p>
        
        {product.shade && (
          <p className="product-shade">{product.shade}</p>
        )}
        
        <div className="product-footer">
          <div className="product-pricing">
            {product.originalPrice && (
              <span className="original-price">{formatPrice(product.originalPrice)}</span>
            )}
            <span className="product-price">{formatPrice(product.price)}</span>
          </div>
          
          <button 
            className={`add-to-cart-btn ${isAdded ? 'added' : ''}`}
            onClick={handleAddToCart}
            aria-label="Adicionar ao carrinho"
          >
            {isAdded ? (
              <>
                <Check size={18} />
                <span>Adicionado!</span>
              </>
            ) : (
              <>
                <ShoppingBag size={18} />
                <span>Adicionar</span>
              </>
            )}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;