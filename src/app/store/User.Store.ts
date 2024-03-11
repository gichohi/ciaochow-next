import { create } from "zustand";
import { User } from "../types";

export interface UserState {
    user: User;
    addUser: (user: User) => void;
    removeUser: () => void;
}

export const useUserStore =  create<UserState>((set) => ({
    user: {email: '', token: ''},
    addUser: (user: User) => {
        set({ user });
    },
    removeUser: () => {
        set({ user: undefined });
    }
}));