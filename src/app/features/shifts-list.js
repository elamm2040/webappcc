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
        },
        editShift: (state, { payload }) => {
            state.value.forEach((v, i) => {
                if(v.id == payload.id){
                    state.value[i] = payload;
                }
            });
        }
    }
});

export const { addShift, addAllShifts, editShift } = shiftsList.actions;

export default shiftsList.reducer;
