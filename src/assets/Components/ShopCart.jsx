import './ShopCart.css';


export default function ShopCart({ cartItems }) {
  // Berechnung des Gesamtpreises
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
          {/* Anzeige des Gesamtpreises */}
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
