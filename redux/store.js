import { configureStore } from "@reduxjs/toolkit";
import authLogin from "./authLogin";

export default configureStore({
  reducer: {
    auth: authLogin
  }
})