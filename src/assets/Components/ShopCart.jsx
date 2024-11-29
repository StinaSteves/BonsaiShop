import PropTypes from 'prop-types'; 
import './ShopCart.css';

export default function ShopCart({ cartItems }) {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * parseFloat(item.price),
    0
  );

  return (
    <div className='cartBackround'>
      <div className="cart">
        <h2>Your Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="cart-item-details">
                    <p>{item.title} - {item.quantity} x {item.price}€</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-total">
              <h3>Total: {totalPrice.toFixed(2)}€</h3>
            </div>
            <button className='buyBtn'>pay now</button>
          </div>
        )}
      </div>
    </div>
  );
}


ShopCart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired, 
      quantity: PropTypes.number.isRequired, 
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired, 
      image: PropTypes.string, 
    })
  ).isRequired,
};
