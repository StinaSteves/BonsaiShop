import "./Card.css";
import PropTypes from "prop-types";
import { useState } from "react";

export default function CARD(props) {
  // Zustand für die Menge (initial auf 1 gesetzt)
  const [quantity, setQuantity] = useState(1);

  // Funktion zum Erhöhen der Menge
  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1); // Menge um 1 erhöhen
  };

  // Funktion zum Verringern der Menge
  const decreaseQuantity = () => {
    if (quantity > 1) { // Verhindern, dass die Menge kleiner als 1 wird
      setQuantity(prevQuantity => prevQuantity - 1); // Menge um 1 verringern
    }
  };

  // Funktion zum Setzen der Menge direkt über das Input-Feld
  const handleQuantityChange = (e) => {
    const value = Number(e.target.value); // Wert aus dem Input
    if (value >= 1) {
      setQuantity(value); // Nur positive Werte oder mindestens 1 erlauben
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="imgBx">
          <img src={props.image} alt={props.title} />
        </div>

        <div className="contentBx">
          <h2>{props.title}</h2>

          <div className="quantity">
            <h3>Menge:</h3>
            <div className="quantity-controls">
              {/* Decrease Button */}
              <button onClick={decreaseQuantity} className="quantity-btn">
                -
              </button>

              {/* Input für Menge */}
              <input
                type="number"
                value={quantity}
                min="1"
                onChange={handleQuantityChange} // Update die Menge direkt durch Eingabe
                className="quantity-input"
              />

              {/* Increase Button */}
              <button onClick={increaseQuantity} className="quantity-btn">
                +
              </button>
            </div>
          </div>

          <div className="price">
            <p>
              <span>{props.price}€</span> per 16 seeds
            </p>
          </div>

          <a href="#">Buy Now</a>
        </div>
      </div>
    </div>
  );
}

CARD.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
