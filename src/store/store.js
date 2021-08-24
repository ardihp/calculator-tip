import { configureStore } from "@reduxjs/toolkit";
import CalcuSlice from "./calcuSlice";

const store = configureStore({
  reducer: {
    calcu: CalcuSlice
  }
});

export default store;
