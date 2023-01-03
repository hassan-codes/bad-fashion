import { combineReducers } from "@reduxjs/toolkit";

import CartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";

export default combineReducers({
  user: userReducer,
  cart: CartReducer,
});
