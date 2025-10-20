import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existing = state.cart.find((p) => p.id === action.payload.id); //check only id as a prop
      if (!existing) {
        state.cart.push({
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          quantity: 1,
          total: action.payload.price,
        });
      }
      //   if (!existing) {
      //     state.cart.push(action.payload);
      //     // if the prod not found/added add ful object--> prod
      //     // state.cart.push({ id: action.payload.id, name: action.payload.name }); // if the prod not found/added add ful object--> prod
      // // cart.push--> new object be push has a prop name called name

      // }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((p) => p.id !== action.payload);
    },

    increaseQuantity: (state, action) => {
      const item = state.cart.find((p) => p.id === action.payload);
      if (item) {
        if (item.quantity >= 1) {
          item.quantity += 1;
          item.total = item.price * item.quantity;
        }
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.cart.find((p) => p.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          item.total = item.price * item.quantity;
        } else {
          // If quantity = 1, remove product from cart
          state.cart = state.cart.filter((p) => p.id !== action.payload);
        }
      }
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
