import { createSlice } from "@reduxjs/toolkit";

let lastId = 3;

export const adminSlice = createSlice({
  name: "admin",
  initialState: [],

  reducers: {
    addAdmin: (state, action) => {
      state.push({
        id: ++lastId,
        name: action.payload.name,
        username: action.payload.username,
        promocode: action.payload.promocode
      });
    },
  },
});

export const { addAdmin } = adminSlice.actions;
export default adminSlice.reducer;
