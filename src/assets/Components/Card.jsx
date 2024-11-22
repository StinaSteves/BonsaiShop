import "./Card.css";
import PropTypes from "prop-types";
import { useState } from "react";

export default function CARD(props) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleQuantityChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const handleBuyNow = () => {
    props.addToCart(
      { title: props.title, price: props.price, image: props.image },
      quantity
    );
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
              <button onClick={decreaseQuantity} className="quantity-btn">
                -
              </button>
              <input
                type="number"
                value={quantity}
                min="1"
                onChange={handleQuantityChange}
                className="quantity-input"
              />
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

          <button onClick={handleBuyNow} className="buy-now-btn">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}


CARD.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired, // Funktion zum Hinzufügen in den Warenkorb
};
