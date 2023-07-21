import React from "react";
import Layout from "../components/Layout";
import { useCart } from "../lib/CartContext";

const Cart = () => {
  const cart = useCart();
  const remove = (slug) => () => {
    cart.removeFromCart(slug);
  };

  const addToCart = (slug, qty) => () => {
    cart.addToCart({ slug }, qty);
  };
  return (
    <Layout>
      <h1 className="font-bold text-lg py-6">My cart</h1>
      {Object.keys(cart.cart).map((slug) => {
        const product = cart.cart[slug];
        return (
          <div className="border rounded py-6 px-4 mb-4" key={slug}>
            <h2 className="font-bold">{product.product}</h2>
            <p>
              Quantidade:
              <button
                disabled={product.qty <= 1}
                onClick={addToCart(slug, -1)}
                className="disabled:bg-gray-100 p-1  bg-red-200  hover:bg-red-500 rounded"
              >
                -
              </button>
              <span className="p-2">{product.qty}</span>
              <button
                onClick={addToCart(slug, 1)}
                className="p-1  bg-green-200  hover:bg-green-500 rounded"
              >
                +
              </button>
            </p>
            <button
              className="py-2 px-4 mt-2  bg-red-200  hover:bg-red-500 rounded"
              type="button"
              onClick={remove(slug)}
            >
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
