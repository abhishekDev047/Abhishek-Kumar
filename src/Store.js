import { configureStore } from "@reduxjs/toolkit";
import ModeReducer from "./features/slices/ModeSlice";

const Store = configureStore({
 reducer:{
    Mode: ModeReducer
 }
});

export default Store;