import React, { useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-community/async-storage";

const cartContext = React.createContext();
const loadingContext = React.createContext();
const errContext = React.createContext();

export function useLoading() {
  return useContext(loadingContext);
}

export function useErr() {
  return useContext(errContext);
}

export function useCart() {
  const [cart, addToCart, updateCartItemQuantity, removeFromCart, clearCart] = useContext(
    cartContext
  );
  return {
    cart,
    addToCart,
    updateCartItemQuantity,
    removeFromCart,
    clearCart
  };
}

export function Cart({ children }) {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    setLoading(true);
    AsyncStorage.getItem("cart")
      .then((cart) => {
        if (cart) setCart(JSON.parse(cart));
      })
      .catch((err) => {
        setErr(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function clearCart(){
    setCart([])
  }

  function removeFromCart(product_id) {
    setCart((cart) => {
      return cart.filter((item) => item.product_id !== product_id);
    });
  }

  function updateCartItemQuantity(product_id, quantity) {
    if (quantity <= 0) return;
    setCart((cart) => {
      return cart.map((item) => {
        if (item.product_id === product_id)
          return {
            product_id: item.product_id,
            quantity: parseInt(quantity),
          };
        return item;
      });
    });
  }

  function addToCart(product, quantity) {
    //quantity must be greater than 0
    if (quantity <= 0) return;
    const cartItem = cart.find((item) => item.product_id === product.product_id)
    if (cartItem) {
      //If Item is In Cart Update Quantity
      const newQuantity = parseInt(cartItem.quantity) + parseInt(quantity)
      updateCartItemQuantity(product.product_id, newQuantity );
    } else {
      //else add item to cart
      setCart((items) => {
        return [
          ...items,
          { product_id: product.product_id, quantity: parseInt(quantity) },
        ];
      });
    }
  }

  return (
    <errContext.Provider value={err}>
      <loadingContext.Provider value={loading}>
        <cartContext.Provider
          value={[cart, addToCart, updateCartItemQuantity, removeFromCart, clearCart]}
        >
          {children}
        </cartContext.Provider>
      </loadingContext.Provider>
    </errContext.Provider>
  );
}
