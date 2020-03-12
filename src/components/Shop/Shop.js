import React, { useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData";
import Product from "../Products/Product";
const Shop = () => {
  const first10 = fakeData.slice(0, 10);

  const [products, setProducts] = useState(first10);

  return (
    <div className="shop-container">
      <div className="product-container">
        <p>
          {products.map(product => (
            <Product product={product}></Product>
          ))}
        </p>
      </div>
      <div className="cart-container">cart</div>
    </div>
  );
};

export default Shop;
