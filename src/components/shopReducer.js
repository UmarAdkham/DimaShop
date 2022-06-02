import { createSlice } from "@reduxjs/toolkit";

let lastId = 3;

export const ShopSlice = createSlice({
  name: "product",
  initialState: [
    {
      id: 1,
      title: "Ikki eshik orasi",
      author: "O'tkir Hoshimov",
      price: 15000,
      isSold: false,
    },
    {
      id: 2,
      title: "Metro 2034",
      author: "Dmitriy Gluhovskiy",
      price: 25000,
      isSold: false,
    },
    {
      id: 3,
      title: "Shaytanat",
      author: "Tohir Malik",
      price: 23000,
      isSold: false,
    },
  ],

  reducers: {
    addShop: (state, action) => {
      state.push({
        id: ++lastId,
        title: action.payload.title,
        author: action.payload.author,
        price: action.payload.price,
        isSold: false,
      });
    },
  },
});

export const { addShop } = ShopSlice.actions;
export default ShopSlice.reducer;
