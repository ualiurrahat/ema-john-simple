import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  console.log(cart);
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    // product.quantity = product.quantity || 1;
    //at first, product quantity is 0.
    // so updating quantity in that case
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping += product.shipping;
    quantity = quantity + product.quantity;
  }
  // calculate 7 % tax
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Total Products:{quantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
    </div>
  );
};

export default Cart;
