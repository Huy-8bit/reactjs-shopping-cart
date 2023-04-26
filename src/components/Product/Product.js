import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Product.css";

const Product = ({ id, name, description, price, image, currency, addToCart, removeFromCart, isInCart }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleClick = () => {
    if (isInCart) {
      removeFromCart(id);
    } else {
      addToCart(id, quantity);
    }
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1000);
  };

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(prevQuantity + amount, 1));
  };

  return (
    <div
      className={`product thumbnail ${isClicked ? "jump" : ""} ${
        isHovered ? "enlarge" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt={name} />
      <div className="caption">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="product__price">
          {price} {currency}
        </div>
        <div className="product__quantity">
          <div className="product__quantity-label">Quantity:</div>
          <div className="product__quantity-select">
            <button className="product__quantity-btn" onClick={() => handleQuantityChange(-1)}>
              -
            </button>
            <div className="product__quantity-display">{quantity}</div>
            <button className="product__quantity-btn" onClick={() => handleQuantityChange(1)}>
              +
            </button>
          </div>
        </div>
        <div className="product__button-container">
          <div className="product__button-wrap">
            <button
              className={`btn ${
                isClicked
                  ? isInCart
                    ? "btn-danger"
                    : "btn-success"
                  : isInCart
                  ? "btn-danger"
                  : "btn-primary"
              } btn-yellow`}
              onClick={handleClick}
              style={{ backgroundColor: "yellow", borderColor: "yellow", color: "black" }}
            >
              {isClicked
                ? isInCart
                  ? "Removed from cart"
                  : "Added to cart"
                : isInCart
                ? "Remove from cart"
                : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  currency: PropTypes.string,
  image: PropTypes.string,
  isInCart: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Product;
