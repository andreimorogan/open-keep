import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface checkedNotesState {
    list: number[];
}

const initialState: checkedNotesState = {
    list: [],
};

export const counterSlice = createSlice({
    name: 'checkedNotes',
    initialState,
    reducers: {
        setCheckedNotes: (state, action: PayloadAction<number[]>) => {
            state.list = action.payload;
        },
    },
});

export const { setCheckedNotes } = counterSlice.actions;

export default counterSlice.reducer;
