import React, { useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData";
import Product from "../Products/Product";
import Cart from "../Cart/Cart";
const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [cart, setCart] = useState([]);
  const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);

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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
