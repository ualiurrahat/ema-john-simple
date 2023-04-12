import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";

const Shop = () => {
  // loading data
  const [products, setProducts] = useState([]);
  // state to update total products selected in cart
  const [cart,setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // function to add total no. of order in Order Summary
  // add the product to the cart when 'add to cart button is clicked
  const handleAddToCart = (product) => {
    const newCart = [... cart,product];
    setCart(newCart);

  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h4>Order Summary</h4>
        <p>Total Products:{cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
