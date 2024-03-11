import { create } from "zustand";
import { Chow } from "../types";

export interface ChowState {
    chow: Chow;
    setChow: (chow: Chow) => void;
    removeChow: () => void;
}

export const useChowStore =  create<ChowState>((set) => ({
    chow: {title: "", description: "", image: ""},
    setChow: (chow: Chow) => {
        set({chow})
    },
    removeChow: () => {
        set({chow: undefined})
    }
}));
