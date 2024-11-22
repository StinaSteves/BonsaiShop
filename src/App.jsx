import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './assets/Components/Header.jsx';
import Shop from './assets/Components/Shop.jsx';
import Navigation from './assets/Components/Naviation.jsx'
import { FaShoppingCart } from "react-icons/fa";
import ShopCart from './assets/Components/ShopCart.jsx';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    const existingItem = cart.find(cartItem => cartItem.title === item.title);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.title === item.title
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  return (
    <Router>
      <div>
        <Navigation />
        <div className="shopping-cart">
          <Link to="/cart">
            <FaShoppingCart className="cart-icon" />
            <span className="cart-count">{cart.reduce((total, item) => total + item.quantity, 0)}</span>
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<>
            <Header />
            <Shop addToCart={addToCart} />
          </>} />
          <Route path="/cart" element={<ShopCart cartItems={cart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
