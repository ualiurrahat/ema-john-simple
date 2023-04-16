import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  console.log(cart);
  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice += product.price;
    totalShipping += product.shipping;
  }
  // calculate 7 % tax
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Total Products:{cart.length}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
    </div>
  );
};

export default Cart;
