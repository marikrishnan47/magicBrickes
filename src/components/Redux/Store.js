import { configureStore } from "@reduxjs/toolkit";
import Collections from "./Slice";

export const Stores = configureStore({
  reducer: {
    StoreAll: Collections,
  }
});
    