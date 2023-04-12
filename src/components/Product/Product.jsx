import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, seller, price, ratings } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <h6 className="product-name">{name}</h6>
      <div className="product-info">
        <p>Price:${price}</p>
        <p>Manufacturer:{seller}</p>
        <p>Rating: {ratings} Stars</p>
      </div>
      <button className="btn-cart">Add to Cart</button>
    </div>
  );
};

export default Product;
