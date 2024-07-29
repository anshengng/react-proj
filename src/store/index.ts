import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user";

const store = configureStore({
    reducer: {
        userSlice,
    },
});

middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
        //关闭序列化状态检测中间件
        serializableCheck: false,
    });

export default store;
