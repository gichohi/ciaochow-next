import { LoginRequest } from "@/types";
import { create } from "zustand";

export interface LoginState {
    request: LoginRequest;
    addRequest: (request: LoginRequest) => void;
    removeRequest: () => void;
}

export const useLoginStore =  create<LoginState>((set) => ({
    request: {email: '', password: ''},
    addRequest: (request: LoginRequest) => {
        set({ request });
    },
    removeRequest: () => {
        set({ request: undefined });
    }
}));