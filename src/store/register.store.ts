import { RegisterRequest } from "@/types";
import { create } from "zustand";

export interface RegisterState {
    request: RegisterRequest;
    addRequest: (request: RegisterRequest) => void;
    removeRequest: () => void;
}

export const useRegisterStore =  create<RegisterState>((set) => ({
    request: {username: '', email: '', password: ''},
    addRequest: (request: RegisterRequest) => {
        set({ request });
    },
    removeRequest: () => {
        set({ request: undefined });
    }
}));