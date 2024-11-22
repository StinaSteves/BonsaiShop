import Navigation from './assets/Components/Naviation.jsx'
import Header from './assets/Components/Header.jsx'
import Shop from './assets/Components/Shop.jsx'
import { FaShoppingCart } from "react-icons/fa";
import './App.css'

function App() {


  return (
    <div>
      <Navigation />
      <div className="shopping-cart">
      <FaShoppingCart className="cart-icon" />
      <span className="cart-count">0</span>
    </div>
      <Header />
      <Shop />
    </div>
  )
}

export default App
