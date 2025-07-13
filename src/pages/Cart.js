import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  // ✅ Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  // ✅ Buy now handler
  const handleBuyNow = () => {
    alert("Thank you for your purchase!");
    // You can also:
    // - Store order in DB
    // - Redirect to success page
    // - Empty cart etc.
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>Rs. {item.price}</p>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </div>
          ))}

          {/* ✅ Total and Buy Now */}
          <div className="cart-summary">
            <h3>Total: Rs. {totalPrice}</h3>
            <button className="buy-btn" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
