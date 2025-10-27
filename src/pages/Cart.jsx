import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';
import { ShoppingBag, Plus, Minus, Trash2, ShoppingCart, MessageCircle, Sparkles } from 'lucide-react';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal, getCartCount } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-AO', {
      style: 'currency',
      currency: 'AOA',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleWhatsAppOrder = () => {
    const whatsappNumber = '244923216616';
    let message = '🛍️ *Olá! Gostaria de fazer um pedido:*\n\n';
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      message += `   Código: ${item.code}\n`;
      message += `   Quantidade: ${item.quantity}\n`;
      message += `   Preço: ${formatPrice(item.price * item.quantity)}\n\n`;
    });
    
    message += `*Total: ${formatPrice(getCartTotal())}*\n\n`;
    message += 'Por favor, confirme a disponibilidade e prazo de entrega. Obrigado! 💕';
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-container">
          <div className="cart-header">
            <h1>Carrinho de Compras</h1>
            <p>Seu carrinho está vazio</p>
          </div>
          <div className="cart-items">
            <div className="empty-cart">
              <div className="empty-cart-icon">
                <ShoppingCart size={80} />
              </div>
              <h2>Seu carrinho está vazio</h2>
              <p>Adicione produtos incríveis ao seu carrinho!</p>
              <Link to="/produtos" className="continue-shopping">
                <ShoppingBag size={20} />
                Continuar Comprando
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-header">
          <h1>Carrinho de Compras</h1>
          <p>{getCartCount()} {getCartCount() === 1 ? 'produto' : 'produtos'} no carrinho</p>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <div className="cart-item-top">
                    <div className="cart-item-info">
                      <h3>{item.name}</h3>
                      <p>{item.code}</p>
                      {item.shade && <p style={{ color: 'var(--primary-color)', fontWeight: 600 }}>Tonalidade: {item.shade}</p>}
                    </div>
                    <div className="cart-item-price">
                      {formatPrice(item.price * item.quantity)}
                    </div>
                  </div>
                  <div className="cart-item-actions">
                    <div className="quantity-controls">
                      <button 
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={18} />
                      </button>
                      <span className="quantity-value">{item.quantity}</span>
                      <button 
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus size={18} />
                      </button>
                    </div>
                    <button 
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 size={18} />
                      Remover
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Resumo do Pedido</h2>
            
            <div className="summary-row">
              <span className="summary-label">Subtotal ({getCartCount()} {getCartCount() === 1 ? 'item' : 'itens'})</span>
              <span className="summary-value">{formatPrice(getCartTotal())}</span>
            </div>

            <div className="summary-row">
              <span className="summary-label">Entrega</span>
              <span className="summary-value" style={{ color: 'var(--primary-color)' }}>A combinar</span>
            </div>

            <div className="summary-total">
              <span className="summary-label">Total</span>
              <span className="summary-value">{formatPrice(getCartTotal())}</span>
            </div>

            <div className="savings-badge">
              <Sparkles size={18} />
              Produtos 100% Originais Avon
            </div>

            <div className="checkout-actions">
              <button className="checkout-btn" onClick={handleWhatsAppOrder}>
                <MessageCircle size={22} />
                Finalizar no WhatsApp
              </button>
              <button className="clear-cart-btn" onClick={clearCart}>
                <Trash2 size={20} />
                Limpar Carrinho
              </button>
            </div>

            <Link to="/produtos" className="continue-shopping" style={{ marginTop: '20px', textAlign: 'center' }}>
              <ShoppingBag size={18} />
              Continuar Comprando
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;