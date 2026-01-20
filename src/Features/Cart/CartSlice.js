import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState: savedCart,
  reducers: {
    addToCart(state, action) {
      const item = state.find(i => i.id === action.payload.id);
      if (item) {
        if (item.quantity < action.payload.stock) {
          item.quantity++;
        } else {
          alert("Stock limit reached");
        }
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
