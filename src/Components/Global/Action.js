import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  qty: 0,
  totalPrice: 0,
};

const Action = createSlice({
  name: oja,
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const check = state.cart.findIndex((el) => el._id === payload._id);

      if (check >= 0) {
        state.cart[check].qty += 1;
      } else {
        state.cart.push({ ...payload, qty: 1 });
      }

      state.qty += 1;
      state.totalPrice += payload.qty * payload.price;
    },
  },
});

export const {} = Action.actions;

export default Action.reducer;
