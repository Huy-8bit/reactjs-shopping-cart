import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import './Cart.css';

const Cart = ({ items, total, currency, removeFromCart }) => {

    const getTotalPrice = () => {
        let totalPrice = 0;
        return totalPrice.toFixed(2);
    }

    return (
        <div>
          <h3>Your cart</h3>
    
          <div className="cart">
            <div className="panel panel-default">
              <div className="panel-body">
                {items.length > 0 && (
                  <div className="cart__body">
                    {items.map((item) => {// add this line to check the item object
                      return (
                        <CartItem
                          key={item.id}
                          {...item}
                          onClick={() => removeFromCart(item.id)}
                        />
                      );
                    })}
                  </div>
                )}
                {items.length === 0 && (
                  <div className="alert alert-info">Cart is empty</div>
                )}
                <div className="cart__total">
                  Total: {total} {currency}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
    removeFromCart: PropTypes.func.isRequired
}

export default Cart;
