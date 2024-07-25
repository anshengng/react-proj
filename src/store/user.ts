import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        username: "",
        token: localStorage.getItem("token") || null,
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
    },
});

export const { setToken, clearToken, setName } = userSlice.actions;
export default userSlice.reducer;
