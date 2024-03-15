import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user.slice";
import loginReducer from "./login.slice";
import registerReducer from "./register.slice";
import chowReducer from "./chow.slice";


export const store = configureStore({
    reducer: {
        userReducer,
        loginReducer,
        registerReducer,
        chowReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;