import { Chow } from "@/types";
import { create } from "zustand";

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
