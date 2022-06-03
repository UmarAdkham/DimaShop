import { createSlice } from "@reduxjs/toolkit";

let lastId = 3;

export const ShopSlice = createSlice({
  name: "product",
  initialState: [
    {
      id: 1,
      name: "7/11",
      address: "Chorsu"
    },
    {
      id: 2,
      name: "Abu Saxiy",
      address: "Chilonzor dahasi"
    },
    {
      id: 3,
      name: "Azon.uz",
      address: "Paxta ko'chasi"
    },
  ],

  reducers: {
    addShop: (state, action) => {
      state.push({
        id: ++lastId,
        name: action.payload.name,
        address: action.payload.address,
      });
    },
  },
});

export const { addShop } = ShopSlice.actions;
export default ShopSlice.reducer;
