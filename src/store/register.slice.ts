import { RegisterRequest } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

export interface RegisterState {
    request: RegisterRequest;
}

const initialState: RegisterState = {
    request: {username: '', email: '', password: ''}
}

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        addRequest:((state: RegisterState, action: PayloadAction<RegisterRequest>) => {
            state.request = action.payload
        }),
        removeRequest:((state: RegisterState) => {
            state = initialState
        })
    }
});

export const registerSelector = (state: RootState) => state.registerReducer;
export const { addRequest, removeRequest } = registerSlice.actions;
export default registerSlice.reducer;