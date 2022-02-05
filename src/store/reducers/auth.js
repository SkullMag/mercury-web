import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    fullname: "",
    profileBio: "",
    isSubscribed: "",
    token: ""
};

export const slice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        loginAction: (state, action) => {
            state.fullname = action.payload.fullname;
            state.isSubscribed = action.payload.isSubscribed;
            state.username = action.payload.username;
            state.profileBio = action.payload.profileBio;
            state.token = action.payload.token
            return state
        }
    }
});

export const { loginAction } = slice.actions;
export default slice.reducer;