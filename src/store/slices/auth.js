import { createSlice } from "@reduxjs/toolkit";


var initialState = {
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
            state.token = action.payload.token;
            return state
        },
        logoutAction: () => {
            localStorage.removeItem("token");
            return initialState
        }
    }
});

export const { loginAction, logoutAction } = slice.actions;
export async function fetchUser(dispatch, _) {
    const token = localStorage.getItem("token");
    if (token !== null) {
        const response = await fetch("http://localhost:8080/api/getUserData/" + token);
        if (response.status === 200) {
            var json_data = await response.json();
            json_data.token = token;
            console.log(json_data); 
            dispatch(slice.actions.loginAction(json_data));
        }
    }
}
export default slice.reducer;