import React from "react";

import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  useEffect(() => {
    const previousCart = localStorage.getItem("cart");
    if (previousCart) {
      setCart(JSON.parse(previousCart));
    }
  }, []);

  let cartSize = 0;
  if (cart) {
    cartSize = Object.keys(cart).length;
  }

  const addToCart = (product, qty) => {
    let currentProduct = product;
    setCart((oldCart) => {
      if (oldCart[product.slug]) {
        qty = oldCart[product.slug].qty + qty;
        currentProduct = oldCart[product.slug];
      }
      currentProduct.qty = qty;
      const newCart = {
        ...oldCart,
        [product.slug]: currentProduct,
      };
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const removeFromCart = (slug) => {
    setCart((oldCart) => {
      const newCart = {};
      Object.keys(oldCart)
        .filter((s) => s !== slug)
        .forEach((slug) => {
          newCart[slug] = oldCart[slug];
        });
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, size: cartSize }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
