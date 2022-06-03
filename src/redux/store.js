import { configureStore } from "@reduxjs/toolkit";
import shops from "./shopReducer"

const store = configureStore({
  reducer:{
    shops,
  }
})

export default store;