import React, { useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData";
import Product from "../Products/Product";
const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [cart, setCart] = useState([]);

  const [products, setProducts] = useState(first10);
  const handdleAddProduct = product => {
    const newCart = [...cart, product];
    setCart(newCart);
    // console.log("produc add", product);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        <p>
          {products.map(product => (
            <Product
              product={product}
              handdleAddProduct={handdleAddProduct}
            ></Product>
          ))}
        </p>
      </div>
      <div className="cart-container">
        <h5>Order Summery: {cart.length}</h5>
      </div>
    </div>
  );
};

export default Shop;
