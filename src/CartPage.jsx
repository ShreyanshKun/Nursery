import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from './cartSlice';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './CartPage.css';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false); // 🆕 state for popup

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h2>Your cart is empty 🪴</h2>
        <Link to="/products">
          <button>Continue Shopping</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div>
            <h4>{item.name}</h4>
            <p>Price: ₹{item.price}</p>
            <div>
              <button
                onClick={() => dispatch(updateQuantity({ id: item.id, amount: -1 }))}
                disabled={item.quantity === 1}
              >
                -
              </button>
              <span style={{ margin: '0 10px' }}>{item.quantity}</span>
              <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: 1 }))}>+</button>
            </div>
            <p>Total: ₹{item.price * item.quantity}</p>
            <button onClick={() => dispatch(removeFromCart(item.id))} className='delete-btn'>Remove</button>
          </div>
        </div>
      ))}

      <hr />
      <h3>Total Items: {totalItems}</h3>
      <h3>Total Cost: ₹{totalCost}</h3>
      <div>
        <Link to="/products"><button className='butt'>Continue Shopping</button></Link>
        <button className='butt' onClick={() => setShowPopup(true)}>Checkout</button>
      </div>

      {/* 🆕 Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>🪴 New Plants Coming Soon!</h2>
            <p>Stay tuned for exciting additions to our collection.</p>
            <button onClick={() => setShowPopup(false)} className="close-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
