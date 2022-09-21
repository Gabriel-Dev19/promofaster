import { configureStore } from "@reduxjs/toolkit";
import backDropMask from "./backDropMask";

export default configureStore({
  reducer: {
    backdrop: backDropMask
  }
})