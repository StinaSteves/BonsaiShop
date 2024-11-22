import './Shop.css';
import PropTypes from 'prop-types';
import CARD from './Card.jsx';
import { CARD_CONCEPTS } from '../../data.js';

export default function Shop({ addToCart }) {
  return (
    <div className="shopContainer">
      <div className="shopwrapper">
        <h1 className="shop-heading">
          <span className="large-shop">SEEDS</span>
          <span className="small-shop">seeds</span>
        </h1>
      </div>
      <div className="card">
        {CARD_CONCEPTS.map((concept, index) => (
          <CARD key={index} {...concept} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}


Shop.propTypes = {
  addToCart: PropTypes.func.isRequired, 
};
