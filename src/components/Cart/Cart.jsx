import React from "react";
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    let totalPrice = 0;
    for(const product of cart)
    {
        totalPrice += product.price;
    }
  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Total Products:{cart.length}</p>
      <p>Total Price:{totalPrice}</p>
      <p>Total Shipping:</p>
      <p>Tax:</p>
      <h5>Grand Total:</h5>
    </div>
  );
};

export default Cart;
