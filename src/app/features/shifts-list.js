import { createSlice } from '@reduxjs/toolkit';

export const shiftsList = createSlice({
    name: 'shifts',
    initialState: {
        value: []
    },
    reducers: {
        addShift: (state, { payload }) => {
            state.value.push(payload);
        },
        addAllShifts: (state, { payload }) => {
            state.value = payload;
        }
    }
});

export const { addShift, addAllShifts } = shiftsList.actions;

export default shiftsList.reducer;
