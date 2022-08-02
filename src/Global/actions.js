import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  qty: 0,
  totalPrice: 0,
};

const actions = createSlice({
  name: "oja",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      //   console.log({ ...payload });
      const check = state.cart.findIndex((el) => el._id === payload._id);

      if (check >= 0) {
        state.cart[check].qty += 1;
      } else {
        state.cart.push({ ...payload, qty: 1 });
      }

      //   const newQty = state.cart[check].qty;
      state.qty += 1;
      console.log(payload.price);
      //   console.log(newQty);
      //   const newPrice = Number(payload.price) * Number(payload.qty);
      //   console.log(newPrice);

      //   state.totalPrice += ;
      //   console.log(state.totalPrice);
    },

    removeCart: (state, { payload }) => {
      const check = state.cart.findIndex((el) => el._id === payload._id);

      if (state.cart[check].qty > 1) {
        state.cart[check].qty -= 1;
      } else {
        state.cart = state.cart.filter((el) => el._id !== payload._id);
      }
      state.qty -= 1;
      state.totalPrice -= payload.price;
    },
  },
});

export const { addToCart, removeCart } = actions.actions;

export default actions.reducer;
