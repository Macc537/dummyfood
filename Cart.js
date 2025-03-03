import { useEffect } from "react";
import "./Cart.css";

const Cart = ({ cart, removeFromCart, updateQuantity, showCart, closeCart }) => {
  const totalAmount = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  useEffect(() => {
    if (showCart) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showCart]);

  return (
    <div className={`cart-sidebar ${showCart ? 'open' : ''}`}>
      <div className="cart-header">
        <h3>Shopping Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})</h3>
        <button className="close-btn" onClick={closeCart}>×</button>
      </div>
      
      <div className="cart-content">
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-info">
                  <h4>{item.name}</h4>
                  <div className="quantity-controls">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <p>₹{item.price * item.quantity}</p>
                </div>
                <button 
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Remove item"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
        <div className="cart-footer">
          <div className="total-amount">
            <span>Total:</span>
            <span>₹{totalAmount}</span>
          </div>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;