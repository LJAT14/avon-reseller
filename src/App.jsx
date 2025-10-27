import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext'; // ADD THIS
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <Router>
      <CartProvider> {/* WRAP EVERYTHING WITH THIS */}
        <div className="App">
          <Header />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/produtos/:id" element={<ProductDetail />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
          <Footer />
          <WhatsAppButton />
        </div>
      </CartProvider> {/* CLOSE IT HERE */}
    </Router>
  );
}

export default App;