import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        username: "",
        token: localStorage.getItem("token") || null,
        menuList: [],
    },
    reducers: {
        setToken(state, { payload }) {
            state.token = payload;
            localStorage.setItem("token", payload);
        },
        clearToken(state) {
            state.token = "";
            localStorage.removeItem("token");
        },
        setName(state, { payload }) {
            state.username = payload;
        },
        setMenu(state, { payload }) {
            state.menuList = payload;
        },
    },
});

export const { setToken, clearToken, setName, setMenu } = userSlice.actions;
export default userSlice.reducer;
