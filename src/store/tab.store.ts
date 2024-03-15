import { create } from "zustand"

export interface TabState {
    active: number,
    setActive: (active: number) => void;
}

export const useTabStore =  create<TabState>((set) => ({
    active: 0,
    setActive: (active: number) => {
        set({active})
    }
}));
