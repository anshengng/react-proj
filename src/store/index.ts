import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user";

const store = configureStore({
    reducer: {
        userSlice,
    },
});

middleware: (getDefaultMiddleware: any) => getDefaultMiddleware();

export default store;
