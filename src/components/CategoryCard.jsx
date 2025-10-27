import { Link } from 'react-router-dom';
import './CategoryCard.css';

const CategoryCard = ({ category, count, image, gradient }) => {
  return (
    <Link 
      to={`/produtos?categoria=${encodeURIComponent(category)}`} 
      className="category-card"
      style={{
        background: gradient || 'linear-gradient(135deg, #fce4ec, #f3e5f5)'
      }}
    >
      <div className="category-image-container">
        <img 
          src={image} 
          alt={category}
          className="category-image"
        />
      </div>
      <div className="category-content">
        <h3 className="category-name">{category}</h3>
        <p className="category-count">{count} produtos</p>
      </div>
      <div className="category-overlay"></div>
    </Link>
  );
};

export default CategoryCard;