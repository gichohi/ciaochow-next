import { LoginRequest } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

export interface LoginState {
    request: LoginRequest;
}

const initialState: LoginState = {
    request: {email: '', password: ''}
}

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        addRequest:((state: LoginState, action: PayloadAction<LoginRequest>) => {
            state.request = action.payload
        }),
        removeRequest:((state: LoginState) => {
            state = initialState
        })
    }
});

export const loginSelector = (state: RootState) => state.loginReducer;
export const { addRequest, removeRequest } = loginSlice.actions;
export default loginSlice.reducer;
