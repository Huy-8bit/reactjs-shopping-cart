import React from 'react';
import PropTypes from 'prop-types';
import './CartItem.css';

const CartItem = ({ id, name, price, quantity, currency, image, onClick }) => {
  return (
    <div className="cart-item">
      <div className="cart-item__image-container">
        <img src={image} alt={name} />
      </div>
      <div className="cart-item__details">
        <div className="cart-item__name">{name}</div>
        <div className="cart-item__price">
          {price} {currency}
        </div>
        <div className="cart-item__quantity">Quantity: {quantity}</div>
        <button className="cart-item__remove-btn btn btn-danger" onClick={onClick}>
          Remove
        </button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CartItem;
