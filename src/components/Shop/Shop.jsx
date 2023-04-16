import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";

const Shop = () => {
  // loading data
  const [products, setProducts] = useState([]);
  // state to update total products selected in cart
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // function to add total no. of order in Order Summary
  // add the product to the cart when 'add to cart' button is clicked
  const handleAddToCart = (product) => {
    // const newCart = [...cart, product]
    let newCart = [];
    // if product does not exist in the cart, set quantity to 1
    // if it exists, update quantity by 1.
    const exists = cart.find((pd) => pd.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exists];
    }
    // set the cart
    setCart(newCart);
    // adding cart to local storage
    addToDb(product.id);
  };
  // using useEffect to load data from UI to local storage
  // get id of products from local storage
  // and then show the wholde data of the products
  useEffect(() => {
    // storedCart is an object which contains
    // localStorage's  key-value string data
    // in an object form
    const storedCart = getShoppingCart();
    // array to stored products from local storage
    const savedCart = [];
    // step 1: get id of the added product
    // means id of those products that have been added to the cart
    // and their data is saved to the localStorage
    // this data is stored in storedCart as object
    for (const id in storedCart) {
      // step 2: get product from products state by using id
      const addedProduct = products.find((product) => product.id === id);
      // step 3: get quantity of the product
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // step 4: store added products to the savedCart
        savedCart.push(addedProduct);
      }
      // console.log("added product", addedProduct);
    }
    // step 5:set the cart
    setCart(savedCart);
  }, [products]);
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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
