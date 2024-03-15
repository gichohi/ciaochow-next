import { Chow } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

export interface ChowState {
    chow: Chow;
}

const initialState: ChowState = {
    chow: {title: '', description: '', image: ''}
}

const chowSlice = createSlice({
    name: "chow",
    initialState,
    reducers: {
        addChow:((state: ChowState, action: PayloadAction<Chow>) => {
            state.chow = action.payload
        }),
        removeChow:((state: ChowState) => {
            state = initialState
        })
    }
});

export const chowSelector = (state: RootState) => state.chowReducer;
export const { addChow, removeChow } = chowSlice.actions;
export default chowSlice.reducer;