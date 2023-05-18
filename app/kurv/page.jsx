"use client";
import { useContext } from "react";
import { CartContext } from "../components/CartContext";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="flex gap-20 ">
        {state.map((item) => (
          <div key={item.id} className="mb-4 p-4 border rounded shadow-lg">
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            <p className="mb-2">Quantity: {item.quantity}</p>
            <p className="mb-2">Total: ${item.price * item.quantity}</p>
            <div className="flex space-x-2">
              <button onClick={() => dispatch({ type: "REMOVE_ITEM", id: item.id })} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Remove
              </button>
              <button onClick={() => dispatch({ type: "INCREMENT_ITEM", id: item.id })} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Add More
              </button>
              <button onClick={() => dispatch({ type: "DECREMENT_ITEM", id: item.id })} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                Remove Some
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
