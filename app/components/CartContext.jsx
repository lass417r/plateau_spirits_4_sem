"use client";

import { createContext, useReducer } from "react";

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.item];
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.id);
    case "INCREMENT_ITEM":
      return state.map((item) => (item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item));
    case "DECREMENT_ITEM":
      return state.map((item) => (item.id === action.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, []);

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};
