import { createSlice } from '@reduxjs/toolkit';

export const signAuto = createSlice({
    name: 'signAuto',
    initialState: {
        value: 0,
        onLine: 0
    },
    reducers: {
        addSignAutoValue: (state, { payload }) => {
            state.value = payload;
        },
        addSignAutoOnLineValue: (state, { payload }) => {
            state.onLine = payload;
        },
        cleanSignAutoValues: (state) => {
            state.value = 0;
            state.onLine = 0;
        }
    }
});

export const { addSignAutoValue, addSignAutoOnLineValue, cleanSignAutoValues } = signAuto.actions;

export default signAuto.reducer;