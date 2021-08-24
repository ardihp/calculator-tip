import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bill: "",
  people: "",
  tip: "",
  tipAmount: 0,
  total: 0
};

const calcuSlice = createSlice({
  name: "calcu",
  initialState,
  reducers: {
    storeBill: (state, action) => {
      state.bill = action.payload;
    },
    storePeople: (state, action) => {
      state.people = action.payload;
    },
    storeTip: (state, action) => {
      state.tip = action.payload;
    },
    storeTipAmount: (state, action) => {
      state.tipAmount = action.payload;
    },
    storeTotal: (state, action) => {
      state.total = action.payload;
    },
    reset: () => initialState
  }
});

export const {
  storeBill,
  storePeople,
  storeTip,
  storeTipAmount,
  storeTotal,
  reset
} = calcuSlice.actions;
export default calcuSlice.reducer;
