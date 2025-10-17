"use client";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "@/store/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const data = [
  { id: 1, name: "Product 1", price: 358 },
  { id: 2, name: "Product 2", price: 900 },
  { id: 3, name: "Product 3", price: 345.75 },
  { id: 4, name: "Product 4", price: 400 },
  { id: 5, name: "Product 5", price: 563.87 },
  { id: 6, name: "Product 6", price: 632 },
];

export default function Products() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 to-blue-200 py-10 px-6">
      {/* ---------- HEADER ---------- */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 tracking-wide mb-2">
          🛍️ Our Products
        </h1>
        <p className="text-gray-600 text-lg">
          Browse our collection and add your favorites to the cart
        </p>
      </div>

      {/* ---------- PRODUCTS GRID ---------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {data.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex justify-center items-center text-2xl text-white font-semibold mb-4">
              {p.name[0]}
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mb-1">
              {p.name}
            </h2>
            <p className="text-gray-600 text-lg mb-4">${p.price.toFixed(2)}</p>

            {!cart.find((item) => item.id === p.id) && (
              <button
                onClick={() => dispatch(addToCart(p))}
                className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white px-5 py-2 rounded-lg shadow-md transition-all"
              >
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>

      {/* ---------- CART SECTION ---------- */}
      <div className="mt-16 bg-white rounded-3xl shadow-lg p-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          🧺 Your Cart
        </h2>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-lg text-center py-8">
            Your cart is empty 🛒
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cart.map((p) => (
              <div
                key={p.id}
                className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl shadow-md p-5 text-center"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {p.name}
                </h3>
                <p className="text-gray-600">${p.price.toFixed(2)}</p>
                <p className="text-gray-700 mt-1">Qty: {p.quantity}</p>
                <p className="text-gray-700 mt-1">Total: {p.total}</p>
                <button
                  onClick={() => dispatch(removeFromCart(p.id))}
                  className="mt-3 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow-sm transition-all"
                >
                  Remove
                </button>
                <div className="flex justify-center items-center gap-3">
                  <button
                    onClick={() => dispatch(increaseQuantity(p.id))}
                    className="mt-3 bg-green-500 hover:bg-green-800 text-white px-4 py-2 rounded-md shadow-sm transition-all"
                  >
                    +
                  </button>

                  <button
                    onClick={() => dispatch(decreaseQuantity(p.id))}
                    className="mt-3 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow-sm transition-all"
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
