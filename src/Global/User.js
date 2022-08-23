import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  cart: [],
  qty: 0,
  subTotalPrice: 0,
  totalPrice: 10,
};

const User = createSlice({
  name: "User",
  initialState,
  reducers: {
    createUser: (state, { payload }) => {
      state.user = payload;
    },
    removeUser: (state, { payload }) => {
      state.user = null;
    },

    addToCart: (state, { payload }) => {
      const check = state.cart.findIndex((el) => el._id === payload._id);

      if (check >= 0) {
        state.cart[check].qty += 1;
      } else {
        state.cart.push({ ...payload, qty: 1 });
      }

      state.qty += 1;
      state.subTotalPrice += payload.price;
      state.totalPrice += payload.price;
    },
    removeCart: (state, { payload }) => {
      const check = state.cart.findIndex((el) => el._id === payload._id);
      // console.log(check)

      if (state.cart[check].qty > 1) {
        state.cart[check].qty -= 1;
      } else {
        state.cart = state.cart.filter((el) => el._id !== payload._id);
      }
      state.qty -= 1;
      state.subTotalPrice -= payload.price;
      state.totalPrice -= payload.price;
    },
    deleteCart: (state, { payload }) => {
      state.cart = [];
      state.subTotalPrice = 0;
      state.qty = 0;
    },
  },
});

export const { createUser, removeUser, addToCart, removeCart, deleteCart } =
  User.actions;

export default User.reducer;
