import { User } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

export interface UserState {
    user: User;
}

const initialState: UserState = {
    user: {email: '', token: ''}
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser:((state: UserState, action: PayloadAction<User>) => {
            state.user = action.payload
        }),
        removeUser:((state) => {
            state = initialState
        })
    }
});

export const userSelector = (state: RootState) => state.userReducer;
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;