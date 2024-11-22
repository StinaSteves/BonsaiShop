import { useEffect, useRef } from 'react';
import './Shop.css';
import PropTypes from 'prop-types';
import CARD from './Card.jsx';
import { CARD_CONCEPTS } from '../../data.js';

export default function Shop({ addToCart }) {
  const headingRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const heading = headingRef.current;
      if (!heading) return;

      const rect = heading.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        heading.querySelector('.large-shop').classList.add('visible');
        heading.querySelector('.small-shop').classList.add('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="shopContainer">
      <div className="shopwrapper" ref={headingRef}>
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
