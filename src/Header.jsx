import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css'; // optional

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">🌿BotaniCasa</Link>
      </div>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart" className="cart-link">
          🛒 Cart ({totalItems})
        </Link>
      </nav>
    </header>
  );
};

export default Header;
