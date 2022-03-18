import { createSlice } from "@reduxjs/toolkit";
import { SERVER_IP } from "../../constants";


let initialState = {
    username: "",
    fullname: "",
    profileBio: "",
    isSubscribed: "",
    token: localStorage.getItem("token") === null ? "" : localStorage.getItem("token")
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
            return {...initialState, token: ""  }
        }
    }
});

export const { loginAction, logoutAction, signupAction } = slice.actions;
export async function fetchUser(dispatch, _) {
    const token = localStorage.getItem("token");
    if (token !== null) {
        const response = await fetch(SERVER_IP + "/api/getUserData/" + token);
        if (response.status === 200) {
            var json_data = await response.json();
            json_data.token = token;
            dispatch(slice.actions.loginAction(json_data));
        } else {
            dispatch(slice.actions.logoutAction())
        }
    }
}
export default slice.reducer;