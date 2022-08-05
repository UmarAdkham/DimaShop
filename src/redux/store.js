import { configureStore } from "@reduxjs/toolkit";
import shops from "./shopReducer";
import addAdmin from "./adminReducer";

const store = configureStore({
  reducer: {
    shops,
    addAdmin,
  },
});

export default store;
