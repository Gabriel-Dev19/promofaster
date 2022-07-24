import { configureStore } from "@reduxjs/toolkit";
import authLogin from "./authLogin";
import backDropMask from "./backDropMask";

export default configureStore({
  reducer: {
    auth: authLogin,
    backdrop: backDropMask
  }
})