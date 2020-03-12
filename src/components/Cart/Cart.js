import React from "react";

const Cart = props => {
  const cart = props.cart;

  const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);

  let shipping = 0;
  if (totalPrice > 250) {
    shipping = 0;
  } else if (totalPrice > 100) {
    shipping = 20.99;
  } else if (totalPrice > 0) {
    shipping = 30.66;
  }
  const tex = parseFloat((totalPrice + shipping) * 0.15).toFixed(2);
  const grandPrice = parseFloat(totalPrice + shipping + tex).toFixed(2);
  return (
    <div>
      <h4>Order Summery</h4>
      <p>Items Orderd : {cart.length}</p>
      <p>Shipping Cost:{shipping} </p>
      <p>Tex : {tex}</p>
      <p>Total Price: {grandPrice}</p>
    </div>
  );
};

export default Cart;
