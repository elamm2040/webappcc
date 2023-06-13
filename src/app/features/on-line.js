import { createSlice } from '@reduxjs/toolkit';

export const onLine = createSlice({
    name: 'onLine',
    initialState: {
        value: false
    },
    reducers: {
        addOnLineValue: (state, { payload }) => {
            state.value = payload;
        }
    }
});

export const { addOnLineValue } = onLine.actions;

export default onLine.reducer;