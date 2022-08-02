import { configureStore } from "@reduxjs/toolKit";
import myReducer from "./Action";

export const store = configureStore({
  reducer: {
    myReducer,
  },
});
