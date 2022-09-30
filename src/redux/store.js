import {configureStore} from "@reduxjs/toolkit";
import cartSLice from "./slice/cartSlice";

const store = configureStore({
    reducer : {
        cart : cartSLice,
    }
})
export default store