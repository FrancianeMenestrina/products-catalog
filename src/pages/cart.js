import React from "react";
import Layout from "../components/Layout";
import { useCart } from "../lib/CartContext";

const Cart = () => {
  const cart = useCart();
  const remove = (slug) => () => {
    cart.removeFromCart(slug);
  };
  return (
    <Layout>
      <h1>My cart</h1>
      {Object.keys(cart.cart).map((slug) => {
        const product = cart.cart[slug];
        return (
          <div key={slug}>
            <h2>{product.product}</h2>
            <p>Quantidade:{product.qty}</p>
            <button type="button" onClick={remove(slug)}>
              Remover
            </button>
          </div>
        );
      })}
      {/* <pre>{JSON.stringify(cart, null, 2)}</pre> */}
    </Layout>
  );
};

export default Cart;
